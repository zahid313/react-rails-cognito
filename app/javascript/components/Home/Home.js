import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'
import Item from '../Home/Table/Item'
import axios from 'axios'

const User = ({match}) => <p>{match.params.id}</p>

class Home extends Component {
  constructor(){
    super()
    this.state = {
      course_modules: []
    }
  }

  componentDidMount(){
    axios.get('/episodes.json')
    .then(data => {
      this.setState({course_modules: data.data})
    })
    .catch(data => {
      debugger
    })
  }

  handleVideoChange(item, event) {
    event.preventDefault();
    let course_modules = [...this.state.course_modules]
    course_modules.map( (data) => {
      data.active = false
    })
    item.active = !item.active
    course_modules[item.id - 1] = item
    this.setState({course_modules})
  }

  render(){
    return (
      <div>
        <h1>Users</h1>
        <strong>select a user</strong>
        <ul>
          <li>
            <Link to="/courses/1">User 1 </Link>
          </li>
          <li>
            <Link to="/courses/2">User 2 </Link>
          </li>
          <li>
            <Link to="/courses/3">User 3 </Link>
          </li>
        </ul>
        <Route path="/courses/:id" component={Item} />        
        <Jumbotron/>
        <Table handleVideoChange={this.handleVideoChange.bind(this)} course_modules={this.state.course_modules}/>
      </div>
    )      
  }
}

export default Home