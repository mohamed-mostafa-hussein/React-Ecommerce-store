// import React from 'react'
import { useContext } from "react";
import { FaStarHalfAlt, FaStar, FaRegHeart, FaShare } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../components/context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function ProductInfo({ product }) {
    const navigate = useNavigate()
    const {cartItems, addToCart, addToFav, favourites, removeFromFav} = useContext(CartContext)
    const isInCart = cartItems.some(i => i.id ===product.id)

    const handleAddToCart = () => {
    addToCart(product)
    toast.success(
      <div className="toast_wrapper">
        <img className="toast_img" src={product.images[0]} alt="" />
        <div className="toast_content">
          <strong>{product.title}</strong>
          added to cart
          <div>
            <button className="btn" onClick={()=> navigate("/cart")}>View Cart</button>
          </div>
        </div>
      </div>
      ,{duration: 3500}
    )
  }
const isInFav = favourites.some(i => i.id ===product.id)
  const handleAddToFav = () => {
    if(isInFav) {
      removeFromFav(product.id)
      toast.error(`${product.title} removed from favourites`)
    } else {
      addToFav(product)
      toast.success(`${product.title} added to favourites`)
    }
    
  }

  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div> 
      <p className="price">$ {product.price}</p>
      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5 className="stock">
        <span>Harry up! Only {product.stock} Products Left In Stock.</span>
      </h5>
      <div className="last_media">
        <button className={`btn ${isInCart ? "in-cart" : ""}`} onClick={handleAddToCart}>
        {isInCart? "item in cart" : "Add to cart"} <TiShoppingCart />
      </button>
      <div className="icons">
        <span className={`${isInFav ? "in_fav" : ""}`} onClick={handleAddToFav}>
          <FaRegHeart />{" "}
        </span>
        <span>
          <FaShare />{" "}
        </span>
      </div>
      </div>
    </div>
  );
}

export default ProductInfo;
