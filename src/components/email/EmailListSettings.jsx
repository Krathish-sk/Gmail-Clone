import React from "react";

import { IconButton } from "@material-ui/core";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import "../../css/email/emailListSettings.css";

function EmailListSettings({ totalMails }) {
  return (
    <div className="emailList__settings">
      <div className="emailList__settingsLeft">
        <div className="emailList__settingsCheckbox">
          <IconButton>
            <CheckBoxOutlineBlankOutlinedIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowDownOutlinedIcon />
          </IconButton>
        </div>
        <IconButton>
          <a href="/">
            <RefreshOutlinedIcon />
          </a>
        </IconButton>
        <IconButton>
          <MoreVertOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailList__settingsRight">
        <p>1-50 of {totalMails}</p>
        <IconButton>
          <ChevronLeftOutlinedIcon />
        </IconButton>
        <IconButton>
          <ChevronRightOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default EmailListSettings;
