const { User, Form } = require('../models');
const nodemailer = require('nodemailer');
module.exports = {

  // Create a new Form
    async createForm(req, res) {
        try {
          const form = await Form.create(req.body);
          console.log(form);
              res.status(200).json(form);
          
          } catch (err) {
            res.status(400).json(err);
          }
        
    let mailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: process.env.EMAIL,
          pass: process.env.WORD
      }
  });
  
  let mailDetails = {
      from: `${req.body.mailerState.email}`,
      to: process.env.EMAIL,
      subject: `Message from: ${req.body.mailerState.email}`,
      text: `Name: ${req.body.mailerState.firstName} ${req.body.mailerState.lastName} company:${req.body.mailerState.company}.Message: ${req.body.mailerState.message}`
  };
  
  mailTransporter.sendMail(mailDetails, function(err, data) {
      if(err) {
          console.log(err);
      } else {
          console.log('Email sent successfully');
      }
  });
  }
};