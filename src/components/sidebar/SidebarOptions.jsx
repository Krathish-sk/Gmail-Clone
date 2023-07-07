import React from "react";
import "../../css/sidebar/sidebaroptions.css";

function SidebarOptions({ Icon, title, number, isActive, defaultBackground }) {
  return (
    <div
      className={`sidebarOptions ${isActive && "sidebarOptions--active"} ${
        defaultBackground && "sidebarOptions--defaultBackground"
      }`}
    >
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOptions;
