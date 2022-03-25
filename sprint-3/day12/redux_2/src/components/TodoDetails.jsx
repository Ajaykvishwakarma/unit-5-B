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
                                    <td >{todo.status == true ? "True" : "False"}</td>
                                </tr>

                    
                    </tbody>
                </table>
            </div>
        </>

    )

}