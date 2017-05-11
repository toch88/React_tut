import React from 'react';
import Header from './Header' ;
import Footer from './Footer' ;
import {Link} from 'react-router-dom';
import Todos from "./Pages/Todos";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts"



export default class Layout extends React.Component{
    constructor(){
      super();
      this.state = {
        title: "Welcome",
      };  
      
      
    }

    changeTitle(title){
        this.setState({title});
    }

    render(){    
            
      return (       
          <div>    
            <Header changeTitle={(this.changeTitle.bind(this))} title= {this.props.children.props.children}/>                    
            <Footer />
          </div>          
      );  
    }
}