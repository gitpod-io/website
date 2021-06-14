import type { Handler } from "@netlify/functions";
import * as client from "@sendgrid/mail";

export interface Email {
  to?: {
    email: string;
    name?: string;
  };
  from?: {
    email: string;
    name?: string;
  };
  subject: string;
  message?: string;
  feedback?: string;
  otherFeedback?: string;
}

async function sendEmail(
  client: client.MailService,
  email: Email
): Promise<{ statusCode: number; errorMessage?: string }> {
  const data: client.MailDataRequired = {
    from: email.from || "",
    subject: email.subject,
    to: [email.to!],
    content: [
      {
        type: "text/plain",
        value: `${
          email.message
            ? email.message
            : `${email.feedback}\n${email.otherFeedback}`
        }`,
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
    return {
      statusCode: 200,
    };
  } catch (e) {
    return {
      statusCode: 500,
      errorMessage: `Error : ${JSON.stringify(e)}`,
    };
  }
}

const handler: Handler = function (event, _, callback) {
  console.log(JSON.stringify(event.body));
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "no-key";
  const SENDGRID_TO_EMAIL =
    process.env.SENDGRID_TO_EMAIL || "contact-test@gitpod.io";

  const email: Email = JSON.parse(event.body!) as Email;

  email.to = {
    email: SENDGRID_TO_EMAIL,
    name: "Gitpod",
  };

  client.setApiKey(SENDGRID_API_KEY);
  sendEmail(client, email)
    .then((response) =>
      callback(null, {
        statusCode: response.statusCode,
        body: JSON.stringify(email) + " added",
      })
    )
    .catch((err) => {
      console.error(err);
      callback(err, null);
    });
};

export { handler };
