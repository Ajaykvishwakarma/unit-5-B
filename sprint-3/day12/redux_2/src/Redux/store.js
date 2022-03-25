// import {createStore} from "redux";
// import { reducer} from "./reducer";
// export const store = createStore(reducer, {todo:[]});
import {createStore} from "redux";

import { reducer} from "./reducer";

// const rootReducer = combineReducers({
    
//     todo :todoReducer
// })

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());