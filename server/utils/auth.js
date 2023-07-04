const jwt = require('jsonwebtoken');

const secret = 'secretproject';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  isAdmin: function (req, res, next){
    // Assuming you have the logged-in user object in the request, and it contains the user's role
    const { isAdmin } = req.user;
  
    // Check if the user's role is 'admin'
    if (isAdmin === true) {
      // User is an admin, grant access to the route
      next();
    } else {
      // User is not an admin, return an error response or redirect to an unauthorized page
      res.status(403).json({ error: 'Access denied' });
    }
     }
};
