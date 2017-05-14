import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import Todo from "./Todo";
import TodoStore from "../Stores/TodoStore.js";

export default class Todos extends React.Component{
    constructor(){
      super(); 
      this.state = {
          todos: TodoStore.getAll(),
      };   
    }    
   

    render(){  
    const { todos }=this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });               
      return (
        <div>
          <h1>Todos</h1>
          <ul>{TodoComponents}</ul>
        </div>       
      )
    }
}