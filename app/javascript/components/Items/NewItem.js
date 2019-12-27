import React, { Component } from 'react';
import axios from 'axios'
class NewItem extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick() {
    var that = this;
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    console.log(description);
    axios.post('/api/v1/items.json', {
      name: name,
      description: description
    })
    .then(function (response) {
      console.log(response);
      that.props.handleSubmit(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });    
  }
  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
          <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }  
}

export default NewItem