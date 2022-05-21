import emptyMovie from "../../assets/images/empty-movie.png";
import notFound from "../../assets/images/movie-not-found.png";
import movieReel from "../../assets/images/movie-reel.png";

const MoviesNotFound = ({ type }: { type: string }) => {
  const getText = () => {
    switch (type) {
      case "movie-detail":
        return (
          <>
            <img className="empty-img" src={emptyMovie} alt="Empty" />
            <div className="empty-text">
              Are you sure you are looking for this movie?
            </div>
          </>
        );

      case "movies-list":
        return (
          <>
            <img className="empty-img" src={notFound} alt="Empty" />
            <div className="empty-text">
              I didn't find this movie. Please try search again.
            </div>
          </>
        );

      case "find-movie":
        return (
          <>
            <img className="empty-img" src={movieReel} alt="Empty" />
            <div className="empty-text">What movie should I find you?</div>
          </>
        );

      default:
        break;
    }
  };

  return <>{getText()}</>;
};

export default MoviesNotFound;
