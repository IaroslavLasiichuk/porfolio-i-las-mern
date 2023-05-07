const { connect, connection } = require('mongoose');

// Adds  Atlas connection 
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolioDB';
  
// Connect to MongoDB
connect(connectionString);

module.exports = connection;