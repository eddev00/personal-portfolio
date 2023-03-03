import React from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className=" w-full  flex justify-between items-center px-4 text-white h-[80px] font-tetra">
      {/** Logo */}
      <div>
        <img src={logo}></img>
      </div>
      {/** Main menu */}
      <div >
        <ul className="flex">
          <li>About me</li>
          <li>Education</li>
          <li>Projects</li>
        </ul>
      </div>
      {/** Contact */}
      <div>Contact</div>
    </div>
    </div>
  )
}

export default Navbar