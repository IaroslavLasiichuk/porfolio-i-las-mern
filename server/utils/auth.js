const jwt = require("jsonwebtoken");
const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, {
        maxAge: expiration,
      });
      req.user = data;
      console.log("User:" + req.user);
    } catch {
      console.error("Invalid token:", error);
    }
    return req;
  },
  signToken: function ({ username, email, _id, isAdmin }) {
    const payload = { username, email, _id, isAdmin };
    return jwt.sign({ data: payload }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: expiration });
  },
};
