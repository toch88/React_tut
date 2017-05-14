import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


export default class Todos extends React.Component{
    constructor(){
      super(); 
      this.state = {
            temp: "",
      };     
    }
    
    handleCHange(e){
        const temp=e.target.value;              
        this.setState({temp});        
    }

    render(){  
      let {temp} = this.state;                 
      return (

        
      <div className="row">
        <div className="col-lg-6">
          <h2>Todos</h2>
          <div className="bs-component">
            <div className="modal">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title">Add to-do</h4>
                  </div>
                  <div className="modal-body">
                    <label for="Task" className="col-lg-2 control-label">Task</label>
                    <div className="col-lg-2">
                        <input value = {this.state.temp} className="form-control" id="task" onChange = {this.handleCHange.bind(this)}/>                     
                    </div>
                  </div>
                  <div className="modal-body">
                     <div class="well">
                        <p>{temp}</p>
                      </div>               
                  </div>
                  <div className="modal-footer">                    
                    <button type="button" className="btn btn-primary">Add Task</button>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
       
      );  
    }
}