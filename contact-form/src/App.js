import React, { Component } from 'react';
import Input from './Input.js';
import './App.css';
import Button from '@material-ui/core/Button';
import $ from 'jquery';

class App extends React.Component{
  contactUs() {
    $.ajax({
      url: '/contactus',
      dataType: 'json',
      cache: false,
      success: function(data) {
          // Success..
      }.bind(this),
      error: function(xhr, status, err) {
          console.error(status, err.toString());
      }.bind(this)
  });

  }
  render(){
    return (
      <div>
    <Input type="email" ref="contact_email" placeholder="Your email address"/>
    <Input type="text" ref="contact_subject" placeholder="Subject"/>
    <Input type="textarea" ref="contact_content" placeholder="Content"/>
    <Button onClick={this.contactUs.bind(this)} bsStyle="primary" bsSize="large">Submit</Button>
  </div>
)
  }
};

export default App;