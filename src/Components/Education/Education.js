import React from 'react'
import '../Education/Education.css'
import logo from '../Education/logo.png'
const Education = () => {
  return (
    <div className='edu' id='education'>
      <div className='paraa'>
        <p>My Education</p>
      </div>
      <div className='boxii'>
        <img src={logo} alt='logo'/>
        <div className='listt'>
          <ul>
            <li><b>Bachelor of Engineering</b></li>
            <li>Chandigarh University</li>
            <li>Graduation in 2024</li>
            <li>CGPA 8.02/10</li>
          </ul>
          <ol className='circle'>
            <li typeof='bullet'>Major in Computer Science</li>
            <li>Major in Software Development</li>
            <li>Major in Frontend Development</li>
            {/* <li></li> */}
          </ol>
        </div>
      </div>
      <div className='vertica'></div>
    </div>
  )
}

export default Education