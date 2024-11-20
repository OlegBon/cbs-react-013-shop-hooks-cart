const ButtonAddToCart = ({ product, productsInCart, setProductsInCart }) => {
  const addToCart = (product) => {
    setProductsInCart([...productsInCart, product]);
  };

  return (
    <>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </>
  );
};

export default ButtonAddToCart;
