import React, { Component } from 'react';
import axios from 'axios'
import AllItems from './AllItems'
import NewItem from './NewItem'
class Body extends Component {
  constructor(){
    super();
    this.state = {items: []}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  handleSubmit(item) {
    console.log("handle submit")    
    console.log(item);
    var newState = this.state.items.concat(item);
    this.setState({items: newState});
  }  
  handleDelete(id){
    var that = this
    console.log("handle delete in body")
    console.log(id)
    axios.delete(`/api/v1/items/${id}.json`)
    .then(function (response) {
      console.log(response);
      that.removeItemClient(id);
    })
    .catch(function (error) {
      console.log(error);
    });     
  }
  handleUpdate(item) {
    var that = this
    axios.put(`/api/v1/items/${item.id}.json`, {
      item: item
    }) 
    .then(function (response) {
      console.log(response);
      console.log('you did it!!!');
      that.updateItems(item);
    })
    .catch(function (error) {
      console.log(error);
    });     
  }
  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
        return item.id != id;
    });

    this.setState({ items: newItems });
  }  
  updateItems(item) {
    var items = this.state.items.filter((i) => { return i.id != item.id });
    items.push(item);

    this.setState({items: items });
  }
  componentDidMount() {
    console.log("Component mounted");
    axios.get('/api/v1/items.json')
    .then(data => {
      this.setState({items: data.data})
    })
    .catch(data => {
      debugger
    })    
  }  
  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
      </div>
    );
  }  
}

export default Body