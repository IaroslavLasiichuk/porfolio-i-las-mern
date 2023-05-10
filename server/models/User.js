const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
  }, {
    toJSON: {
      virtuals: true
    },
    id: false
  });

const User = model('User', userSchema);

module.exports = User;