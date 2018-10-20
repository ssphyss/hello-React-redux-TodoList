import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoTest from './TodoTest';
// import store from './../../store';  // 使用 react-redux引入store
import { connect } from 'react-redux';  // 使用 react-redux引入connect
import { /*initListAction,*/ getInputChangeAction, getAddItemAction, getDeleteItemAction } from './../../store/actionCreator';
// import { 
//     // INIT_LIST_ACTION, 
//     CHANGE_INPUT_VALUE, 
//     ADD_TODO_ITEM, 
//     DELETE_TODO_ITEM 
// } from './../../store/actionTypes';
import './index.css';

class TodoList extends Component {
	render() {
		// ================ 調整 ===============
		const { inputValue, handleInputChange, handleBtnClick } = this.props;
		return (
			<div className='todo-Box'>
				<h1>React-Redux  <span>TodoList</span></h1>
				<label htmlFor='insertArea'>輸入內容</label>
				<input 
					id='insertArea'
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button onClick={handleBtnClick}>提交</button>
				<ul>
					{ this.getTodoItem() }
				</ul>
				<TodoTest content={inputValue}>
				</TodoTest>
			</div>

			// ================ 原本 ===============
			// <div className='todo-Box'>
			// 	<label htmlFor='insertArea'>輸入內容</label>
			// 	<input 
			// 		id='insertArea'
			// 		value={this.props.inputValue}
			// 		onChange={this.props.handleInputChange}
			// 	/>
			// 	<button onClick={this.props.handleBtnClick}>提交</button>
			// 	<ul>
			// 		{ this.getTodoItem() }
			// 	</ul>
			// 	<TodoTest content={this.props.inputValue}>
			// 	</TodoTest>
			// </div>
		);
	} 	
  	getTodoItem(){
		return this.props.list.map((item, index) => {
			const { handleItemDelete } = this.props;
			return (
				// 父組件傳遞屬性跟方法給子組件	
				<TodoItem
					key={index}
					content={item}
					index={index}
					deleteItem={handleItemDelete}
				/>							
			)							
		})
	}	

	// // 輸入框
	// handleInputChange(e){
	// 	// console.log(e.target)       // 獲取DOM節點
	// 	// console.log(e.target.value)
	// 	const value = e.target.value;
	// 	this.setState(() => ({			
	// 		inputValue: value
	// 	}))
	// }

	// // 提交
	// handleBtnClick(){
	// 	this.setState((prevState) => ({
	// 		list : [...prevState.list, prevState.inputValue],
	// 		inputValue: ''
	// 	}))
	// }
	
	// // 刪除
	// handleItemDelete(index){		
	// 	this.setState((prevState) => {
	// 		const list = [...prevState.list];
	// 		list.splice(index, 1);
	// 		return {list}
	// 	})
	// }
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputChange(e){
			const action = getInputChangeAction(e.target.value);
			dispatch(action);
		},

		handleBtnClick(){
			const action = getAddItemAction();
			dispatch(action);
		},
	
		handleItemDelete(index){
			const action = getDeleteItemAction(index);
			dispatch(action);
		}
		// handleInputChange(e){
		// 	console.log('e.target.value：',e.target.value);
		// 	const action = {
		// 		type: CHANGE_INPUT_VALUE,
		// 		value: e.target.value
		// 	}
		// 	dispatch(action);
		// },
		// handleBtnClick(){
		// 	console.log('handleBtnClick 按鈕：', '送出OK');
		// 	const action = {
		// 		type: ADD_TODO_ITEM
		// 	}
		// 	dispatch(action);
		// },
		// handleItemDelete (){
		// 	console.log('handleItemDelete 按鈕：', '刪除OK');
		// 	const action = {
		// 		type: DELETE_TODO_ITEM
		// 	}
		// 	dispatch(action);
		// }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
