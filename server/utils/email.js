const nodemailer = require('nodemailer');
require("dotenv").config();

const sendEmail = async function(options){
    try {
    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
  
     const mailDetails = {
        from: 'Iaroslav Lasiichuk',
        to: options.email,
        subject: options.subject,
        html: options.html || '',
      };
  
    await mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log('Email sent successfully from server');
        }
      });
    } catch (err) {
      console.log(err);
    }
}

    module.exports = sendEmail;