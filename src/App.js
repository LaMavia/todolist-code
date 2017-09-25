import React, { Component } from 'react';
import uuid from 'uuid'
import Cookie from "js.cookie"
/*import JSDom from 'jsdom'
import {Cookies} from '@tsmean/cookies'
*/
import Input from './components/Input'
import List from './components/List'
import './css/App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      todosList: [],
      todosListPH: [
        {text: 'Eat Breakfast', id: uuid.v4()},
        {text: 'Workout', id: uuid.v4()},
        {text: 'Update Todos', id: uuid.v4()}
      ]
    }
  }

  componentWillMount() {
    let todosList
    if(!Cookie.get("todos")){
      todosList = [
        {text: 'Eat Breakfast', id: uuid.v4()},
        {text: 'Workout', id: uuid.v4()},
        {text: 'Update Todos', id: uuid.v4()}
      ]
    }else{
      todosList = Cookie.get("todos");
    }
    this.setState({
      todosList
    })
    if(!this.state.todosList){
      todosList = [
        {text: 'Eat Breakfast', id: uuid.v4()}
      ]
      this.setState({
        todosList
      })
    }
  }

  addTodo(todo){
    if(!todo) return false
    console.log(this.state.todosList)
    this.setState({ 
      todosList: this.state.todosList.concat(todo)
    }, function(){
      console.log(this.state.todosList)
      Cookie.set("todos", this.state.todosList)
      console.log(Cookie.get("todos"))
    })
  }

  removeTodo(todo){
    console.log(todo)
    this.setState({
      todosList: this.state.todosList.filter((it,i) => it.id !== todo.id)
    }, function(data){
      Cookie.set("todos", this.state.todosList)
    })
  }

  render() {
    return (
      <section className="app">
        <Input onAddTodo={this.addTodo.bind(this)}/>
        <List itemsList={this.state.todosList} removeTodo={this.removeTodo.bind(this)}/>
      </section> 
    );
  }
}

export default App;
