import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mail from './Mail';
import Button_send from './Button';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div>
      <Button_send/>
      <Mail/>
      <Contact/>
      </div>
    );
  }
}



export default App;
