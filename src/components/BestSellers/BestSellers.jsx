import { useState, useEffect } from "react";
import "./BestSellers.css";
import BestSellersItem from "./BestSellersItem/BestSellersItem";
import CartLogo from "./CartLogo/CartLogo";

const BestSellers = ({ productsInCart, setProductsInCart }) => {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <CartLogo />
      <div className="BestSellers">
        {products.map((product) => (
          <BestSellersItem
            product={product}
            key={product.id}
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
          />
        ))}
      </div>
    </>
  );
};

export default BestSellers;
