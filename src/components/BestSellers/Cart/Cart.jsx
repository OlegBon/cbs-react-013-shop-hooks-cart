import "./Cart.css";
import ButtonHome from "../../Product/ButtonHome/ButtonHome";
import { useState } from "react";

const Cart = ({ productsInCart, setProductsInCart }) => {
  // Рахуємо суму
  const totalPrice = productsInCart.reduce(
    (total, product) => total + product.price,
    0
  );

  let [buyProductsEnd, setBuyProductsEnd] = useState("");

  const clearCart = () => {
    setProductsInCart([]);
  };

  const buyProducts = () => {
    setBuyProductsEnd("Congratulations!");
  };

  return (
    <>
      <ButtonHome />
      <h1>Cart</h1>
      <table className="table-cart">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productsInCart.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td className="td-left">{product.title}</td>
              <td>{product.price} $</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="sum">Total: {totalPrice} $</p>
      <p className="Congrat">{buyProductsEnd}</p>
      <button className="Cleare" onClick={clearCart}>
        Cleare
      </button>
      <button className="Buy" onClick={buyProducts}>
        Buy
      </button>
    </>
  );
};

export default Cart;
