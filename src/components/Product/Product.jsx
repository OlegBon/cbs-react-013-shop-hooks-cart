import "./Product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews/Reviews";
import ButtonHome from "./ButtonHome/ButtonHome";
import ButtonAddToCart from "../BestSellers/ButtonAddToCart/ButtonAddToCart";
import CartLogo from "../BestSellers/CartLogo/CartLogo";

const Product = ({ productsInCart, setProductsInCart }) => {
  let [product, setProduct] = useState({});
  let { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <>
      <CartLogo />
      <ButtonHome />

      <div className="Product">
        <img src={product.image} alt={product.title} />
        <div className="container">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>Category: {product.category}</h2>
          <p>
            Price: {product.price} ${" "}
            <ButtonAddToCart
              product={product}
              productsInCart={productsInCart}
              setProductsInCart={setProductsInCart}
            />
          </p>
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default Product;
