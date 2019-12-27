// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
// import Home from '../components/Home/Home'

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Home />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from '../components/App'
import Home from '../components/Home/Home'
import Main from '../components/Items/Main'
import Notfound from '../components/notfound'
import { Provider } from 'react-redux'
import store from '../store'
import { createBrowserHistory } from 'history'
import Callback from '../components/Callback'
// import Home from './routes/Home'

const history = createBrowserHistory()
const routing = (
  <Router history={history}>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Course</Link>
        </li>
        <li>
          <Link to="/main">Contact</Link>
        </li>
      </ul>     
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/courses" component={Home} />
        <Route path="/main" component={Main} /> 
        <Route exact path="/callback" component={Callback}/>            
        <Route component={Notfound} />   
      </Switch> 
    </div>
  </Router>
)
// document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.body.appendChild(document.createElement('div')))
// })