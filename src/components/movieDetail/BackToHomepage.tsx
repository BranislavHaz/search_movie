import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../../redux/slices/movieDetailSlice";
import { MovieDetail } from "../../redux/types/movieDetailTypes";

const BackToHomepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/");
    dispatch(setMovieDetail({} as MovieDetail));
  };

  return (
    <button className="btn back-home-btn" onClick={handleClick}>
      Back to homepage
    </button>
  );
};

export default BackToHomepage;
