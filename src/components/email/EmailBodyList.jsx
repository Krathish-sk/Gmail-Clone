import React from "react";
import Loading from "../../utils/Loading";
import EmailBody from "./EmailBody";
import "../../css/email/emailBodyList.css";
export default function EmailBodyList({ emails }) {
  let renderEmailBody;

  if (!emails) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  if (emails.length === 0) {
    return <div className="loading">No mails till now !!!</div>;
  }

  console.log("Emails", emails);

  if (emails) {
    renderEmailBody = emails?.map((email) => (
      <EmailBody
        key={email.id}
        emailId={email.id}
        fromName={email.fromName}
        fromMail={email.fromMail}
        subject={email.subject}
        message={email.message}
        time={email.timeStamp}
      />
    ));
  }

  return <div>{renderEmailBody}</div>;
}
