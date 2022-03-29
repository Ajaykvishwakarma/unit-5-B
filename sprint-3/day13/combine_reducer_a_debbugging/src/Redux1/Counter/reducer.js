import {ADD_COUNT, SUB_COUNT} from "./action";
const initState = {
    count : localStorage.getItem("counter") || 0,

}
export const counterReducer = (store = initState, {type, payload}) => {

    // console.log("Store", store)

switch (type) {
    case ADD_COUNT: 
    localStorage.setItem("counter", store.count + payload)
    return {store, count: store.count + payload}

    case SUB_COUNT: 
    return {store, count: store.count - payload}

   

        default:
            return store;
}
}