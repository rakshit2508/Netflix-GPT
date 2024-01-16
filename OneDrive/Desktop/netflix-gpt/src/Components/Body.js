import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../Utils/userSlice'


const Body = () => {
     const dispatch = useDispatch();
    // const navigate = useNavigate();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ]);

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // when user is signed in
          //const uid = user.uid;
          const {uid , email , displayName, photoURL} = user;
          dispatch(addUser({uid:uid , email:email , displayName:displayName, photoURL:photoURL}));
         // navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
         // navigate("/"); // navigate to home page after log out
        }
      });

    }, [])

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
