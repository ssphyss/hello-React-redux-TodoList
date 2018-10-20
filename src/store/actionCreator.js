import { 
    CHANGE_INPUT_VALUE, 
    ADD_TODO_ITEM, 
    DELETE_TODO_ITEM
    // INIT_LIST_ACTION 
} from './actionTypes';
// import axios from 'axios';

// export const getTodoList = () => {
//     return (dispatch) => {
//         console.log('=====生命週期 (掛載後) componentDidMount=====')
// 		axios.get('https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/todolistAntd')
// 		.then((res)=>{
// 			console.log('Ajax輸出：',res.data);
//             const data = res.data;
//             const action = initListAction(data);
//             dispatch(action);
// 		})
// 		.catch(()=>{alert('err')})
//     }
// }


// export const initListAction = (data) => ({
//     type: INIT_LIST_ACTION,
//     data
// })

// 封裝action
export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = (value) => ({
    type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})


