import React, { Component } from 'react'
import Form from './Form'

import Logo from '../assets/logo.svg'
import '../css/Input.css'

export default class Input extends Component{

  subHandler(todo){
    this.props.onAddTodo(todo);
  }

  render(){
    return(
      <header className="input">
        <img className="input__logo" src={Logo} alt="react logo"/>
        <Form subHandler={this.subHandler.bind(this)}/>
      </header>
    )
  }
}