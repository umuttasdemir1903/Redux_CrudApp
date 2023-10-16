
const initialState = {
    todos : [],
    isEmpty:true
}


const categoryReducer = (state=initialState,action) => {
    switch(action.type) {
        case "ADD_CATEGORY":
            //kodlar
            return '';
        case "DELETE_CATEGORY": 
            //kodlar
            return '';
        default :
            //kodlar
            return state;
    }
}

export default categoryReducer;