import React from 'react';

export default class Plot extends React.Component{
        constructor(){
            super();
            this.state = {
                title: "Plot",
            };
        }

       render(){
        return (
            <div>
                <h1>Plot</h1>
            </div>
        );
    }
}