import { sendEmail } from "@/utls";
import { google } from "googleapis";
import { NextResponse } from "next/server";

type ContactUs = {
   'first-name': string,
  'last-name': string,
  company: string,
  email: string,
  'mobile-phone': number,
  country: string, 
  city: string,
  'product-category': string[], 
  industry: string,
  'account-category': string,
  message: string,
  subscription: string,
}
export  async function POST(
    
    req:Request,
) {
  
    const body: ContactUs = await req.json();
    const productCategoryString = body['product-category'].join(', ');

    const data = [[
        body["first-name"],
        body["last-name"],
        body.company,
        body.email,
        body["mobile-phone"],
        body.country,
        body.city,
        productCategoryString,
        body.industry,
        body["account-category"],
        body.message,
        body.subscription
    ]]

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
            range: 'Sheet2!A1',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
              values: data,
            },
          });

         const subject = 'New Contact Form Submission';
        const desc = `Hi Admin,\n\nYou have a new contact form submission with the following details:\n\n` +
            `First Name: ${body['first-name']}\n` +
            `Last Name: ${body['last-name']}\n` +
            `Company: ${body.company}\n` +
            `Email: ${body.email}\n` +
            `Mobile Phone: ${body['mobile-phone']}\n` +
            `Country: ${body.country}\n` +
            `City: ${body.city}\n` +
            `Product Category: ${productCategoryString}\n` +
            `Industry: ${body.industry}\n` +
            `Account Category: ${body['account-category']}\n` +
            `Message: ${body.message}\n` +
            `Subscription: ${body.subscription}\n\n` +
            `Best regards,\nThe System`;
          // send email to client

          await sendEmail({subject, desc});

          return NextResponse.json({ data:response?.config?.data,
            message: 'Contact Details added successfully' }, { status: 200 });


    } catch (error) {
      return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
        
}