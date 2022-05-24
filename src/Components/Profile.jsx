import React, { useState } from "react";
import "./profile.css";
import {useContext} from "react";
import { AuthContext } from "../Context/AuthContext";
/*
TODO:

  - name
  - profile
  using context api


 */
function Profile() {
  let userObj = useContext(AuthContext);
  // let [loading,setLoading] = useState(false);
  console.log(userObj);

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
