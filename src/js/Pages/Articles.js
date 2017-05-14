import React from 'react';
import {Link} from 'react-router-dom';
import Article from './Articles/Article';

export default class Articles extends React.Component{
    constructor(){
        super();   
         this.AllArticles=[
            "Some Article",
            "Some Other Article",
            "Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Another Article",
            "Still More",
        ].map((title, id) => <Article key={id} title={title}/>);     
    }

    render(){
       
        console.log(this.AllArticles);
        return (
        <div>
            <div class="row" >
                <div class="col-lg-12">
                    <div class="well bs-component">
                       <h1>All Articles</h1>
                    </div>
                </div>
            </div>
            <div class="row">
               {this.AllArticles}
            </div>
        </div>
                     
                
           
        );
    }
}
