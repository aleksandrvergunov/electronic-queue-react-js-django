import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    messages: []
  };

  async componentDidMount() {
    // try {
    //    const response = await fetch('http://127.0.0.1:8000/test/');
    //    const messages = await  response.json();
    //    this.setState({messages: messages}); //equl {messages}
    // } catch (e) {
    //   console.log(e)
    // }
  }


  render() {
    return (
        <h1>Hello</h1>
    );
  }
}

export default App;