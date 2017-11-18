
var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.get_users = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.get_user_by_id = function (req, res) {
    User.findOne({ _id: req.params._id }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.create_user = function (req, res) {
    var new_user = new User(req.body)
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};
