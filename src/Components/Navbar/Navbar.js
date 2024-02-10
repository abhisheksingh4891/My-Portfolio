import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <p>Abhishek Singh</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("home")}}><AnchorLink href='#home'>Home</AnchorLink>{menu==="home"?<theme/>:<></>}</li>
            <li onClick={()=>{setMenu("project")}}><AnchorLink href='#projects'>Projects</AnchorLink>{menu==="project"?<theme/>:<></>}</li>
            <li onClick={()=>{setMenu("skills")}}><AnchorLink href='#skills'>Skills</AnchorLink>{menu==="skills"?<theme/>:<></>}</li>
            <li onClick={()=>{setMenu("exp")}}><AnchorLink href='#experience'>Experience</AnchorLink>{menu==="exp"?<theme/>:<></>}</li>
            <li onClick={()=>{setMenu("edu")}}><AnchorLink href='#education'>Education</AnchorLink>{menu==="edu"?<theme/>:<></>}</li>
            <li onClick={()=>{setMenu("contact")}}><AnchorLink href='#contact'>Contact</AnchorLink>{menu==="contact"?<theme/>:<></>}</li>
        </ul>
    </div>
  )
}

export default Navbar