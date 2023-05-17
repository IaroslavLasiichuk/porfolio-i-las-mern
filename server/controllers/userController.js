const { User } = require('../models');

module.exports = {

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      const userObj = {
        users
      };
      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' })
      }

      res.json({
        user
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      console.log(user);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete a user by its _id and remove a user's associated thoughts when deleted
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }
      // Delete all thoughts associated with the user
      await Thought.deleteMany({ username: user.username });
      res.json({ message: 'User and associated thoughts successfully deleted' });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add friend to user
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete friend from user
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found with that ID :(' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update user by its _id
  async updateUser(req, res) {
    console.log(req.body);
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
      );
      if (!user) {
        return res.status(404).json({ message: 'No such user exists' });
      }
      res.json({ message: 'User successfully updated' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete user with thougths associated with
  async deleteUserAndThougths(req, res) {
    try {
      const doc = await this.User.findOne(this.getFilter());
      await User.deleteMany({})
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};