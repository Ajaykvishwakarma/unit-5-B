import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TodoDatails = () => {

    const [todo, setTodo ] = useState([]);
   
    const {id} = useParams()

    useEffect(() => {
        getTodo();
    },[])

    async function getTodo() {
        const a = await fetch(`http://localhost:8080/todos/${id}`)
        const b = await a.json()
        setTodo(b)
    }
    async function updateData(todo){
        const todoObj = {
            task : todo.text,
            status : todo.status?false:true
        }
        const arg = {
            method : "PATCH",
            body : JSON.stringify(todoObj),
            headers : { "content-type" : "application/json" }
        }
        const r1 = await fetch(`http://localhost:8080/todos/${todo.id}` ,arg)
        const r2 = await r1.json()
        getTodo()
    }


    return (

        <>
            <div>
                <table  >
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Todo Name </th>
                            <th> Todo Status</th>
                        </tr>
                    </thead>
                    <tbody>
                                <tr>
                                    <td >{todo.id}</td>
                                    <td >{todo.title}</td>
                                    {/* <td >{todo.status == true ? "True" : "False"}</td> */}
                                    <td><button onClick={()=>updateData(todo)} style={{padding : "3px 10px", fontSize : "13px"}}>{ todo.status? "DONE":"NOT DONE"}</button></td>
                                </tr>

                    
                    </tbody>
                </table>
            </div>
        </>

    )

}