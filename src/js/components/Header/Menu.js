import React from 'react';
import DropMenu from './Buttons/DropMenu';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component{
    constructor(){
      super();
      this.state={
        collapsed: true,
      };
    }

   toggleCollapse(){     
    const collapsed=!this.state.collapsed;
    this.setState({collapsed});
   }

    render(){
        const { collapsed } = this.state;
        const navClass = collapsed ? "": "in";
        return(   
          <div class="navbar navbar-default">          
              <div class="container-fluid">
                <div class="navbar-header">
                  <button type="button" onClick={this.toggleCollapse.bind(this)} class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </button>
                  <a class="navbar-brand" href="#">Menu</a>
                </div>

                <div class={"collapse navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav">
                    <li class="active"><Link to="/home">Home</Link></li>
                    <li class=""><Link to = "/todos">Todos</Link></li>    
                    <li class=""><Link to = "/contacts">Contact</Link></li>                           
                  </ul>                     
                </div>
              </div>                 
          </div>      
        )
    };
}