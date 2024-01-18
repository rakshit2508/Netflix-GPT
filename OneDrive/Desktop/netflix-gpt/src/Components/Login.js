import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { auth } from '../Utils/firebase';
//import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import {USER_AVATAR} from '../Utils/constants'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage , setErrorMessage] = useState(null);
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  

  const handleButtonClick = () =>
  {
    // validation the form data
    // console.log(email); to know why we have written email.current.value
    const message  = checkValidData(email.current.value, password.current.value);
    //console.log(message);
    setErrorMessage(message);
    if(message) return;

   // After validation proceed for SignIn/ Sign Up -- Authentication
    if(!isSignInForm)
    {  // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value)
       .then((userCredential) => {
       // Signed up 
        const user = userCredential.user;
       // console.log(user)
       updateProfile(user, {
        displayName: name.current.value, photoURL: USER_AVATAR,
      }).then(() => {
        // Profile updated!
        // we were not dispatching action after updation so we need to do here again
        const {uid , email , displayName, photoURL} = auth.currentUser; // this is updated user
        dispatch(addUser({uid:uid , email:email , displayName:displayName, photoURL:photoURL}));  
        //navigate("/browse");

      }).catch((error) => {
        // An error occurred
        setErrorMessage(error.message);
      });
       
       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         // added by us
         setErrorMessage(errorCode + " " + errorMessage);

    // ..
        });
    }
    else
    {
      signInWithEmailAndPassword(
         auth,
         email.current.value, 
         password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //console.log(user);
        
        //navigate("/browse");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage);
      });
    }



  }  
  const toggleSignInForm = () =>
  {
    setIsSignInForm(!isSignInForm);
  }
    return (
      <div>
       <Header/>
       <div className="absolute">
        <img 
        src ="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="background"
        />
       </div>
       <form 
       onSubmit= {(e) => e.preventDefault()}
       className="w-3/12 absolute p-12 bg-black opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && ( // show this input only when it is not sign in
        <input
           ref = {name}
           type="text"
           placeholder='Full Name'
           className='p-4 my-4 w-full bg-gray-700'
        />)
         }
        <input
           ref = {email}
           type="text"
           placeholder='Email Address'
           className='p-4 my-4 w-full bg-gray-700'
        />
        <input
          ref = {password}
          type='password'
          placeholder='Password'
          className= 'p-4 my-4 w-full bg-gray-700'
        />
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick} >
        {isSignInForm ? "Sign In" : "Sign Up"} 
        </button>
        <p className="py-4 cursor-pointer"onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix, Sign Up Now": "Already Registered. Sign In Now"}
          </p>
       </form>
      </div>
    )
}

export default Login