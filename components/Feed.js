import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Upload from "./Upload";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { doc, onSnapshot } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { db } from "../firebase";

function Feed() {

  const {user} = useContext(AuthContext) 

  useEffect(()=>{
    console.log(user.uid);
    const unsub = onSnapshot(doc(db,"users",user.uid),(doc)=>{
      console.log(doc.data());
      // setUserData(doc.data())
    })

    return () =>{
      unsub();
    }
  },[user])

  return (
    <div className="feed-container">
      {/* Navbar */}
      <Navbar />
      {/* Upload videos btn*/}
      <Upload />
      {/* reels */}
      <div className="videos-container">
        <div className="post-container">
            <video />
            <div className="videos-info">
              <div className="avatar-container">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{margin:"0.5rem"}} /> 
              <p>Name</p>
              </div>
              <div className="post-like">
                <FavoriteIcon fontSize="large"/> 10
              </div>
            </div>
        </div>

        <div className="post-container">
            <video />
        </div>

      </div>
    </div>
  );
}

export default Feed;
