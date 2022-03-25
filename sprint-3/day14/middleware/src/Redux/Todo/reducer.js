import { GET_TODO} from "./action";
const initState = {
    
    todo:[],
    loading:false,
    error:false,
}
export const todoReducer = (store = initState, {type, payload}) => {

    // console.log("Store", store)

switch (type) {
    case GET_TODO: 
    return {...store, todo: payload}

        default:
            return store;
}
}