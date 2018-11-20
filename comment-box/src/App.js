import React, { Component } from 'react';
import Input from './components/input'
import Comment from './components/comment'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Comment />
      </div>
    );
  }
}

export default App;
