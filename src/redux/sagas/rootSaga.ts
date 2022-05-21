import { all, fork, takeEvery, takeLatest } from "redux-saga/effects";
import { getMoviesList } from "../slices/moviesListSlice";
import { getMovieDetail } from "../slices/movieDetailSlice";
import { fetchMoviesList } from "./handlers/moviesListHandler";
import { fetchMovieDetail } from "./handlers/movieDetailHandler";

function* moviesListSaga() {
  yield takeLatest(getMoviesList.type, fetchMoviesList);
}

function* movieDetailSaga() {
  yield takeEvery(getMovieDetail.type, fetchMovieDetail);
}

export default function* rootSaga() {
  yield all([fork(moviesListSaga), fork(movieDetailSaga)]);
}
