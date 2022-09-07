import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { auth, provider } from './firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, setUserLogOutState, selectUserName, selectUserEmail } from './features/userSlice'

function App() {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const userEmail = useSelector(selectUserEmail)

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState())
    }).catch((err) => alert(err.message))
  }

  const handleSignIn = () => {
    auth.signInWithPopup(provider).then((result)=>{
      dispatch(setActiveUser({
        userName: result.user.displayName,
        userEmail: result.user.email
      }))

    })

    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          userName ? (
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <button onClick={handleSignIn}>Sign in</button>
          )


        }

      </header>
    </div>
  );
}

export default App;
