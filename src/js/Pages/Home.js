import React from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';


export default class Home extends React.Component{
        constructor(){
            super();
            this.query = null;
            this.news = null;
            this.state = {
                title: "Home",
            };
        }

        setupToRender(){      
            let {news} = this.props.match.params;           
            this.news = news;
            let {search} = this.props.location;            
            this.query = queryString.parse(search);    
        }

       render(){
           this.setupToRender();    
            

        return (
            <div>
                <h1>Home</h1>
                <div>{this.news}</div>
                <div>{this.query.t}</div>
            </div>
        );
    }
}