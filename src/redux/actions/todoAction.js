import { ActionTypes } from "../actionTypes/todoTypes";

// payloadı olmayan bir aksiyon tanımlama
const ADD_COUNT =  {
    type: 'ADD_COUNT',
};

//payloadı olan bir aksiyon tanımlama
//aksiyon oluşturan fonksiyonlardır.
export const addTodo= (payload) => ({  //return anlamına gelmesi için ({}) şekilnde yaptık
    type:ActionTypes.ADD_TODO,
    payload   // bir özelliğin anahtarı ve değeri aynı olacak se birini yazmamız yeterli olur
})

export const deleteTodo= (payload) => ({ 
    type:ActionTypes.DELETE_TODO,
    payload
})

export const uptadeTodo= (payload) => ({ 
    type:ActionTypes.UPDATE_TODO,
    payload
})

export const setTodos= (payload) => ({ 
    type:ActionTypes.SET_TODOS,
    payload
})