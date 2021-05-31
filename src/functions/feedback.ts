import type { APIGatewayEvent, Context } from "aws-lambda";
import * as client from "@sendgrid/mail";
import * as GoogleSpreadsheet from "google-spreadsheet";

interface Feedback {
  emotion: number;
  note?: string;
  url: string;
}

async function saveFeedbackInSheet(feedback: Feedback): Promise<boolean> {
  try {
    const doc = new GoogleSpreadsheet(process.env.DOCS_FEEDBACK_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.DOCS_FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.DOCS_FEEDBACK_GOOGLE_PRIVATE_KEY,
    });
    const sheet = doc.sheetsByTitle["Raw Feedback"];
    await sheet.addRow(
      [Date.now(), feedback.emotion, feedback.note, feedback.url],
      { insert: true }
    );
    // TODO: Submit feedback to Sheet
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function sendFeedbackViaEmail(feedback: Feedback): Promise<boolean> {
  client.setApiKey(process.env.SENDGRID_API_KEY);
  const data: client.MailDataRequired = {
    from: "Docs Feedback Widget",
    subject: `Docs Feedback - ${feedback.url}`,
    to: [process.env.DOCS_FEEDBACK_EMAIL_TO],
    content: [
      {
        type: "text/plain",
        value: `Feedback received
        URL: ${feedback.url}
        Emotion: ${feedback.emotion}
        Note: ${feedback.note || "N/A"}`,
      },
    ],
    trackingSettings: {
      clickTracking: {
        enable: false,
        enableText: false,
      },
      openTracking: {
        enable: false,
      },
    },
  };

  try {
    await client.send(data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function submitFeedback(
  feedback: Feedback
): Promise<{ statusCode: number }> {
  const isSavedInSheet = await saveFeedbackInSheet(feedback);
  const isSentViaEmail = await sendFeedbackViaEmail(feedback);

  return {
    statusCode: isSavedInSheet && isSentViaEmail ? 201 : 500,
  };
}

exports.handler = function (event: APIGatewayEvent, _: Context, callback: any) {
  console.log(JSON.stringify(event.body));
  const feedback: Feedback = JSON.parse(event.body!) as Feedback;

  submitFeedback(feedback)
    .then((response) =>
      callback(null, {
        statusCode: response.statusCode,
        body:
          response.statusCode === 201
            ? "Feedback added"
            : "Oh no, something failed.",
      })
    )
    .catch((err) => {
      console.error(err);
      callback(err, null);
    });
};
