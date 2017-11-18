import React, { Component } from 'react';
import '../App.css';
import UserItem from './UserItem'


class UserList extends Component {

  itemClicked = (user) => {
    this.props.userSelected(user)
  }

  render() {
    var users = this.props.users.map((user, key) => {
      return <UserItem wasTapped={user => this.itemClicked(key)} key={key} item={user} />
    })
    return (
      <div className="userlist">
        <p className="inboxtitle"> Friends </p>
        {users}
      </div>
    );
  }
}

export default UserList;