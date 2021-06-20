import type { Response } from "@netlify/functions/src/function/response";
import saveFeedbackInSheet from "./_save-to-spreadsheet";
import sendFeedbackToSlack from "./_send-to-slack";

interface Feedback {
  browser: string;
  feedback: string;
  note?: string;
}

export const submitFeedback = async (body: string): Promise<Response> => {
  const feedback: Feedback = JSON.parse(body) as Feedback;
  const isSavedInSheet = await saveFeedbackInSheet({
    sheetTitle: "Extension - Raw Feedback",
    data: [new Date(), feedback.browser, feedback.feedback, feedback.note],
  });
  const isSentToSlack = await sendFeedbackToSlack(`Browser extension uninstalled.
Browser: ${feedback.browser}
Feedback: ${feedback.feedback}
Note: ${feedback.note ? feedback.note : "N/A"}`);

  const statusCode = isSavedInSheet && isSentToSlack ? 201 : 500;
  return {
    statusCode,
    body: statusCode === 201 ? "Feedback added" : "Oh no, something failed.",
  };
};
