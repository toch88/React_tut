import { EventEmitter } from 'events';

import dispatcher from "../dispatcher"

class TodoStore extends EventEmitter{
    constructor(){
        super();
        this.todos =[
            {
              id:11345634,
              text: "Go Shopping",
              complete: false
            },
            {
              id:2323213,
              text: "Pay Bills",
              complete: true
            },
          ];
    }

    createTodo(text){
        let id = Date.now();
        this.todos.push({
            id,
            text,
            complete:false,
        });

        this.emit("change");
    }

    getAll(){
        return this.todos;
    }

    handleActions(action){
      switch(action.type){
        case "CREATE_TODO": {
            this.createTodo(action.text);
        }
      }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
window.todoStore=todoStore;
window.dispatcher=dispatcher;

export default todoStore;