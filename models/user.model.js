const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  salt: {
    type: String
  },
  hash: {
    type: String
  }
});

var User = mongoose.model('User', userSchema);
module.exports = User;
