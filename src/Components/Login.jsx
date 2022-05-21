import React, { useState } from "react";
import "./Login.css";
import {auth} from "../firebase";
import  {signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const changeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

    const printCred = async function(){
    let userCred = await signInWithEmailAndPassword(auth,email,password);
    if(userCred){
        console.log("user exist");
    }else{
        console.log("not registered");
    }
  };
  return (
    <>
      <div className="flex-cotainer">
        <span> Email : </span>
        <input
          value={email}
          placeholder="email"
          onChange={changeEmail}
          type="email"
        ></input>
      </div>
      <div className="flex-cotainer">
        <span> Password : </span>
        <input
          value={password}
          placeholder="password"
          onChange={changePassword}
          type="password"
        ></input>
      </div>

      <button type="submit" onClick={printCred}>
        {" "}
        Submit
      </button>
    </>
  );
}

export default Login;
