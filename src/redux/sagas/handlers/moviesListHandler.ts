import { call, put, all } from "redux-saga/effects";
import { setMoviesList, setTotalResults } from "../../slices/moviesListSlice";
import { getMovies } from "../requests/moviesListRequest";
import {
  FetchMoviesList,
  MoviesListElement,
  MoviesList,
} from "../../types/moviesListTypes";

export function* fetchMoviesList({ payload }: FetchMoviesList) {
  try {
    const data: MoviesList = yield call(getMovies, payload);
    const moviesList: MoviesListElement[] = data.Search;
    const totalResults: number = Number(data.totalResults);

    yield all([
      put(setMoviesList(moviesList)),
      put(setTotalResults(totalResults)),
    ]);
  } catch (error) {
    // Only for testing, delete before build
    console.log(error);
  }
}
