import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react'
import { useEffect } from 'react';
import { auth } from '../firebase'

export const AuthContext = React.createContext();

function AuthWrapper({children}) {
    // console.log("Hello freom auth wrapper");

    const[user,setUser] = React.useState('')
    const[loading,setLoading] = React.useState(true)

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            console.log(user);
            if(user){
                setUser(user)
            }else{
               setUser('');
            }
        })
        setLoading(false)
    },[])


    function login(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }


    function logout(){
        return signOut(auth); 
    }


    function forgot(email){
        return sendPasswordResetEmail(auth,email);
    }

    function signup(email,password){
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const store={
        login,
        user,
        logout,
        forgot,
        signup,
    }


  return (
    <AuthContext.Provider value={store}>
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper