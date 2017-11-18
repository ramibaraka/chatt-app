
var mongoose = require('mongoose'),
    Message = mongoose.model('Message');

exports.get_all_messages = function (req, res) {
    Message.find({}, function (err, message) {
        if (err)
            res.send(err);
        res.json(message);
    });
};

exports.send_message = function (req, res) {
    var new_message = new Message(req.body);
    new_message.save(function (err, message) {
        if (err)
            res.send(err);
        res.json(message);
    });
};