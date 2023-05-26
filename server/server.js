const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
require("dotenv").config();
app.use(cors());

const db = require('./config/connection');

// Port
const PORT = process.env.PORT || 3005;

// Static route to serve up the content of our built webpack bundle which is located in the dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/dist'));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });
}
  
// Routes
app.post('/send', (req, res) => {

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

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent successfully from server');
            res.status(200).json({ status: 'success' });
             // Send a success response
        }
    });
})

// Start the API server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });
});