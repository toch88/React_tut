import React from 'react';

export default class Todo extends React.Component{
    render(){
    console.log(this.props);
    const complete=this.props.complete? "label label-success" : "label label-danger";
    const completeText=this.props.complete? "success" : "danger";


    return (<li>ID: {this.props.id} text: {this.props.text} complete:<span class={complete}>{completeText}</span></li>);       
    }
}