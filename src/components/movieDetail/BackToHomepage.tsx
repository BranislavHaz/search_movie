import { useNavigate } from "react-router-dom";

const BackToHomepage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button className="btn back-home-btn" onClick={handleClick}>
      Back to homepage
    </button>
  );
};

export default BackToHomepage;
