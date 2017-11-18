var mongoose = require('mongoose');
var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;


var messageListSchema = mongoose.Schema({
    messages: [{
        type: ObjectId,
        ref: "Message"
    }]
});

module.exports = mongoose.model('MessageList', messageListSchema);
