import { IncomingWebhook } from "@slack/webhook";

export default async (text: string): Promise<boolean> => {
  const webhook = new IncomingWebhook(
    process.env.DOCS_FEEDBACK_SLACK_WEBHOOK_URL
  );
  try {
    await webhook.send({
      text,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
