import React from 'react';

import Title from './Header/Title'
import Menu from './Header/Menu'

export default class Header extends React.Component{
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
            <div>
                <Menu/>
                <Title title = {this.props.title}/> 
                <div>
                    {temp}
                </div>            
                <input value = {this.state.temp} onChange = {this.handleCHange.bind(this)}/>
            </div>
        );
    }
}