import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faTable,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="App">
        <div className="page">
          <div className="content p-0">
            <Header />
          </div>

          <div className={`sidebar${isOpen ? " sidebar--open" : ""}`}>
            <div className="trigger" onClick={handleTrigger}>
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <Link to={"/"}>
              <div className="sidebar-position">
                <FontAwesomeIcon icon={faTable} />
                <span>Employee Table</span>
              </div>
            </Link>

            <Link to={"/leave"}>
              <div className="sidebar-position">
                <FontAwesomeIcon icon={faList} />
                <span>Leave</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
