import React, { Component } from 'react';
import '../App.css';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderAuthMessage(message) {
    return (
      <div className="authmessagecontainer">
        <div className="authmessage">
          <p>{message.text}</p>
        </div>
      </div>
    )
  }
  renderMessage(message) {
    return (
      <div className="messagecontainer">
      <div className="message">
        <p>{message.text}</p>
      </div>
    </div>
    )
  }

  render() {
    let message = this.props.message
    let isAuthor = this.props.userID === message.authID;
    var renderedMessage = this.renderMessage(message)
    var renderAuthMessage = this.renderAuthMessage(message)
    var messageToRender = isAuthor ? renderAuthMessage : renderedMessage;
    return (
      messageToRender
    );
  }
}

export default Message;