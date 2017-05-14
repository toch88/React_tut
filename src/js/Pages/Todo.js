import React from 'react';

export default class Todo extends React.Component{
    render(){   
    const complete=this.props.complete? "label label-success" : "label label-danger";
    const completeText=this.props.complete? "done" : "pending";
    


    return (
    <li>
        ID: {this.props.id} <br/>
        text: {this.props.text} <br/>
        complete:<span class={complete}>{completeText}</span> <br/>
        <div>
            <button class="btn btn-success btn-xs" onClick={()=>{this.props.changeHandler(this.props.id)}}>✓</button>
            <button class="btn btn-danger btn-xs" onClick={()=>{this.props.deleteHandler(this.props.id)}}>x</button>
        </div>
        <br/>
    </li>);       
    }
}