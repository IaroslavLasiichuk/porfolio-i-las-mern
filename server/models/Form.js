const { Schema, model } = require('mongoose');

// Schema to create User model
const formSchema = new Schema({
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    email: {
      type: String,
    },
   company: {
        type: String,
        trim: true
      },
      message: {
        type: String,
        trim: true
      },
  }, {
    toJSON: {
      virtuals: true
    },
    id: false
  });

const Form = model('Form', formSchema);

module.exports = Form;