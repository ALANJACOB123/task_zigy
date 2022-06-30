const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  PhoneNo: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);

