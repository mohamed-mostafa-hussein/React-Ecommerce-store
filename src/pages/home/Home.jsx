// import React from 'react'
import { useEffect, useState } from "react";
import HeroSlide from "../../components/HeroSlide";
import SlideProduct from "../../components/slideProducts/SlideProduct";
import "../home/home.css";
import ProductDetailsLoading from "../productDetails/ProductDetailsLoading";
import PageTransition from "../../components/PageTransition";
import Footer from "../../components/footer/Footer";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "mens-watches",
  "tablets",
  "sports-accessories",
  "sunglasses",
  "mens-shirts"
];
function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );
        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Error Fetching", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <PageTransition>
      <div>
        <HeroSlide />
        {loading ? (
          <ProductDetailsLoading />
        ) : (
          categories.map((category) => (
            <SlideProduct
              key={category}
              data={products[category]}
              title={category.replace("-", " ")}
            />
          ))
        )}
        <Footer />
      </div>
    </PageTransition>
  );
}

export default Home;
