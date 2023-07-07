import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  selectUser,
  selectSignOutModel,
  toggleSignOutModel,
  signIn,
  signOut,
} from "../features/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { selectSendMessageIsOpen } from "../features/mailSlice";
import EmailList from "./email/EmailList";
import Header from "./Header";
import Sidebar from "./sidebar/Sidebar";
import Compose from "./compose/Compose";
import EmailDetail from "./email/emailDetail/EmailDetail";
import Login from "./Login";
import SignOutModel from "./SignOutModel";
import "../css/app.css";

function App() {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  const userInfo = useSelector(selectUser);
  const setSignOutModel = useSelector(selectSignOutModel);
  const dispatch = useDispatch();
  const auth = getAuth();
  function signOutModel() {
    dispatch(toggleSignOutModel());
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        dispatch(
          signIn({
            id: userInfo.uid,
            displayName: userInfo.displayName,
            email: userInfo.email,
            photoUrl: userInfo.photoURL,
          })
        );
      } else {
        dispatch(signOut());
      }
    });
  }, []);

  if (userInfo) {
    return (
      <div className="App">
        <Header openSignOutModel={signOutModel} />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<EmailList />} />
            <Route exact path="/emailDetail" element={<EmailDetail />} />
            <Route />
          </Routes>
        </div>
        {isMessageOpen && <Compose />}
        {setSignOutModel && <SignOutModel />}
      </div>
    );
  }

  if (!userInfo) {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
