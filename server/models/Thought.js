const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    trim: true,
  },
  thoughtAuthor: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
      },
      commentAuthor: {
        type: String,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;