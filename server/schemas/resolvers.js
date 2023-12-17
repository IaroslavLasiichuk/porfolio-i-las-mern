const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Post } = require("../models");
const { signToken, isAdmin } = require("../utils/auth");
require("dotenv").config();
const {
  generateSignToken,
  generateRefreshToken,
  generateResetToken,
} = require("../utils/auth");
const sendEmail = require('../utils/email');

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
      const token =  generateSignToken(user);
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

      const token =  generateSignToken(user);
      console.log(token);
      const context = {
        user: {
          _id: user._id,
          email: user.email,
          username: user.username,
        },
        
      };
      return { token, user, context };
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
    forgotPassword: async (parent, { email }, req) => {
      const user = await User.findOne({ email });
      let apiUrl;
      if (process.env.NODE_ENV === "production") {
        apiUrl = "https://https://www.lamur.us"
        app.use(express.static('../client/dist'));
        app.get("*", (req, res) => {
          res.sendFile(path.resolve(__dirname,  "../client/dist", "index.html"));
        }
        );
      } else{
        apiUrl ="http://localhost:3000"  
      }
      if (!user) {
        throw new AuthenticationError("User not found");
      }
      // Generate a reset token
      const resetToken = generateSignToken(user);
        // Set the reset token and its expiration in the user document
      user.passwordResetToken =resetToken;
      // Set the expiration time (e.g., 15  min)
      // user.passwordResetTokenExpires = moment().add(2, 'minutes').format('MMMM Do YYYY, h:mm:ss a'); 
      // Save the user document with the reset token and expiration
      await user.save();
      const resetUrl = `${apiUrl}/${resetToken}`
      const message = `We have received a password reset request. Please use the below link to reset your password \n\n${resetUrl}`
      const htmlContent = `
      <div style="text-align: center; background-color: #f5f5f5; padding: 20px;">
      <h1 style="color: #333; background-color: #7a7a7a; padding: 10px;"><img src="https://www.lamur.us/assets/favicon-da249e15.ico" alt="Logo" style="max-width: 50px; margin-top: 20px;"></h1>
      <p style="font-size: 16px; color: #333; margin-top: 20px;">We have received a password reset request. Please use the below link to reset your password:</p>
      <a href="${resetUrl}" style="display: inline-block; margin-top: 10px; padding: 10px 15px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 5px;">Reset Password</a>
    </div>
    `;
      await sendEmail({
        from: 'Book your spot',
        email: user.email,
        subject: "Password change request received",
        html: htmlContent,
      })
      return { passwordResetToken: resetToken };
    },

    // Define a resolver for the passwordReset mutation
    resetPassword: async (parent, args) => {
      // Find the user by email
      const { passwordResetToken, password } = args;
     
      const user = await User.findOne({ passwordResetToken });
  // console.log(user);

      // Check if the user exists
      if (!user) {
        throw new AuthenticationError("User not found");
      }
      // Check if the reset token matches the one stored in the user's document
      if (user.passwordResetToken !== passwordResetToken) {
        throw new AuthenticationError("Invalid reset token");
      }
      // const expirationTime = moment(user.passwordResetTokenExpires);
      // const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      // // Check if the reset token has expired (900000 milliseconds = 15 minutes)
      // if (currentTime.isAfter(expirationTime)) {
      //   throw new AuthenticationError("Reset token has expired");
      // }

      // Update the user's password and reset token fields
      user.password.value = password.value;
      user.password.updatedAt = currentTime;
      user.passwordResetToken = null;
      user.passwordResetTokenExpires = null;
  
      // Save the user document with the new password and cleared reset token
      await user.save();
  
      // Return a success message or a new access token, if needed
      return { passwordResetToken, message: "Password reset successful" };
    },
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
