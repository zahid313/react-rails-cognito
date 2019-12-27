import React, { Component } from 'react';
import Item from './Item'
import axios from 'axios'
class AllItems extends Component {
  constructor(){
    super()
  }
  handleDelete(id) {
    console.log("handle delete")
    this.props.handleDelete(id);
  }
  onUpdate(item) {
    this.props.onUpdate(item);
  }
  render() {
    var items = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <Item item={item} handleDelete={this.handleDelete.bind(this, item.id)} 
                handleUpdate={this.onUpdate.bind(this)}/>          
        </div>
      )
    })
    return (
      <div>
        {items}
      </div>
    );
  }
}

export default AllItems