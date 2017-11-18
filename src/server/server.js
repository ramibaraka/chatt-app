var app = require('express')();
var http = require('http').Server(app);
var server = app.listen(3001);
var io = require('socket.io').listen(server);
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

require("./models/messageModel");
require("./models/userModel");
require("./models/messageListModel");
require("./models/inboxItemModel");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Accept');
    next()
})

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected to mongoose")
});

io.on('connection', function (socket) {
    console.log('io :  Client connected');
});

global.io = io;

var routes = require('./routes/routes');
routes(app); 