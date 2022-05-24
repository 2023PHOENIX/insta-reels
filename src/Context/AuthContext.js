import React ,{ useEffect,useState } from "react";
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from "../firebase";

  // login and logout 
  // if you are logged in then it will automattically logged in you 

  // IMP: only one time 


  export let AuthContext = React.createContext();
  export let AuthContextProvider = ({children}) => {
  let [mainLoader,setMainLoader] = useState("");

  let [cUser, setUser] = useState(null); 

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
     
    let value = {cUser};

    return (
      <AuthContext.Provider value = {value}>
        {mainLoader===false && children}
      </AuthContext.Provider>
    )
  }
  