import React, { Component } from 'react';
import '../App.css';

class InboxItem extends Component {


    render() {
        
        let item = this.props.item
        return (
            <div onClick={this.props.wasTapped} className="inboxItem">

                <div className="imagecontainer">
                    <img className="userimage" src={item.participant.imgURL} alt="error" />
                </div>

                <div className="textcontainer">
                    <p className="username">{item.participant.username}</p>
                </div>

                <div className="timecontainer">
                    <p className="time">12:00</p>
                </div>
            </div>
        );
    }
}

export default InboxItem;