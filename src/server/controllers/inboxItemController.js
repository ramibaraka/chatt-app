
var mongoose = require('mongoose'),
    InboxItem = mongoose.model('InboxItem');

exports.get_inbox_for_user = function (req, res) {
    InboxItem.find({ userID: req.params.userID })
        .populate('userID')
        .populate('participant')
        .populate('messagelist')
        .populate({ path: 'messagelist', populate: {
                                        path: 'messages',
                                        model: 'Message'
                                            }
        })
        .exec(function (err, inboxItem) {
            if (err) {
                res.send(err);
                console.log(err)
            }
            res.json(inboxItem);
        });
};

exports.create_inboxitem = function (req, res) {
    var new_inboxItem = new InboxItem({
        userID: req.body.userID,
        participant: req.body.participant,
        ladMSG: req.body.lastMSG,
        messagelist: req.body.messagelist
    });
    new_inboxItem.save(function (err, inboxitem) {
        if (err) {
            res.send(err);
        }
        res.json(inboxitem);
    });
};



