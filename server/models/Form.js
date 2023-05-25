const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema({
    firstName: {
      type: String,
      unique: true,
   
      trim: true
    },
    lastName: {
      type: String,
      unique: true,
    
      trim: true
    },
    email: {
      type: String,
    
      unique: true,
      match: [/.+\@.+\..+/, 'Please enter a valid email address']
    },
   company: {
        type: String,
        unique: true,
      
        trim: true
      },
      message: {
        type: String,
        unique: true,
     
        trim: true
      },
  }, {
    toJSON: {
      virtuals: true
    },
    id: false
  });

const Form = model('Form', userSchema);

module.exports = Form;