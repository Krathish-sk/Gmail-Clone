import React from "react";

import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import "../../css/email/emailType.css";

function EmailType() {
  return (
    <div className="emailType">
      <div className="emailType__options emailType__options--active">
        <InboxRoundedIcon />
        <p>Primary</p>
      </div>
      <div className="emailType__options">
        <LocalOfferOutlinedIcon />
        <p>Promotions</p>
      </div>
      <div className="emailType__options">
        <PeopleOutlineOutlinedIcon />
        <p>Socials</p>
      </div>
    </div>
  );
}

export default EmailType;
