// const mongoose = require('mongoose');
// const User = require('../models/User'); 

// mongoose.connect('mongodb+srv://iaroslavlasiichuk:C6TfnN33CLyvENX8@database.5tkwzo8.mongodb.net/portfolioIaroslavDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// // Update existing documents to include the new field
// async function updateExistingUsers() {
//   try {
//     const users = await User.find({}); 

//     // Retrieve all existing users
//     for (const user of users) {
//       console.log(user.email);
//       if (!user.log) { // Check if the field already exists (to avoid re-updating)
//         user.log = ''; // Set a default value if necessary
//         await user.save(); // Save the updated user
//       }
//     }
//     console.log('All existing users updated successfully.');
//   } catch (error) {
//     console.error('Error updating existing users:', error);
//   } finally {
//     mongoose.disconnect(); // Disconnect from the database after updating
//   }
// }

// updateExistingUsers();
