import React, { useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Define the positions of each section ID
      const homeSection = document.getElementById("home1").offsetTop;
      const projectSection = document.getElementById("projects1").offsetTop;
      const skillsSection = document.getElementById("skills1").offsetTop;
      const expSection = document.getElementById("exp1").offsetTop;
      const eduSection = document.getElementById("edu1").offsetTop;
      const contactSection = document.getElementById("contact1").offsetTop;

      // Determine which section is in the view
      if (scrollPosition >= homeSection && scrollPosition < projectSection) {
        setActiveMenu("home");
      } else if (
        scrollPosition >= projectSection &&
        scrollPosition < skillsSection
      ) {
        setActiveMenu("project");
      } else if (
        scrollPosition >= skillsSection &&
        scrollPosition < expSection
      ) {
        setActiveMenu("skills");
      } else if (scrollPosition >= expSection && scrollPosition < eduSection) {
        setActiveMenu("exp");
      } else if (
        scrollPosition >= eduSection &&
        scrollPosition < contactSection
      ) {
        setActiveMenu("edu");
      } else if (scrollPosition >= contactSection) {
        setActiveMenu("contact");
      }
    };

    // Add event listener for scrolling
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>Abhishek Singh</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setActiveMenu("home")}>
          <AnchorLink href="#home1">Home</AnchorLink>
          {activeMenu === "home" ? <theme /> : <></>}
        </li>
        <li onClick={() => setActiveMenu("project")}>
          <AnchorLink href="#projects1">Projects</AnchorLink>
          {activeMenu === "project" ? <theme /> : ""}
        </li>
        <li onClick={() => setActiveMenu("skills")}>
          <AnchorLink href="#skills1">Skills</AnchorLink>
          {activeMenu === "skills" ? <theme /> : ""}
        </li>
        <li onClick={() => setActiveMenu("exp")}>
          <AnchorLink href="#exp1">Experience</AnchorLink>
          {activeMenu === "exp" ? <theme /> : ""}
        </li>
        <li onClick={() => setActiveMenu("edu")}>
          <AnchorLink href="#edu1">Education</AnchorLink>
          {activeMenu === "edu" ? <theme /> : ""}
        </li>
        <li onClick={() => setActiveMenu("contact")}>
          <AnchorLink href="#contact1">Contact</AnchorLink>
          {activeMenu === "contact" ? <theme /> : ""}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
