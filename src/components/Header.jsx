import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar, IconButton } from "@material-ui/core";
import ReorderIcon from "@mui/icons-material/Reorder";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import "../css/header.css";

function Header({ openSignOutModel }) {
  const userInfo = useSelector(selectUser);
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <a href="/">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
            alt="Gmail Logo"
          />
        </a>
      </div>
      <div className="header__middle">
        <div className="search_mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search mail" />
          <div className="filter_icon">
            <IconButton>
              <TuneIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <ContactSupportOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsOutlinedIcon />
        </IconButton>
        <Avatar onClick={openSignOutModel} src={userInfo?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
