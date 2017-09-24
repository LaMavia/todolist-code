import React, {Component} from 'react'

export default class Form extends Component{
  subHandler(e){
    e.preventDefault()
    let validator = /<|{|\(.*\);/g
    let newTodo = this.refs.content.value;
    if(newTodo){
      if(!validator.test(newTodo)){
        this.props.subHandler(newTodo)
        this.refs.content.value = '';
        return
      }
    }
    alert('Invalid String!');
  }

  render(){
    return(
      <form className="input__add" onSubmit={this.subHandler.bind(this)}>
        <input className="input__add-content" ref="content" type="text" name="text"/>
        <input className="input__add-btn" type="submit" value="add"/>
      </form>
    )
  }
}