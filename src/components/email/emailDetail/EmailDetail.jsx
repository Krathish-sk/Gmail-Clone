import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectedMail } from "../../../features/mailSlice";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import TurnLeftOutlinedIcon from "@mui/icons-material/TurnLeftOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import "../../../css/emailDetail/emailDetail.css";
import { deleteMailFromFirebase } from "../../../database/database";

function EmailDetail() {
  const currentMail = useSelector(selectedMail);
  const navigate = useNavigate();
  const { emailId, fromName, fromMail, message, subject, time } = currentMail;
  return (
    <div className="emailDetail">
      <div className="emailHeader">
        <div className="emailHeaderContent">
          <IconButton
            className="backArrow"
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <div className="emailHeader__columnOne">
            <IconButton>
              <ArchiveOutlinedIcon />
            </IconButton>
            <IconButton>
              <ReportGmailerrorredOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                console.log("Clicked");
                deleteMailFromFirebase("eamils", emailId);
              }}
            >
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
          <div className="emailHeader__columnTwo">
            <IconButton>
              <EmailOutlinedIcon />
            </IconButton>
            <IconButton>
              <AccessTimeOutlinedIcon />
            </IconButton>
            <IconButton>
              <AddTaskOutlinedIcon />
            </IconButton>
          </div>
          <div className="emailHeader__columnThree">
            <IconButton>
              <DriveFileMoveOutlinedIcon />
            </IconButton>
            <IconButton>
              <LabelOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailHeader__mailCount">
          <p> 1 of 160 </p>
          <IconButton>
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailBody">
        <div className="emailBody__headerOne">
          <h4>{subject}</h4>
          <div className="emailBody__headerOneIcons">
            <IconButton>
              <LocalPrintshopOutlinedIcon />
            </IconButton>
            <IconButton>
              <LaunchOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="emailBody__headerTwo">
          <div className="headerTwo__content">
            <div className="content__profileImage">
              <Avatar
                alt="Mail user logo"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div className="headerTwo__mailInfo">
              <div className="contentOne">
                <div className="userDetails">
                  <span>{fromName}</span>
                  <p>{`<${fromMail}>`}</p>
                  <button>Unsubscribe</button>
                </div>
                <div className="otherInfo">
                  <p>{time}</p>
                  <IconButton>
                    <StarBorderOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <TurnLeftOutlinedIcon />
                  </IconButton>
                  <IconButton>
                    <MoreVertOutlinedIcon />
                  </IconButton>
                </div>
              </div>
              <div className="contentTwo">
                <p>to me</p>
                <IconButton>
                  <ArrowDropDownOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <div className="emailBody__content">{message}</div>
      </div>
    </div>
  );
}

export default EmailDetail;
