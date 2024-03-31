import nodemailer from 'nodemailer';

export async function SendEmail(EmailTo,EmailText,EmailSubject){

    const Transport= nodemailer.createTransport({
         host:"mail.teamrabbil.com",
         port:25,
         secure:false,
         auth:{user:"info@teamrabbil.com", pass:"~sR4[bhaC[Qs"},
         tls:{rejectUnauthorized:false}
     }) //SMTP(Simple Mail Transfer Protocol) server
 
     const MailOption={
        from:"7news <info@teamrabbil.com>", //7news title, info@teamrabbil.com k 7news diye masking krlam, check inbox/spam
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
     }
     return await Transport.sendMail(MailOption)
 
 }