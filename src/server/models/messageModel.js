var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var messageSchema = mongoose.Schema({
  text: {
    type: String,
  },
  authID: {
    type: ObjectId, 
    ref: 'User'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);