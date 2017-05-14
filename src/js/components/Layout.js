import React from 'react';
import Header from './Header' ;
import Footer from './Footer' ;

export default class Layout extends React.Component{
    constructor(){
      super();
     
      this.state = {
        title: "Welcome",
      };       
    }

    render(){    
      //console.log(this.props.children);
      return (       
          <div>    
            <Header/>     
              {this.props.children}                 
            <Footer/>
          </div>          
      );  
    }
}