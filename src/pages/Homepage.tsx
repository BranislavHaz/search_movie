import { useSelector, useDispatch } from "react-redux";
import { setIsLoading } from "../redux/slices/moviesListSlice";
import { MoviesListState } from "../redux/types/moviesListTypes";

import SearchBar from "../components/moviesList/SearchBar";
import MoviesList from "../components/moviesList/MoviesList";
import PaginationBar from "../components/moviesList/PaginationBar";
import MoviesNotFound from "../components/layout/MoviesNotFound";
import LoadingSpinner from "../components/layout/LoadingSpinner";
import { useEffect } from "react";

const Homepage = () => {
  const { moviesList, searchQuery, isLoading } = useSelector(
    (state: MoviesListState) => state.moviesList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    moviesList && dispatch(setIsLoading(false));
  }, [moviesList]);

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
        {isLoading && <LoadingSpinner />}
        {checkIsAvailable()}
      </>
    </div>
  );
};

export default Homepage;
