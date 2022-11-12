import React from 'react'
import Navbar from './Navbar'

function ProfileComp() {
  return (
    <div>
        <Navbar />
        <div>
            <div className='profile_upper'>
                <img src='IMG_20220225_131304.jpg' style={{height:"8rem",width:"8rem",borderRadius:"50%"}}/>
                <div style={{flexBasis:"40%"}}>
                    <h1>Name</h1>
                    <h2>Posts : 10</h2>
                </div>
            </div>
            <hr/>  {/* hr tag used to draw grey line*/}
            <div className='profile_videos'>
                <video src='Learn_Firebase_in_one_shot__Reels_Clone_Part-3_Firebase_,Firestore,Storage___React_Bootcamp(720p).mp4'/>
            </div>
        </div>
    </div>
  )
}

export default ProfileComp