import React, { Component } from 'react';
import '../App.css';
import InboxItem from './InboxItem'


class Inbox extends Component {

  itemClicked = (item) => {
    this.props.itemSelected(item);
  }

  render() {
    var inboxItems = this.props.inboxitems.map((item, key) => {
      return <InboxItem wasTapped={item => this.itemClicked(key)} key={key} item={item} />
    })
    return (
      <div className="inbox">
        <p className="inboxtitle"> Inbox </p>
        {inboxItems}
      </div>
    );
  }
}

export default Inbox;
