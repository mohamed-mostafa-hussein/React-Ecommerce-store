// import React from 'react'

import { useContext } from "react"
import { CartContext } from "../../components/context/CartContext"
import PageTransition from "../../components/PageTransition"
import Product from "../../components/slideProducts/Product"
import Footer from "../../components/footer/Footer"

function Favourites() {
    const {favourites} = useContext(CartContext)

  return (
    <PageTransition>
        <div className="ctegoty_products favourites">
            <div className="container">
                <div className="top_slide">
                    <h2>Your favourites</h2>
                </div>
                {favourites.length === 0 ? (
                    <p>No Favourites Products Yet</p>
                ) : (
                    <div className="products">
                        {favourites.map((item) => (
                        <Product item={item} key={item.id} />
                     ))}
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </PageTransition>
  )
}

export default Favourites