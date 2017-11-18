import React, { Component } from 'react';
import '../App.css';
import SubmitForm from './SubmitForm';
import Message from './Message';
import io from 'socket.io-client'
let socket = io.connect(`http://localhost:3001`)

class MessageList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messageSent:'',
      messages: [],
      messagelistID: "5a0ebb4b9a5cd10312403b61"
    }
  }

  componentWillMount() {
    this.getRealTimeMessages()
  }

  getRealTimeMessages(){
    var that = this;
    socket.on(this.state.messagelistID, function (messages) {
      that.setState({ 
        messages: messages 
      })
    });
  }

  sendMessage(){
    console.log("Send message from messagelist was fired")  
  }

  render() {
    var messageItems = this.props.currentMessages.map((message, key) => {
      return <Message userID={this.props.userID} key={key} message={message} />
    })
    return (
      <div className="messagelist">
        <p> Conversation </p>
        <div className="messages">
          {this.props.currentMessages? messageItems: []}
        </div>
        <SubmitForm sendMessage={this.sendMessage.bind(this)} />
      </div>
    );
  }
}

export default MessageList;