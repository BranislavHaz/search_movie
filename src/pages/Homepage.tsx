import { useSelector } from "react-redux";
import { MoviesListState } from "../redux/types/moviesListTypes";

import SearchBar from "../components/moviesList/SearchBar";
import MoviesList from "../components/moviesList/MoviesList";
import PaginationBar from "../components/moviesList/PaginationBar";
import MoviesNotFound from "../components/global/MoviesNotFound";

const Homepage = () => {
  const { moviesList, searchQuery } = useSelector(
    (state: MoviesListState) => state.moviesList
  );

  const checkIsAvailable = () => {
    if (moviesList) {
      if (searchQuery?.length === 0) {
        return <MoviesNotFound type="find-movie" />;
      }
      return (
        <>
          <MoviesList movies={moviesList} />
          <PaginationBar />
        </>
      );
    } else {
      return <MoviesNotFound type="movies-list" />;
    }
  };

  return (
    <div className="homepage">
      <>
        <SearchBar />
        {checkIsAvailable()}
      </>
    </div>
  );
};

export default Homepage;
