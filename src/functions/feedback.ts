import type { APIGatewayEvent, Context } from "aws-lambda";
import { IncomingWebhook } from "@slack/webhook";
// import * as GoogleSpreadsheet from "google-spreadsheet";

interface Feedback {
  emotion: number;
  note?: string;
  url: string;
}

const emotionSlackEmojiMap = {
  1: ":sob:",
  2: ":confused:",
  3: ":grinning:",
  4: ":star-struck:",
};

// async function saveFeedbackInSheet(feedback: Feedback): Promise<boolean> {
//   try {
//     const doc = new GoogleSpreadsheet(process.env.DOCS_FEEDBACK_SHEET_ID);
//     await doc.useServiceAccountAuth({
//       client_email: process.env.DOCS_FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
//       private_key: Buffer.from(
//         process.env.DOCS_FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
//         "base64"
//       ).toString("utf8"),
//     });
//     await doc.loadInfo();
//     const sheet = doc.sheetsByTitle["Raw Feedback"];
//     await sheet.addRow(
//       [new Date(), feedback.emotion, feedback.url, feedback.note],
//       { insert: true }
//     );
//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

async function sendFeedbackToSlack(feedback: Feedback): Promise<boolean> {
  const webhook = new IncomingWebhook(
    process.env.DOCS_FEEDBACK_SLACK_WEBHOOK_URL
  );
  try {
    await webhook.send({
      text: `${emotionSlackEmojiMap[feedback.emotion]}
Link: ${feedback.url}
Note: ${feedback.note ? feedback.note : "N/A"}`,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function submitFeedback(
  feedback: Feedback
): Promise<{ statusCode: number }> {
  // TODO: Blocked by https://answers.netlify.com/t/error-typeerror-n-is-not-a-constructor-with-google-spreadsheet-in-a-function/38685
  const isSavedInSheet = true; // await saveFeedbackInSheet(feedback);
  const isSentToSlack = await sendFeedbackToSlack(feedback);

  return {
    statusCode: isSavedInSheet && isSentToSlack ? 201 : 500,
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
