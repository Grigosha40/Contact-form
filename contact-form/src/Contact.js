import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Button_send from './Button.js';
class Contact extends Component {
    render() {
      return (
        
         <TextField variant="Input" color="placeholder" onClick={Text.Send_function()} >
         Your message
        </TextField> 
       
      );
    }
  }
  function Send_function() {
    document.getElementById("contact").submit();
  }
  export default Contact;