var express = require('express'); 

var mongoose = require('mongoose'),
    MessageList = mongoose.model('MessageList');
    Message = mongoose.model('Message');

exports.get_messageslists = function (req, res) {
    MessageList.
    find({}).
    populate({ path: 'messages',
                model: 'Message'}).
    exec(function (err, messagelists) {
        if (err) {
         res.send(err); 
        }
        res.json(messagelists);
    });
};

exports.get_messageslist_by_id = function (req, res) {
    MessageList.
    findOne({_id: req.params._id}).
    populate({ path: 'messages',
                model: 'Message'}).
    exec(function (err, messagelist) {
        if (err) {
         res.send(err); 
        }
        res.json(messagelist);
    });
};

exports.create_messagelist = function (req, res) {
    var new_messagelist = new MessageList();
    new_messagelist.save(function (err, messagelist) {
        if (err) {
            res.send(err);
        }
        res.json(messagelist);        
    });
};

exports.add_message = function (req, res) {
    var date = new Date()
    var new_message = new Message({
        text: req.body.text,
        authID: req.body.userID,
        time: date.toLocaleTimeString()
    });

    new_message.save(function(err, message) {
        if (err) return res.send(err);
        MessageList.findById(req.params._id, function(err, messagelist) {
          if (err) return res.send(err);
          messagelist.messages.push(message);
          messagelist.save(function(err) {
            if (err) return res.send(err);
            res.json({ status : 'done',
                        messagelist: messagelist.messages });
          });
        });
      });
};


// MessageList.findByIdAndUpdate(
//     { _id: req.params._id },
//     {
//         $push: { messages: new_message }
//     },
//     function (err, messagelist) {
//         if (err)
//             console.log(err);
//         else {
//             global.io.emit(messagelist._id, messagelist.messages);
//             res.json({
//                 success: true,
//                 message: messagelist.messages
//             });
//         }
//     }
// );
