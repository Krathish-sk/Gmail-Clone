import React from "react";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";
import { Button, IconButton } from "@material-ui/core";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import KeyboardRoundedIcon from "@mui/icons-material/KeyboardRounded";
import LabelRoundedIcon from "@mui/icons-material/LabelRounded";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import SidebarOptions from "./SidebarOptions";
import "../../css/sidebar/sidebar.css";

function Sidebar() {
  const dispatch = useDispatch();
  const openSendMessageHandler = () => {
    dispatch(openSendMessage());
  };

  return (
    <div className="sidebar">
      {/* Compose button */}
      <Button
        onClick={openSendMessageHandler}
        className="compose__btn"
        startIcon={<CreateOutlinedIcon />}
      >
        Compose
      </Button>

      {/* Side bar buttons */}
      <div className="sidebarOptions__items--one">
        <SidebarOptions
          Icon={InboxRoundedIcon}
          title="Inbox"
          number={Math.floor(Math.random() * 100)}
          isActive
        />
        <SidebarOptions
          Icon={StarOutlineRoundedIcon}
          title="Starred"
          number={Math.floor(Math.random() * 100)}
        />
        <SidebarOptions
          Icon={AccessTimeRoundedIcon}
          title="Snoozed"
          number={Math.floor(Math.random() * 100)}
        />
        <SidebarOptions
          Icon={SendRoundedIcon}
          title="Sent"
          number={Math.floor(Math.random() * 100)}
        />
        <SidebarOptions
          Icon={InsertDriveFileRoundedIcon}
          title="Draft"
          number={Math.floor(Math.random() * 100)}
        />
        <SidebarOptions Icon={LabelOutlinedIcon} title="Categories" />
        <SidebarOptions
          Icon={KeyboardArrowDownRoundedIcon}
          title="More"
          defaultBackground
        />
      </div>

      {/* Label */}
      <hr className="sidebarOptions__line" />
      <div>
        <div className="sidebarOptions__label">
          <h3 className="sidebarOptions__heading">Label</h3>
          <IconButton>
            <AddOutlinedIcon />
          </IconButton>
        </div>
        <SidebarOptions Icon={LabelRoundedIcon} title="Unwanted" />
      </div>

      {/* Meetings */}
      <hr className="sidebarOptions__line" />
      <div>
        <h3 className="sidebarOptions__heading">Meet</h3>
        <SidebarOptions Icon={VideocamRoundedIcon} title="New Meeting" />
        <SidebarOptions Icon={KeyboardRoundedIcon} title="Join Meeting" />
      </div>
    </div>
  );
}

export default Sidebar;
