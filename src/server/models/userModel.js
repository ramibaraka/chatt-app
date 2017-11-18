var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
  username: {
    type: String,
    default: 'John Doe'
  },
  imgURL: {
    type: String,
    default: 'Kindly enter the name of the message'
  }
});

module.exports = mongoose.model('User', userSchema);