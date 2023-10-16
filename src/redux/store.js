

import {createStore,combineReducers} from 'redux';
import todoReducer from './reducers/todoReducer';
import categoryReducer from './reducers/categoryReducer';


// bir tane reducer var ise
//projeye tanıtmak için export etmeliyiz
//export default createStore(todoReducer);

//birden çok reducer var ise bu şekilde birleştirilir
const rootReducer = combineReducers({
    todoReducer,
    categoryReducer
})

export default createStore(rootReducer);



