import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('生命週期 (要變更嗎?) shouldComponentUpdate ')
        if(nextProps.content !== this.props.content) {
            return true
        }else {
            return false
        }		
    }
    
    render() {
        console.log('render TodoItem 子組件2');
        const { content, text }= this.props;
        return (
            <div onClick={ this.handleClick }>   
                             
                {/* {this.props.content} */}
                <span>TodoItem子組件2： { text } - </span>
                { content }
            </div>          
        )
    }

    handleClick(){
        // this.props.deleteItem(this.props.index)
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    // content: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number,
}

TodoItem.defaultProps = {
    text: 'Hello 預設值驗證',
};
  
export default TodoItem;