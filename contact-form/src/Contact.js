import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
class Contact extends Component {
    render() {
      return (
        
         <TextField variant="Input" color="placeholder" >
         Your message
        </TextField> 
       
      );
    }
  }
  
  export default Contact;