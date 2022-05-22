import { call, put } from "redux-saga/effects";
import { setMovieDetail } from "../../slices/movieDetailSlice";
import { getMovie } from "../requests/movieDetailRequest";
import { FetchMovieDetail, MovieDetail } from "../../types/movieDetailTypes";

export function* fetchMovieDetail({ payload }: FetchMovieDetail) {
  try {
    const data: MovieDetail = yield call(getMovie, payload.movieId);
    yield put(setMovieDetail(data));
  } catch (error) {
    // Only for testing, delete before build
    console.log(error);
  }
}
