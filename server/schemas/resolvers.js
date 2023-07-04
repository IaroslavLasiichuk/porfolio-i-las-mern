const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Post } = require("../models");
const { signToken, isAdmin } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("thoughts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("thoughts");
    },
    thoughts: async () => {
      return Thought.find().sort({ createdAt: -1 });
    },
    posts: async () => {
      return Post.find().sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      const context = {
        user: {
          _id: user._id,
          email: user.email,
          username: user.username,
        },
      };

      return { token, user };
    },
    addPost: async (parent, { title, description, content }, context) => {
      console.log(context.user);
      if (context.user) {
        const post = await Post.create({
          title, description, content,
         postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (
      parent,
      { postId, commentText, commentAuthor },
      context
    ) => {

      if (context.user) {
        try {
          // Find the thought by ID
          const post = await Post.findById(postId);
          if (!post) {
            throw new Error("Post not found");
          }

          // Create a new comment object
          const newComment = {
            commentText,
            commentAuthor,
            createdAt: new Date(),
          };

          // Add the comment to the thought's comments array
          post.comments.push(newComment);

          // Save the updated thought with the new comment
          await post.save();

          return post;
        } catch (error) {
          throw new Error("Failed to add comment");
        }
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateThought: async (parent, { thoughtId, thoughtText }, context) => {
      // Check if the user is authenticated
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      // Find the thought by its ID and check if it exists
      const thought = await Thought.findById(thoughtId);
      if (!thought) {
        throw new Error("Thought not found");
      }
      // Update the thoughtText field
      thought.thoughtText = thoughtText;

      // Save the updated thought to the database
      await thought.save();

      // Return the updated thought
      return thought;
    },

    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeComment: async (parent, { thoughtId, commentId }, context) => {
      if (context.user) {
        return Thought.findOneAndUpdate(
          { _id: thoughtId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
