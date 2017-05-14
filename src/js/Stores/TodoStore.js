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

    deleteTodo(idToDel){
        
        for(let i=0; i<this.todos.length; i++){
            let {id} = this.todos[i]
            if(id == idToDel){
                this.todos.splice(i,1);
            }
        }

        this.emit("change");
    }

    changeTodo(idToChng){
          for(let i=0; i<this.todos.length; i++){
            let {id} = this.todos[i]
            if(id == idToChng){
                this.todos[i].complete=true;
            }
        }    

        this.emit("change");    
    }

    getAll(){
        return this.todos;
    } 

    handleActions(action){
      switch(action.type){
        case "CREATE_TODO": {
            this.createTodo(action.text); break;
        }
        case "DELETE_TODO": {
            this.deleteTodo(action.id); break;
        }
         case "CHANGE_TODO": {
            this.changeTodo(action.id); break;
        }
      }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
//dispatcher.register(todoStore.anotherAction.bind(todoStore));
window.todoStore=todoStore;
window.dispatcher=dispatcher;

export default todoStore;