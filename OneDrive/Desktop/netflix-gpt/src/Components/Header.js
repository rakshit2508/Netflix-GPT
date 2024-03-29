import React, { useEffect } from 'react'
import { signOut ,onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Utils/firebase'
import { addUser, removeUser } from '../Utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import {changeLanguage} from '../Utils/configSlice'

const Header = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = useSelector(store => store.user);
   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

   const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      //navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
   }

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // when user is signed in
        //const uid = user.uid;
        const {uid , email , displayName, photoURL} = user;
        dispatch(addUser({uid:uid , email:email , displayName:displayName, photoURL:photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/"); // navigate to home page after log out
      }
    });
    
    //unsubscribe when component unmounts
    return () => unsubscribe();

  }, []);

  const handleGptSearchClick =() => {
    // toggle GPT search page
      dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
     dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
      className="w-44"
      src= {LOGO}
      alt="logo"
      />
      {user && //load only when there is a
      <div className='flex p-2'>
        {showGptSearch && (<select className='p-2 mp-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang) =>
          (
            <option key ={lang.identifier} value={lang.identifier}>
              {lang.name}</option>
          ))}

        </select>)}
        <button className="py-2 px-2 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2"
        onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Homepage" :"GPT Search"}
        </button> 
      <img 
      className="w-12 h-12"
      src= {user?.photoURL}
      alt="user icon"
      />
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>
      }
    </div>
  )
}

export default Header
