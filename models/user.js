const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  firstName: String,
  lastName: String,
  signUpDate: { type: Date, default: Date.now}
});

// Create the model class
module.exports = mongoose.model('user', userSchema);
