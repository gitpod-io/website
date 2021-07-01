import type { Handler } from "@netlify/functions";
import { signup } from "./_signup";

const handler: Handler = (event, _, callback) => {
  signup(event.body)
    .then((response) => callback(null, response))
    .catch((error) => {
      console.error(error);
      callback(error, null);
    });
};

export { handler };
