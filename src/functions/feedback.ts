import type { APIGatewayEvent, Context } from "aws-lambda";
import * as GoogleSpreadsheet from "google-spreadsheet";

interface Feedback {
  emotion: number;
  note?: string;
  url: string;
}

async function submitFeedback(
  feedback: Feedback
): Promise<{ statusCode: number; errorMessage?: string }> {
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
    return {
      statusCode: 201,
    };
  } catch (e) {
    return {
      statusCode: 500,
      errorMessage: `Error : ${JSON.stringify(e)}`,
    };
  }
}

exports.handler = function (event: APIGatewayEvent, _: Context, callback: any) {
  console.log(JSON.stringify(event.body));
  const feedback: Feedback = JSON.parse(event.body!) as Feedback;

  submitFeedback(feedback)
    .then((response) =>
      callback(null, {
        statusCode: response.statusCode,
        body: "Feedback added",
      })
    )
    .catch((err) => {
      console.error(err);
      callback(err, null);
    });
};
