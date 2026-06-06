import  { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {
  // favourites
  const [favourites, setFavourites] = useState(()=> {
    const savedFav = localStorage.getItem("favourites");
    return savedFav ? JSON.parse(savedFav) : []
  });
  const addToFav = (item) => {
    setFavourites((prev) => {
      if(prev.some((i)=> i.id === item.id)) return prev;
      return [...prev, item]
    })
  }
  useEffect(()=>{
    localStorage.setItem("favourites", JSON.stringify(favourites))
  }, [favourites])
  const removeFromFav = (id) => {
    setFavourites((prev) => prev.filter((i) => i.id !== id))
  }
  
  
  
  
  
  
  
  
  
  
  
  
  // cart
  const [cartItems, setCartItems] = useState(()=> {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : []
  })

  const increaseQuantity = (id) => {
    setCartItems(prevItems => prevItems.map(item => 
      item.id === id ? {...item, quantity: item.quantity + 1} : item
    ))
  } 

  const decreaseQuantity = (id) => {
    setCartItems(prevItems => prevItems.map(item => 
      item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item
    ))
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }
  const addToCart = ((item) => {
    setCartItems((prevItems) => [...prevItems, {...item, quantity:1}])
  })
  useEffect(()=> {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])
  return (
    <CartContext.Provider value={{cartItems, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, addToFav, favourites, removeFromFav}}>
      {children}
    </CartContext.Provider>
  )
}
