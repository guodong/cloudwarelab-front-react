// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({match}) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({match}) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)
const divStyle = {
  textAlign: 'center'
}
function login() {
  alert()
}
const Login = () => (
  <div className="container">
    <h2 className="logo">Cloudware Lab</h2>
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <div className="panel-title">登录</div>
          </div>

          <div className="panel-body">
            <form id="loginform">

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input type="text" className="form-control" placeholder="用户名"/>
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input type="password" className="form-control" placeholder="密码"/>
                </div>
              </div>

              <div className="form-group" style={divStyle}>
                <button type="button" className="btn btn-primary" onClick={login}>登 录</button>
                <button type="button" className="btn btn-default">注 册</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>

  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <Route path="/" component={Home}/>

    </div>
  </Router>
)
export default BasicExample