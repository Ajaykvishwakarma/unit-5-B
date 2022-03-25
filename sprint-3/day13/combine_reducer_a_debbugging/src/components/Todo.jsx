import { useState, useEffect } from "react";
import {useDispatch,  useSelector} from "react-redux"
import {addTodo} from "../Redux/Todo/action";
import axios from "axios";
// import { store } from "../Redux/store";
export const Todo = () => {

    const [text, setText] = useState("");

    const {todo} = useSelector((store) => store.todo) || [];

    // const store = useSelector((store) => store);  

    // const todos = useSelector((store) => ({count: store.count, todo: store.todos}));

    const dispatch = useDispatch();
 
        useEffect(() => {
            getTodos()
        },[])

  
        const getTodos = () => {
            axios.get("http://localhost:3001/todos").then(({ data }) => {
                dispatch(addTodo(data));
            })
        }
// console.log(todos)

    const addTodos = () => {
        axios.post("http://localhost:3001/todos", {
            title:text,
            status:false,
        }).then(() => getTodos())

    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/todos/${id}`).then(getTodos)
    }


    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} />
            
            <button onClick={() => {
                // dispatch(addTodo(text))
               addTodos()
            }}> Add Todos </button>

           {todo.map((e, i) => (
               <h4 key={i}> {e.title}{" "} 
               <button onClick={() => handleDelete(e.id)}> Delete </button>
               </h4>
           ))}

            </div>
            
    )
}