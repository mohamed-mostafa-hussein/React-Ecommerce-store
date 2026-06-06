// import React from "react";
import { useContext } from "react";
import {
  FaStarHalfAlt,
  FaStar,
  FaCartArrowDown,
  FaRegHeart,
  FaShare,
  FaCheck ,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";

function Product({ item }) {
  const navigate = useNavigate()
  const {cartItems, addToCart, addToFav, favourites, removeFromFav} = useContext(CartContext)
  const isInCart = cartItems.some(i => i.id ===item.id)
  const isInFav = favourites.some(i => i.id ===item.id)


  const handleAddToCart = () => {
    addToCart(item)
    toast.success(
      <div className="toast_wrapper">
        <img className="toast_img" src={item.images[0]} alt="" />
        <div className="toast_content">
          <strong>{item.title}</strong>
          added to cart
          <div>
            <button className="btn" onClick={()=> navigate("/cart")}>View Cart</button>
          </div>
        </div>
      </div>
      ,{duration: 3500}
    )
  }

  const handleAddToFav = () => {
    if(isInFav) {
      removeFromFav(item.id)
      toast.error(`${item.title} removed from favourites`)
    } else {
      addToFav(item)
      toast.success(`${item.title} added to favourites`)
    }
    
  }


  return (
    <div className={`product ${isInCart ? "in-cart" : ""}`}>
      <Link to={`/products/${item.id}`}>
      <span className="status_cart"><FaCheck /> in cart</span>
        <div className="img_product">
          <img src={item.images[0]} alt="" />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <p className="price">
          <span>$ {item.price}</span>
        </p>
      </Link>

      <div className="icons">
        <span className="btn_cart" onClick={handleAddToCart}>
          <FaCartArrowDown />{" "}
        </span>
        <span className={`${isInFav ? "in_fav" : ""}`} onClick={handleAddToFav}>
          <FaRegHeart />{" "}
        </span>
        <span>
          <FaShare />{" "}
        </span>
      </div>
    </div>
  );
}

export default Product;
