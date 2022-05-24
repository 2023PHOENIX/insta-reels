import React, { useEffect, useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [user, setUser] = useState(null);

  
  let [loader, setLoader] = useState(false);
  let [error, setError] = useState('');


  let [mainLoader,setMainLoader] = useState("");


  const changeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const printCred = async function () {
    try {
      setLoader(true);
      let userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCred.user.uid);
      setUser(userCred.user);
    } catch (e) {
      setError(e.message);
    }
    setTimeout(() => {
        setError(""); 
    }, 2000);
    setLoader(false);

    // after some time  => error message removed
  };

  const signout = async function (){
    await signOut(auth);
    setUser(null);
  }
  
  // login and logout 
  // if you are logged in then it will automattically logged in you 

  // IMP: only one time 
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
      }else{
        setUser(null);
      }

      setMainLoader(false); 
    });
  },[])


  return (
    <>
      {mainLoader===true?<h1> Page Loading</h1>:
        error!==''?<div>
      
      <h1> Error is {error}</h1> </div>  : loader === true ? (
        <h1> Loading....</h1>
      ) : user != null ? (<>
            <button onClick={signout}> Signout</button>
            <h1>user is {user.uid}</h1>
        </>
      ) : (
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
      )}
    </>
  );
}

export default Login;
