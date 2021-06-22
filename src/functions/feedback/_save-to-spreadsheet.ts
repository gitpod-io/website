import gs from "google-spreadsheet";

interface SheetInfo {
  sheetTitle: string;
  data: any[];
}

export default async (sheetInfo: SheetInfo): Promise<boolean> => {
  try {
    const doc = new gs.GoogleSpreadsheet(process.env.FEEDBACK_SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.FEEDBACK_GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: Buffer.from(
        process.env.FEEDBACK_GOOGLE_PRIVATE_KEY_BASE64,
        "base64"
      ).toString("utf8"),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByTitle[sheetInfo.sheetTitle];
    await sheet.addRow(sheetInfo.data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
