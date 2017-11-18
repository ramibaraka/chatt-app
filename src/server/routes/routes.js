module.exports = function (app) {
  var message = require('../controllers/messageController');
  var inboxItem = require('../controllers/inboxItemController');
  var messagelist = require('../controllers/messagelistController');
  var users = require('../controllers/userController');


  app.route('/messages')
    .get(message.get_all_messages)
    .post(message.send_message);

  app.route('/inboxitems/:userID')
    .get(inboxItem.get_inbox_for_user)

  app.route('/inboxitems/')
    .post(inboxItem.create_inboxitem)

  app.route('/messagelists')
    .get(messagelist.get_messageslists)
    .post(messagelist.create_messagelist)

  app.route('/messagelists/:_id')
    .get(messagelist.get_messageslist_by_id)
    .put(messagelist.add_message)

  app.route('/users')
    .get(users.get_users)
    .post(users.create_user)

  app.route('/users/:_id')
    .get(users.get_user_by_id)

};