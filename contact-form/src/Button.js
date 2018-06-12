import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Contact from './Contact';

class Button_send extends Component {
    render() {
      return (
        
          <Button variant="contained" color="primary" value="Submit" onClick={Contact.TextField.Send_function()}>
      Send
    </Button>
      )
    
  }
  

};
function Send_function() {
  document.getElementById("form").submit();
}
export default Button_send;