import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieDetail,
  setMovieDetail,
} from "../redux/slices/movieDetailSlice";
import { MovieDetailState, MovieDetail } from "../redux/types/movieDetailTypes";

import BackToHomepage from "../components/movieDetail/BackToHomepage";
import MovieTable from "../components/movieDetail/MovieTable";
import MoviesNotFound from "../components/global/MoviesNotFound";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail } = useSelector(
    (state: MovieDetailState) => state.movieDetail
  );

  useEffect(() => {
    dispatch(setMovieDetail({} as MovieDetail));
    id && dispatch(getMovieDetail({ movieId: id }));
  }, [dispatch, id]);

  const checkAvailability = () => {
    return (
      movieDetail.Response === "False" && <MoviesNotFound type="movie-detail" />
    );
  };

  return (
    <div className="detail-movie">
      {checkAvailability()}
      <MovieTable />
      <BackToHomepage />
    </div>
  );
};

export default Detail;
