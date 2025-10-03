const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
const { authMiddleware } = require('./utils/auth');
const robots = require("express-robots-txt");
const { generate_sitemap } = require('./sitemap_generator');
require("dotenv").config();

// Use the environment variable or default to localhost if not set
let apiUrl;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Set API URL based on environment
if (process.env.NODE_ENV === "production") {
  apiUrl = "https://www.lamur.us";
} else {
  apiUrl = "http://localhost:3000";
}

// Static files - serve React build
app.use(express.static(path.join(__dirname, '../client/dist')));

// SEO Routes - MUST come before catch-all
app.use(
  robots({
    UserAgent: "*",
    Disallow: "",
    Sitemap: "https://www.lamur.us/sitemap.xml"
  })
);

// Sitemap route - MUST come before catch-all
app.get('/sitemap.xml', generate_sitemap);

// Form send endpoint
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
        res.status(500).json({ status: 'fail' });
      } else {
        console.log('Email sent successfully from server');
        res.status(200).json({ status: 'success' });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: 'fail' });
  }
});

// Catch-all route - MUST be LAST
// This serves index.html for all other routes (React Router)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:${PORT}`);
      console.log(`💣 Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};

// Call the async function to start the server
startApolloServer();