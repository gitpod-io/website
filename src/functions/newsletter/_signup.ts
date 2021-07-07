import type { Response } from "@netlify/functions/src/function/response";
import saveEmailInSheet from "../feedback/_save-to-spreadsheet";

export const signup = async (body: string): Promise<Response> => {
  const isSavedInSheet = await saveEmailInSheet({
    sheetTitle: "Newsletter - Signups",
    data: [body],
  });

  const statusCode = isSavedInSheet ? 201 : 500;
  return {
    statusCode,
    body: statusCode === 201 ? "Signed up" : "Oh no, something failed.",
  };
};
