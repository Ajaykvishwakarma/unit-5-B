import { useState } from "react";
import {useDispatch,  useSelector} from "react-redux"
import {addTodo} from "../Redux/action";
import { store } from "../Redux/store";
export const Todo = () => {

    const [text, setText] = useState("");

    const todos = useSelector((store) => store.todo);

    // const store = useSelector((store) => store);  

    // const todos = useSelector((store) => ({count: store.count, todo: store.todos}));

 

     console.log("Rendering Todos")
  
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            
            <button onClick={() => {
                dispatch(addTodo(text))
            }}> Add Todos </button>

           {todos.map((e, i) => (
               <h4 key={i}> {e} </h4>
           ))}

            </div>
            
    )
}