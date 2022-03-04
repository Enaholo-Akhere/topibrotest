import React, { useState } from "react";
import Classes from "./navbar.module.css";
import { NavLink, Link } from "react-router-dom";
import { CgClose, CgMenuMotion } from "react-icons/cg";

const NavBar = () => {
  const [isUnderline, setIsUnderLine] = useState(false);
  const [isUnderLineProject, setIsUnderLineProject] = useState(false);
  const [isUnderLineContact, setIsUnderLineContact] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const isActiveStyle = {
    textDecoration: "none",
    color: "red",
    transition: "0.5s all ease-in-out",
    borderBottom: "10px",
    borderBottomColor: "red",
  };
  return (
    <React.Fragment>
      <header className={Classes.header}>
        <div className={Classes.logo}>
          <div className={Classes.logo_name}>
            <div className={Classes.header_logo}>
              <Link to="/">
                <div>T</div>
              </Link>
            </div>
            <div className={Classes.opibro}>
              <Link to="/">
                <h1>OPIBRO TEST</h1>
              </Link>
            </div>
          </div>
          <div className={Classes.menu}>
            {showNavBar ? (
              <CgClose
                className={Classes.open_menu}
                onClick={() => setShowNavBar((prev) => !prev)}
              />
            ) : (
              <CgMenuMotion
                className={Classes.open_menu}
                onClick={() => setShowNavBar((prev) => !prev)}
              />
            )}
          </div>
        </div>

        <nav
          className={
            showNavBar
              ? Classes.navs
              : [Classes.navs, Classes.close_menu].join(" ")
          }
        >
          <ul>
            <li
              onClick={() => setShowNavBar(false)}
              style={{
                borderBottom: "5px",
                borderWidth: "fit-to-length",
              }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => {
                  if (isActive) {
                    setIsUnderLine(true);
                    setIsUnderLineProject(false);
                    setIsUnderLineContact(false);
                    return isActiveStyle;
                  }
                }}
              >
                Home
              </NavLink>
              {isUnderline && <hr />}
            </li>
            <li>
              <NavLink
                to="/Characterscreen"
                onClick={() => setShowNavBar(false)}
                style={({ isActive }) => {
                  if (isActive) {
                    setIsUnderLine(false);
                    setIsUnderLineProject(true);
                    setIsUnderLineContact(false);
                    return isActiveStyle;
                  }
                }}
              >
                Characters
              </NavLink>
              {isUnderLineProject && <hr />}
            </li>
            <li>
              <NavLink
                to="/episodescreen"
                onClick={() => setShowNavBar(false)}
                style={({ isActive }) => {
                  if (isActive) {
                    setIsUnderLine(false);
                    setIsUnderLineProject(false);
                    setIsUnderLineContact(true);
                    return isActiveStyle;
                  }
                }}
              >
                Episodes
              </NavLink>
              {isUnderLineContact && <hr />}
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default NavBar;
