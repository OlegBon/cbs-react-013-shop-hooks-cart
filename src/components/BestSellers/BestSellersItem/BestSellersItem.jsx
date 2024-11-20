import ButtonAddToCart from "../ButtonAddToCart/ButtonAddToCart";
import "./BestSellersItem.css";
import { useNavigate } from "react-router-dom";

const BestSellersItem = ({ product, productsInCart, setProductsInCart }) => {
  let navigate = useNavigate();

  const showMoreHandler = () => {
    navigate(`/product/${product.id}`);
  };

  // const addToCart = (product) => {
  //   setProductsInCart([...productsInCart, product]);
  // };

  return (
    <div className="BestSellersItem">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price} $</p>
      <button onClick={showMoreHandler}>Show more...</button>
      {/* <button onClick={() => addToCart(product)}>Add to Cart</button> */}
      <ButtonAddToCart
        product={product}
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
      />
    </div>
  );
};

export default BestSellersItem;
