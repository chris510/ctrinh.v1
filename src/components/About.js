import React from "react"
import ChrisPicture from '../images/profile_pic.jpg'
 
const About = () => {
  return (
    <div className="about-container">
      <div className="profile-img-container">
        <img src={ChrisPicture} alt="Chris Trinh" className='profile-img' />
      </div>
    </div>
  )
}
 
export default About;