import BackToHomepage from "../components/movieDetail/BackToHomepage";
import notFoundImg from "../assets/images/404.png";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img src={notFoundImg} alt="Page not found" />
      <BackToHomepage />
    </div>
  );
};

export default PageNotFound;
