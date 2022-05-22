import { useSelector } from "react-redux";
import { MovieDetailState } from "../../redux/types/movieDetailTypes";

import FavoriteMovieButton from "./FavoriteMovieButton";

import imgNotFound from "../../assets/images/image-not-found.png";

const MovieTable = () => {
  const { movieDetail } = useSelector(
    (state: MovieDetailState) => state.movieDetail
  );

  const movieRows = Object.entries(movieDetail)
    .filter(
      ([key]) =>
        key === "Actors" ||
        key === "Director" ||
        key === "Country" ||
        key === "Runtime" ||
        key === "Genre" ||
        key === "Language" ||
        key === "Released" ||
        key === "BoxOffice" ||
        key === "Plot"
    )
    .map(([key, value], id) => {
      return (
        <tr key={id}>
          <td className="movie-subtitle">{`${key}:`}</td>
          <td>{`${value}`}</td>
        </tr>
      );
    });

  return (
    <div className="movie-table">
      {movieDetail.Response === "True" && (
        <>
          <div className="movie-title">
            <h1>{movieDetail.Title}</h1>
            <FavoriteMovieButton />
          </div>
          <div className="movie-body">
            <div className="movie-img">
              <img
                src={
                  movieDetail.Poster === "N/A"
                    ? imgNotFound
                    : movieDetail.Poster
                }
                alt={movieDetail.Title}
              />
            </div>
            <table>
              <tbody>{movieRows}</tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieTable;
