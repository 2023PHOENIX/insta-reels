import { doc, addDoc, collection  } from "firebase/firestore";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../firebase";
function Signup() {
  let [name, setname] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");

  let [loader, setLoader] = useState(false);
  let [error, setError] = useState("");

  let [user, setUser] = useState("");
  const changeName = (e) => {
    setname(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  async function processSignUp() {
    try {
      setLoader(true);
      let userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCred.user.uid);
      // ..
      
     
      //TODO: will add in firestore => email,name,
     

        const docRef = await addDoc(collection(db,"users"),{
          
          email,
          name,
          reelsIds : [],
          profileImageUrl :  "",
          userId : userCred.user.uid
          
        });
   
        
      setUser(userCred.user);
      
    } catch (e) {
      setError(e.message);
      // console.log(e.message);
    }
    setTimeout(() => {
      setError("");
    }, 2000);
    setLoader(false);
  };
  return (
    <>
      {error !== "" ? (
        <h1> Error is {error} </h1>
      ) : loader === true ? (
        <h1>Loading...</h1>
      ) : user !== "" ? (
        <p> Hello {user.uid} </p>
      ) : (
        <>
          <div className="flex-cotainer">
            <span> Name : </span>
            <input
              value={name}
              placeholder="name"
              onChange={changeName}
              type="email"
            ></input>
          </div>
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

          <button type="submit" onClick={processSignUp}>
            {" "}
            SignUp
          </button>
        </>
      )}
    </>
  );
}

export default Signup;
