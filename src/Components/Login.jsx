import React, { useState } from 'react'
import './Login.css';



function Login() {

    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");

    let userCred = {};
    const changeEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const changePassword = (e) => {
        setPassword(e.target.value);
    }


    const updateCred = () => {
        alert(email + "\t" + password);
    }
    return (
    <>
    <div className='flex-cotainer'> 
        <span> Email : </span>
        <input value = {email} placeholder="email" onChange={changeEmail} type='email'></input>
    </div>
    <div className='flex-cotainer'> 
        <span> Password : </span>
        <input value = {password} placeholder="password" onChange={changePassword} type='password'></input>
    </div>
    
    
    <button type='submit' onClick={updateCred}> Submit</button>
    
    </>

  )
}

export default Login