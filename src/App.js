import React, { Component } from 'react';
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
      todosList: []
    }
  }

  componentWillMount() {
    let todosList = [
      'Eat Breakfast',
      'Workout'
      ]
      this.setState({
        todosList
      })
  }

  addTodo(todo){
    if(!todo) return false
    console.log(this.state.todosList)
    this.setState({ 
      todosList: this.state.todosList.concat(todo)
    }, function(){
      console.log(this.state.todosList)
    })
  }

  removeTodo(todo){
    let updatedTodos = this.state.todosList;
    updatedTodos = updatedTodos.filter((it) => it !== todo)
    this.setState({
      todosList: updatedTodos
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
