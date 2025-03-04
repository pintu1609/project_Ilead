const nodemailer = require('nodemailer');

type Email ={
    subject: string,
    desc: string
}

export async function sendEmail ({subject, desc}: Email){
    const email = process.env.NEXT_PUBLIC_EMAIL_RECEVIER
    let transporter = nodemailer.createTransport({
        service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL_USER,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASS
        }
    });
  
    let mailOptions = {
        from: process.env.NEXT_PUBLIC_EMAIL_USER,
        to: email,
        subject: subject,
        text:  desc
    };
    console.log("🚀 ~ sendEmail ~ mailOptions:", mailOptions)
  
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error('Failed to send email');
    }
  };