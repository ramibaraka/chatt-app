import React, { Component } from 'react';
import './App.css';
import Inbox from './components/Inbox';
import MessageList from './components/MessageList';
import UserList from './components/UserList';
import apiClient from './api/apiClient';


class App extends Component {

  constructor(props) {
    super(props);
    var that = this;
    this.state = {
      inboxitems:[],
      users: [],
      currentMessages:[],
      selectedInboxItem:null,
      userID: "5a0c847d504137204d05fe1d"
    }
  }

  componentWillMount() {
    this.getUsers()
    this.getInbox()
  }

  getInbox(){
    apiClient.getInboxItems(this.state.userID).then(inboxitems => {
      this.setState({
        inboxitems: inboxitems
      })
    });
  }

  getUsers(){
    apiClient.getUsers().then(users => {
      this.setState({
        users: users
      })
    });
  }

  getMessageListForInbox(inboxitem){
    apiClient.getMessageList(inboxitem.messagelist._id).then(messagelist => {
      this.setState({
        currentMessages: messagelist.messages
      })
    })
  }

  inboxItemSelected(key) {
    var inboxitem = this.state.inboxitems[key]
    this.getMessageListForInbox(inboxitem)
    this.setState({
      selectedInboxItem : inboxitem
    })
  }

  userSelected(key){
    var user = this.state.users[key]
  }


  render() {
    return (
      <div className="App">
        <Inbox itemSelected={this.inboxItemSelected.bind(this)} inboxitems={this.state.inboxitems}/>
        <MessageList userID={this.state.userID} currentMessages={this.state.currentMessages} />
        <UserList userSelected={this.userSelected.bind(this)} users={this.state.users} />
      </div>
    );
  }
}

export default App;
