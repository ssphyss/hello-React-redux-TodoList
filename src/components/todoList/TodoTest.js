import React, { Component } from 'react';

class TodoTest extends Component {
    
    render() {       
        console.log('render TodoTest 子組件1');
        return (
            <div>    
                <span>TodoTest子組件1：   </span>         
                { this.props.content }
            </div>
        )
    }  
}  
export default TodoTest;