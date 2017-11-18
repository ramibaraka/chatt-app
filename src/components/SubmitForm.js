import React, { Component } from 'react';
import '../App.css';

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zibby: "",
    }
  }

  onKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.props.sendMessage()
    }
  }

  render() {
    return (
      <div className="submitform">
        <input onKeyPress={this.onKeyPress} placeholder="Type a message" type="text" />
      </div>
    );
  }
}

export default SubmitForm;