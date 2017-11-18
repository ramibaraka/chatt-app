var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var inboxItemSchema = mongoose.Schema({
  lastMSG: {
    type: ObjectId, 
    ref: 'Message'
  },
  userID: {
    type: ObjectId, 
    ref: 'User'
  },
  participant: {
    type: ObjectId, 
    ref: 'User'
  },
  messagelist: {
    type: ObjectId,
    ref: 'MessageList'
  }
});

module.exports = mongoose.model('InboxItem', inboxItemSchema);