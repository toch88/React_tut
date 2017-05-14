import React from 'react';
import Title from './Header/Title'
import Menu from './Header/Menu'

export default class Header extends React.Component{
    constructor(){
        super();       
    }
        
    render(){
        
        return (
            <div>
                <Menu/>
                <Title title = {this.props.title}/>                 
            </div>
        );
    }
}