import "./CartLogo.css";
import { useNavigate } from "react-router-dom";
import cartLogo from "../../../assets/shopping-cart.png";

const CartLogo = () => {
  let navigate = useNavigate();

  const goCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="Cart">
        <img
          className="img-cart"
          src={cartLogo}
          alt="Shop Cart"
          onClick={goCart}
        />
      </div>
    </>
  );
};

export default CartLogo;
