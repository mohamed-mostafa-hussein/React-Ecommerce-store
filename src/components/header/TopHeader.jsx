//import React from 'react'   // ده تحذير مش ايرور ممكن مستخدمهاش خالص

import { Link } from "react-router-dom";
import Logo from "../../img/logo2.png";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

function TopHeader() {
  const {cartItems, favourites} = useContext(CartContext)
  return (
    <div className="top_header">
      <div className="container">
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <SearchBox />
        <div className="header_icons">
          <div className="icon">
            <Link to="/favourites">
              <FaRegHeart />
              <span className="count">{favourites.length}</span>
            </Link>
          </div>
          <div className="icon">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
