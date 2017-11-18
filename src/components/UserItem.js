import React, { Component } from 'react';
import '../App.css';

class UserItem extends Component {


  render() {
    let item = this.props.item
    return (
      <div onClick={this.props.wasTapped} className="useritem">
          
          <div className="imagecontainer">
              <img className="userlistimage" src={item.imgURL} alt="error"/>    
          </div>
          
          <div className="textcontainer">
              <p className="userlistname">{item.username}</p>
          </div>
      </div>
    );
  }
}

export default UserItem;