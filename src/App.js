import './App.css';
import React, { Component } from 'react';
import UsersContainer from './containers/UsersContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Trivia app Frontend</h1>
        <UsersContainer />
      </div>
    );
  }
}

export default App;
