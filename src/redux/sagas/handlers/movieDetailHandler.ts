import { call, put } from "redux-saga/effects";
import { setMovieDetail } from "../../slices/movieDetailSlice";
import { getMovie } from "../requests/movieDetailRequest";
import { ResponseGenerator } from "../../types/globalTypes";
import { FetchMovieDetail } from "../../types/movieDetailTypes";

export function* fetchMovieDetail({ payload }: FetchMovieDetail) {
  try {
    const response: ResponseGenerator = yield call(getMovie, payload.movieId);
    const { data } = response;
    yield put(setMovieDetail(data));
  } catch (error) {
    // Only for testing, delete before build
    console.log(error);
  }
}
