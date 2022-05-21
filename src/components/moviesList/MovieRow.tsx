import { useNavigate } from "react-router-dom";
import { MoviesListElement } from "../../redux/types/moviesListTypes";

import imageNotFound from "../../assets/images/image-not-found.png";

const MovieRow = ({ movie }: { movie: MoviesListElement }) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;
    navigate(`/movie/${id}`);
  };

  return (
    <tr id={movie.imdbID} className="list-movies-row" onClick={handleClick}>
      <td>
        <div className="list-img-wrapper">
          <img
            src={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
            alt={movie.Title}
          />
        </div>
      </td>
      <td>
        <h3>{movie.Title}</h3>
        <span className="list-movie-year">{movie.Year}</span>
      </td>
    </tr>
  );
};

export default MovieRow;
