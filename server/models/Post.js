const { Schema, model } = require("mongoose");
const moment = require('moment');
const postSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  author: {
    type: String,
    trim: true,
  },
  authorId:  {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  role: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
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
        default: moment().format('MMMM Do YYYY, h:mm:ss a'),
      },
    },
  ],
});

const Post = model("Post", postSchema);

module.exports = Post;
