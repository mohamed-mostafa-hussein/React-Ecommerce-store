// import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebookF,FaLinkedinIn   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import "./footer.css"
function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="contact">
                <div className="box">
                    <div className="icon"><FaLocationDot /></div>
                    <p>Cairo, Egypt</p>
                </div>
                <div className="box">
                    <div className="icon"><FaPhoneAlt /></div>
                    <p>+20 102 0993 869</p>
                </div>
                <div className="box">
                    <div className="icon"><MdEmail /></div>
                    <span>mohamedmostafahussein442@gmail.com</span>
                </div>
            </div>
            <div className="information">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ex accusantium perferendis quisquam cumque ad eius nisi! Voluptas, ipsam fuga.</p>
                <div className="icons">
                    <div className="icon"><FaFacebookF /></div>
                    <div className="icon"><FaLinkedinIn  /></div>
                    <div className="icon"><FiGithub /></div>                    
                </div>
            </div>
        </div>
        <p className="copy_right">Copyrights &copy; 2026; Designed By:<span>Barakat</span></p>
    </div>
  )
}

export default Footer