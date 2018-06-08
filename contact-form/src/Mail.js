import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';

class Mail extends Component {
    render() {
      return (
        <TextField variant="Input" color="primary" >
         E-Mail 
        </TextField>
      );
    }
  }
  
  export default Mail;