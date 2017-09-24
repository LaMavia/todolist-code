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
    console.log(this.state.todosList);
    if(!todo) return false
    let updatedTodos = this.state.todosList;
    updatedTodos.push(todo);
    this.setState({ 
      todosList: updatedTodos
    }, function(){
      console.log(updatedTodos)
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
