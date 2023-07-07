import { Avatar } from "@material-ui/core";
import React from "react";
import { logOut } from "../database/database";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signOut } from "../features/userSlice";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import "../css/signOutModel.css";

function SignOutModel() {
  const dispatch = useDispatch();

  async function handleSignOut() {
    await logOut();
    dispatch(signOut());
  }

  const userInfo = useSelector(selectUser);
  return (
    <div className="signOutModel">
      <div className="main">
        <div className="personal">
          <Avatar src={userInfo?.photoUrl} alt="Profile" />
          <div className="info">
            <p>
              {userInfo.displayName} <span>{userInfo.email}</span>
            </p>
            <button>Manage your google account</button>
          </div>
        </div>
        <div className="addAccount">
          <PersonAddAlt1Icon className="icon" />
          <p>Add another account</p>
        </div>
      </div>
      <div className="footer">
        <div className="signOut" onClick={handleSignOut}>
          <ExitToAppIcon className="icon" />
          <p>Sign out</p>
        </div>
        <div className="terms">
          <p>Privacy</p>
          <span>•</span>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
}

export default SignOutModel;
