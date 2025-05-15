// import { sendEmail } from "@/utls";
import { google } from "googleapis";
import { NextResponse } from "next/server";

type ContactUs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(req: Request) {
  const body: ContactUs = await req.json();

  const data = [[
    body.name,
    body.email,
    body.subject,
    body.message
  ]];

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const googleSheetClient = google.sheets({ version: "v4", auth });
    const response = await googleSheetClient.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: data,
      },
    });

    // const desc = `Hi Admin,\n\nYou have a new message:\n\n` +
    //   `Name: ${body.name}\n` +
    //   `Email: ${body.email}\n` +
    //   `Subject: ${body.subject}\n` +
    //   `Message: ${body.message}\n\n` +
    //   `Best regards,\nThe System`;

    // await sendEmail({ subject: body.subject, desc });

    return NextResponse.json({
      data: response?.config?.data,
      message: 'Contact details added successfully'
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
