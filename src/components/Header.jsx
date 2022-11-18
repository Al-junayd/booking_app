import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const header = "";

const Header = () => {
  return (
    <div className={header}>
      <FontAwesomeIcon icon={faBed} />
    </div>
  );
};

export default Header;
