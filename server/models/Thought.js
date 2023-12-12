const { Schema, model } = require('mongoose');
const moment = require('moment');

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
    default:moment().format('MMMM Do YYYY, h:mm:ss a'),
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
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
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;