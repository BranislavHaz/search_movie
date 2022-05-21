import { call, put, all } from "redux-saga/effects";
import { setMoviesList, setTotalResults } from "../../slices/moviesListSlice";
import { getMovies } from "../requests/moviesListRequest";
import { ResponseGenerator } from "../../types/globalTypes";
import {
  FetchMoviesList,
  MoviesListElement,
} from "../../types/moviesListTypes";

export function* fetchMoviesList({ payload }: FetchMoviesList) {
  try {
    const response: ResponseGenerator = yield call(getMovies, payload);
    const { data } = response;

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
