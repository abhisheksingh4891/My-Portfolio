import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>Abhishek Singh</p>
      </div>
      <ul
        className={`nav-menu`}
      >
        <li
          onClick={() => setActiveMenu("home")}
          className={activeMenu === "home" ? "active" : ""}
        >
          <AnchorLink href="#home1">Home</AnchorLink>
        </li>
        <li
          onClick={() => setActiveMenu("project")}
          className={activeMenu === "project" ? "active" : ""}
        >
          <AnchorLink href="#projects1">Projects</AnchorLink>
        </li>
        <li
          onClick={() => setActiveMenu("skills")}
          className={activeMenu === "skills" ? "active" : ""}
        >
          <AnchorLink href="#skills1">Skills</AnchorLink>
        </li>
        <li
          onClick={() => setActiveMenu("exp")}
          className={activeMenu === "exp" ? "active" : ""}
        >
          <AnchorLink href="#exp1">Experience</AnchorLink>
        </li>
        <li
          onClick={() => setActiveMenu("edu")}
          className={activeMenu === "edu" ? "active" : ""}
        >
          <AnchorLink href="#edu1">Education</AnchorLink>
        </li>
        <li
          onClick={() => setActiveMenu("contact")}
          className={activeMenu === "contact" ? "active" : ""}
        >
          <AnchorLink href="#contact1">Contact</AnchorLink>
        </li>
      </ul>
      {/* <div className="nav-toggle" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <ul className={`nav-menu-mobile `}>
        <li>
          <AnchorLink href="#home1">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#projects1">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#skills1">Skills</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#exp1">Experience</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#edu1">Education</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact1">Contact</AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
