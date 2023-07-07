import React, { useEffect, useState } from "react";
import { fetchDataFromFirebase } from "../../database/database";
import EmailListSettings from "./EmailListSettings";
import EmailType from "./EmailType";
import EmailBodyList from "./EmailBodyList";
import "../../css/email/emailList.css";

function EmailList() {
  const [emails, setEmails] = useState("");

  const getEmails = async () => {
    await fetchDataFromFirebase("emails").then((data) => setEmails(data));
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <div className="emailList">
      <EmailListSettings totalMails={emails.length} />
      <EmailType />
      <EmailBodyList emails={emails} />
    </div>
  );
}

export default EmailList;
