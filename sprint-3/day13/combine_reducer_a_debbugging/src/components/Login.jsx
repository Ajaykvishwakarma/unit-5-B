import { useState } from "react";
import { Navigate } from 'react-router-dom';

export const Login = () => {

    const tempUser = {
        email : "",
        password : ""
    }
    const [ user, setUser ] = useState(tempUser);

    function userHandler(e) {

        const { name, value } = e.target;
        setUser({ ...user,[name] : value})

    }

    async function loginUser() {

        if(localStorage.getItem('user'))
             return 
        const Url = 'https://reqres.in'
        const arg  = {
            method : "POST",
            body : JSON.stringify(user),
            headers : { "content-type" : "application/json"}
        }

        const a = await fetch(Url+`/api/register`, arg)
        const b = await a.json()

        if(b.error)
            return alert("Credential are wrong.")
        localStorage.setItem('user', JSON.stringify({...user, token : b.token}))
        alert("You are successfully logged in!")

         window.location.href = "http://localhost:3000/"
        
    }

    function logOut() {

        if(!localStorage.getItem('user'))
                return 
            localStorage.clear('user')

            alert('Logout success !')

            window.location.reload()

    }

    return (
        <>
            <div>
           
                <input name = "email" onChange={userHandler} style={{padding : "4px 12px"}} type="text" placeholder="Enter Your Email..." />
                <br />

                <input name="password" onChange={userHandler} style={{padding : "4px 12px"}} type="text" placeholder="Enter Your Password..."/>
                <br /><br />

                <button onClick={loginUser} style={{padding : "2px 10px", fontSize : "20px", margin : "0px 10px"}}>Login</button>
                <button onClick={logOut} style={{padding : "2px 10px", fontSize : "20px", margin : "0px 10px"}}>LogOut</button>
           
            </div>
        </>
    )

    


}