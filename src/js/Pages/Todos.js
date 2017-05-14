import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Todo from "./Todo";
import TodoStore from "../Stores/TodoStore.js";
import * as TodoActions from "../Actions/TodoActions"

export default class Todos extends React.Component{
    constructor(){
      super(); 
      this.state = {
          todos: TodoStore.getAll(),
      };   
    }

    componentWillMount(){
      TodoStore.on("change", ()=>{
        this.setState({
          todos:TodoStore.getAll(),
        })
      });
    }  

    createTodo(){
      TodoActions.createTodo(Date.now());
    }

    deleteTodo(id){      
      TodoActions.deleteTodo(id);     
    }

    changeHandler(id){
      TodoActions.changeTodo(id);
    }
   
   

    render(){  
    const { todos }=this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} deleteHandler={this.deleteTodo.bind(this)} changeHandler={this.changeHandler.bind(this)}/>;
    });               
      return (
        <div>
          <h1>Todos</h1>
          <button class="btn btn-success" onClick={this.createTodo.bind(this)}>Add</button>            
          <ul>{TodoComponents}</ul>

        </div>       
      )
    }
}