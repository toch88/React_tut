import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component{
        constructor(){
            super();
            this.state = {
                title: "Home",
            };
        }

       render(){
        let {params}=this.props.match;
        console.log(params);
        return (
            <div>
                <h1>Home</h1>
                <div>{params.news}</div>
            </div>
        );
    }
}