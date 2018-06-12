import React, { Component } from 'react';

import './App.css';


class Input extends React.Component{
    render(){
        return (
         <div> 
        <Input type="email" ref="contact_email" placeholder="Your email address"/>
        <Input type="text" ref="contact_subject" placeholder="Subject"/>
        <Input type="textarea" ref="contact_content" placeholder="Content"/>
        </div>
      
    )
      }
    };
    
    export default Input;