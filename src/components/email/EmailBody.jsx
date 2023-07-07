import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import "../../css/email/emailBody.css";
import { openSelectedMail } from "../../features/mailSlice";

export default function EmailBody({
  fromName,
  fromMail,
  subject,
  message,
  time,
}) {
  let todaysDateFromMail = new Date().toLocaleDateString("default", {
    day: "numeric",
  });
  let currentDay = new Date().toLocaleDateString("default", {
    day: "numeric",
  });
  let monthDateFromMail = new Date(time).toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  let timeFromMail = new Date(time).toLocaleTimeString();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function routeHandler() {
    dispatch(
      openSelectedMail({
        fromName,
        fromMail,
        subject,
        message,
        time,
      })
    );
    navigate("/emailDetail");
  }

  return (
    <div className="emailbody" onClick={routeHandler}>
      <div className="emailbody__left">
        <DragIndicatorOutlinedIcon className="drag-icon" />
        <IconButton>
          <CheckBoxOutlineBlankOutlinedIcon />
        </IconButton>
        <IconButton>
          <StarBorderRoundedIcon />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
        <h4>{fromName}</h4>
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <h4>{subject}</h4>
          <p>- {message}</p>
        </div>
      </div>
      <div className="emailbody__right">
        {todaysDateFromMail === currentDay ? (
          <p>{timeFromMail}</p>
        ) : (
          <p>{monthDateFromMail}</p>
        )}
      </div>
    </div>
  );
}
