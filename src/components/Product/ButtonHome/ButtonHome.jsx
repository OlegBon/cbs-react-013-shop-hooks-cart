import { useNavigate } from "react-router-dom";

const ButtonHome = () => {
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <button className="btn-home" onClick={goHome}>
      Back
    </button>
  );
};

export default ButtonHome;
