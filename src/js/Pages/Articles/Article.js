import React from 'react';

export default class Article extends React.Component{
    render(){
        
        return (
            <div class="col-md-3">
                <h3>{this.props.title}</h3>
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula
                <div>
                    <a class="btn btn-default" href="#">More Info</a>
                </div>                
            </div>
        );
    }
}