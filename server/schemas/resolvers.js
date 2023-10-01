const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Post } = require("../models");
const { signToken, isAdmin } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("thoughts");
    },
    getUsers: async () => {
      return await User.find();
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
        return User.findOne({ _id: context.user._id }).populate("posts");
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
    addPost: async (parent, { title, description, content, author }, context) => {
      console.log(context.user);
      if (context.user) {
        const post = await Post.create({
          title,
          description,
          content,
          author: context.user.username,
          authorId: context.user._id,
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
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          author: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );
        return post;
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
    // requestPasswordReset: async (_, { input }) => {
    //   const { email } = input;
    //   // Generate and send a reset token via email to the user with the provided email
    //   // Implement email sending logic here
    //   // Return true if the email was successfully sent, false otherwise
    //   return true;
    // },
    // resetPassword: async (_, { input }) => {
    //   const { token, newPassword } = input;
    //   // Verify the token (e.g., decode and check expiration)
    //   // Find the user associated with the token
    //   // Update the user's password with the new one (after hashing)
    //   // Return true if the password reset was successful, false otherwise
    //   return true;
    // },
    removeUser: async (parent, { userId }, context) => {
      console.log("Removing user with ID:", userId);
      
      // Check if the current user is an admin
      if (context.user.isAdmin !== true) {
        throw new Error("Only admin users can remove users");
      }
      
      try {
        // Find the user by ID in your database
        const user = await User.findByIdAndRemove(userId);
    
        if (!user) {
          throw new Error("User not found");
        }
    
        // Remove all posts associated with the user
        const deleteResult = await Post.deleteMany({ authorId: userId });
        console.log("Deleted posts:", deleteResult);
    
        return { _id: userId }; // Return the removed user's ID
      } catch (error) {
        console.error("Error removing user:", error);
        throw new Error("Error removing user: " + error.message);
      }
    },
    },
};

module.exports = resolvers;
