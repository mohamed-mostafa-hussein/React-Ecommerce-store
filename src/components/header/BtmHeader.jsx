//import React from 'react'   // ده تحذير مش ايرور ممكن مستخدمهاش خالص
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import Home from "../../pages/home/Home";
const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: {Home} },
  { title: "Accessories", link: {Home} },
  { title: "Blog", link: {Home} },
  { title: "Contact", link:{Footer} },
];

function BtmHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCtegoryOpen, setIsCtegoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setIsCtegoryOpen(false);
    setIsMenuOpen(false);
  }, [location]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="btm_header">
        <div className="container">
          <nav className="nav">
            <div ref={menuRef}>
              <div
                className="mobile_menu_btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <IoMdMenu />
              </div>
              <div className={`mobile_sidebar ${isMenuOpen ? "active" : ""}`}>
                {NavLinks.map((item) => (
                  <Link key={item.link} to={item.link}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="category_nav">
              <div
                className="category_btn"
                onClick={() => setIsCtegoryOpen(!isCtegoryOpen)}
              >
                <IoMdMenu />
                <p>Browse Category</p>
                <IoMdArrowDropdown />
              </div>
              <div
                className={`category_nav_list ${isCtegoryOpen ? "active" : ""}`}
              >
                {categories.map((category) => (
                  <Link key={category.slug} to={`category/${category.slug}`}>
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className={"nav_links"}>
              {NavLinks.map((itme) => (
                <li
                  key={itme.link}
                  className={location.pathname === itme.link ? "active" : ""}
                >
                  <Link to={itme.link}>{itme.title} </Link>
                </li>
              ))}
            </div>
          </nav>
          <div className="sign_regs_icon">
            <Link to="/">
              <PiSignInBold />
            </Link>
            <Link to="/">
              <FaUserPlus />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
