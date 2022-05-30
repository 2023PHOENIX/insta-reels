import React from 'react'
import instaIcon from "../Images/Insta.png";
import profile from "../Images/mine.png";
import upload from "../Images/icons8-movie-48.png"

import './Feed.css';
function Feed() {
  return (
    <>
      <div className='header'>
      <img src = {instaIcon} alt="#" className='instaIcon'/>
        <img src = {profile} alt = "#" className='profileImage'/>
      </div>

      <br></br>

      <div className='main_container'>
      <button className='upload_container'>
          <img src = {upload} className = {upload}alt="#"/>
          <span>UPLOAD</span>
      </button>
      <div></div>
      <div className='reels_container'>Reels</div>
      </div>
    </>
  )
}

export default Feed