import {createStore, combineReducers , applyMiddleware} from "redux";
import { counterReducer} from "./Counter/reducer";
import { todoReducer} from "./Todo/reducer";

const rootReducer = combineReducers({
    count: counterReducer,
    todo :todoReducer
})

const loggerMiddleware = (store) => (next) => (action) => {
    console.log(action)
    console.time("t1");
    next(action)
    console.timeEnd("t1")
}


export const store = createStore(rootReducer,applyMiddleware(loggerMiddleware)

    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );