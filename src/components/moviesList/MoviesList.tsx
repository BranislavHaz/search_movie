import {
  MoviesListElement,
  MoviesListProps,
} from "../../redux/types/moviesListTypes";
import MovieRow from "./MovieRow";

const MoviesList = ({ movies }: MoviesListProps) => {
  const movieList =
    movies instanceof Array &&
    movies?.map((movie: MoviesListElement, id: number) => (
      <MovieRow key={id} movie={movie} />
    ));

  return (
    <table className="list-movies-table">
      <tbody>{movieList}</tbody>
    </table>
  );
};

export default MoviesList;
