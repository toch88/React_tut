import { EventEmitter } from 'events';

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

    getAll(){
        return this.todos;
    }
}

const todoStore = new TodoStore();


export default todoStore;