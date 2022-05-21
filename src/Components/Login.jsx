import React, { useState } from "react";
import "./Login.css";
import {auth} from "../firebase";
import  {signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [user,setUser] = useState(null);
  let [loader,setLoader] = useState(false);
  let [error,setError] = useState(null);


  const changeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

    const printCred = async function(){
    setLoader(true);
    let userCred = await 
    signInWithEmailAndPassword(auth,email,password);
    console.log(userCred.user.uid);
    setUser(userCred.user)
        setLoader(false);



    };
  return (
    <>{loader === true ? <h1> Loading....</h1> : 

    user != null ? <h1>user is {user.uid}</h1> : 


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
      </button></>
    }
    </>
  );
}

export default Login;
