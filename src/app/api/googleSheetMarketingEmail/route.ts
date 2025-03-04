import { sendEmail } from "@/utls";
import { google } from "googleapis";
import { NextResponse } from "next/server";
type marketingEmail = {
    email: string;
}
export  async function POST(
    
    req:Request,
) {
  
    // if (req.method !== "POST") {
    //     return res.status(405).send({ message: 'only POST method is allowed' });    }
    // const body = req.body as marketingEmail;
    const body: marketingEmail = await req.json();

    try {
      console.log("🚀 ~ body:")
        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
              private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
          });
          const googleSheetClient = google.sheets({ version: "v4", auth });

          const range = 'Sheet1!A:A'; // Adjust the range if necessary

          const response = await googleSheetClient.spreadsheets.values.get({
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID!,
            range: range,
        });

        const existingEmails = response.data.values || [];
        const emailExists = existingEmails.some((row: string[]) => row[0] === body.email);

        if (emailExists) {
            // Email already exists, return a message
            return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
        } else {
          await googleSheetClient.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
            range: 'Sheet1!A1',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
              values: [[body.email]],
            },
          });

          const subject = 'New Subscriber Alert!';
          const desc = `Hi Admin,

          You have a new contact form submission with the following details:
          
          - **Email:** ${body.email}
         
          Best regards,
          The System`;
          // send email to client
          await sendEmail({subject, desc});

          return NextResponse.json({ message: 'Email added successfully' }, { status: 200 });

        } 

    } catch (error) {
      return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
        
}