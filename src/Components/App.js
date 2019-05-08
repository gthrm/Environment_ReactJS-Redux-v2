import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import actions from "../store/actions";
import logo from "../img/logo.svg";

import "./App.css"

class App extends React.Component {
  componentDidMount() {
    console.log('====================================')
    console.log(this.state, this.props)
    console.log('====================================')
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
                  </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
                  </a>
          <input type="text" size="40" value={this.props.name} onChange={(event) => { this.props.changeName(event.target.value) }} />
        </header>
      </div>
    )
  }
}

export default connect(state => {
  return state.rootReducer
}, dispatch => {
  return bindActionCreators(actions, dispatch)
})(App);