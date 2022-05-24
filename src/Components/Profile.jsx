import React, { useEffect, useState } from "react";
import "./profile.css";
import {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
import { doc, getDoc} from "firebase/firestore";
import { db } from "../firebase";
/*
TODO:

  - name
  - profile
  using context api


 */
function Profile() {
  let userObj = useContext(AuthContext);
  // let [loading,setLoading] = useState(false);
  // console.log(userObj);

  useEffect(function fn() {
 
    (async function(){

      const docRef = doc(db,'user',userObj.cUser.uid);
      const docSnap = await getDoc(docRef);
  
  
      if(docSnap.exists()){
        console.log("document is ",docSnap.data())
      }
   
    })()
    
  })() , [userObj.cUser]); 

  return (
    <div>


      {userObj.cUser===null ? <div> user is not valid</div> : <div> user is {userObj.cUser.uid}</div>}
  
    </div>



    // loading===true? <div> Loading getting data  ...</div> : 
    // <>
    //   <div className="header"></div>
    //   <div className="main">
    //     <div className="profile-image-container">

    //     <img src="https://www.fillmurray.com/640/360" className="profile-img" alt="##"></img>
    //     </div>


    //     <div className="details">
    //       <div className="content">Name</div>
    //       <div className="content">
    //         No of posts : <span className="bold-text">posts</span>
    //       </div>
    //       <div className="content">
    //         Email : <span className="bold-text"> Email.com</span>
    //       </div>
    //     </div>
    //   </div>
    // </>
  
  );
}

export default Profile;
