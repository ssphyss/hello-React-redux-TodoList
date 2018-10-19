import { 
    // INIT_LIST_ACTION, 
    CHANGE_INPUT_VALUE, 
    ADD_TODO_ITEM, 
    DELETE_TODO_ITEM 
} from './actionTypes';

// 數據的初始值
const defaultState = {
    inputValue: '777',
    list: []
};

export default (state = defaultState, action) => {
    // 變動
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState; 
    }
     // 增加
     if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        console.log(newState);  
        return newState;      
    }
    // 刪除
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;      
    }
    return state;
}