import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="contact-icon"
      data-aos = "zoom-in-up"
      data-aos-duration = "1000"
      >
        <a href="https://www.instagram.com/bhavymistry._.16/" target="_blank" className="items">
          <FaInstagram className="icons"/>
        </a>
        <a href="https://www.facebook.com/bhavymistry.16" target="_blank" className="items">
          <FaFacebookSquare className="icons"/>
        </a>
        <a href="https://www.github.com/bhavya751" target="_blank" className="items">
          <FaGithub className="icons"/>
        </a>
        <a href="https://mail.google.com/" target="_blank" className="items">
          <BiLogoGmail className="icons"/>
        </a>
        
      </div>
    </div>
    </>
  )
}

export default Contact