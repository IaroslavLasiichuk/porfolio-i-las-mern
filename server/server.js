const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
// const { createProxyMiddleware } = require('http-proxy-middleware');
require("dotenv").config();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://secure-crag-53984.herokuapp.com"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(cors());

const db = require('./config/connection');
const routes = require('./routes');

// Port
const PORT = process.env.PORT || 3005;

// Static route to serve up the content of our built webpack bundle which is located in the dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
// app.use('/api', createProxyMiddleware({ target: 'http://localhost:3005', changeOrigin: true }));
app.use(express.json());
// app.use(routes);

// Routes
app.get('/api/customers',
    (req, res) => {
    const customers = [
        { id: 1, firstName: "Iaroslav", lastName: "Lasiichuk" },
        { id: 2, firstName: "Theodore", lastName: "Lasiichuk" },
        { id: 3, firstName: "Olena", lastName: "Murchenko" },
    ];
    res.json(customers);
    });

  app.post('/contact', (req, res) => {

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
    
})

    // Start the API server
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  });