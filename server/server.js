const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
const { authMiddleware } = require('./utils/auth');
// const updateExistingUsers = require('./utils/updateUsers');
const robots = require("express-robots-txt");
const { generate_sitemap } = require('./sitemap_generator');
require("dotenv").config();

// Use the environment variable or default to localhost if not set
let apiUrl;

app.use(cors());
app.use(express.json());
const { Form } = require('./models');

// Import the ApolloServer class
const { typeDefs, resolvers } = require("./schemas");
const { ApolloServer } = require("apollo-server-express");

const db = require('./config/connection');

// Port
const PORT = process.env.PORT || 3000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context: authMiddleware,
  persistedQueries: false
});

//  This code configuration ensures that static files are served from the specified directory,
// and for any route that doesn't match a static file, the "index.html"
// file is sent to the client. 
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://www.lamur.us"
  app.use(express.static('../client/dist'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,  "../client/dist", "index.html"));
  }
  );
} else{
  apiUrl ="http://localhost:3000"  
}

// Static route to serve up the content of our built webpack bundle which is located in the dist folder
app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SEO
app.use(
  robots({
    UserAgent: "*",
    Disallow: "",
    Sitemap: "https://www.lamur.us/sitemap.xml"
  })
);

app.get('/sitemap.xml', generate_sitemap)


if (process.env.NODE_ENV === "production") {
    app.use(express.static('../client/dist'));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,  "../client/dist", "index.html"));
    });
}
  
// Form send
app.post('/send', async (req, res) => {
    try {
      // Save the form data to the database
      const newForm = await Form.create(req.body.mailerState);
      console.log(newForm);
      // Send the email
      let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
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
          // Send a failure response if email sending fails
          res.status(500).json({ status: 'fail' });
        } else {
          console.log('Email sent successfully from server');
          // Send a success response if email sending is successful
          res.status(200).json({ status: 'success' });
        }
      });
    } catch (err) {
      console.log(err);
      // Send a failure response if saving to the database fails
      res.status(500).json({ status: 'fail' });
    }
  });


  const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`✅Server is running at http://localhost:${PORT}`);
        console.log(`💣Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
};

// Call the async function to start the server
startApolloServer();