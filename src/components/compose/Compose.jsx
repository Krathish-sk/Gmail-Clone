import React, { useState } from "react";
import { selectUser } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
import { addDataToFirebase } from "../../database/database";
import RemoveIcon from "@mui/icons-material/Remove";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import LinkIcon from "@mui/icons-material/Link";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";

import "../../css/compose/compose.css";

export default function Compose() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const userInfo = useSelector(selectUser);

  const dispatch = useDispatch();
  const closeSendMessageHandler = () => {
    dispatch(closeSendMessage());
  };

  async function formSubmitHandler(e) {
    e.preventDefault();

    const emailData = {
      fromName: userInfo.displayName,
      fromMail: userInfo.email,
      to,
      subject,
      message,
      timeStamp: new Date().toLocaleString(),
    };
    const sendData = addDataToFirebase("emails", emailData);
    if (sendData) {
      alert("Done");
    } else {
      alert(sendData);
    }

    setTo("");
    setSubject("");
    setMessage("");
    dispatch(closeSendMessage());
  }

  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon onClick={closeSendMessageHandler} />
        </div>
      </div>
      <form onSubmit={formSubmitHandler}>
        <div className="compose__body">
          <div className="compose__bodyForm">
            <input
              required
              type="email"
              placeholder="Reciepent"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              required
              rows="20"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="compose__footer">
          <div className="compose__footerLeft">
            <button type="submit">
              Send
              <ArrowDropDownIcon />
            </button>
          </div>
          <div className="compose__footerRight">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoSizeSelectActualIcon />
            <LockClockOutlinedIcon />
            <ModeOutlinedIcon />
            <MoreVertOutlinedIcon />
            <DeleteOutlinedIcon />
          </div>
        </div>
      </form>
    </div>
  );
}
