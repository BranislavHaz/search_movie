import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import moviesListSlice from "./slices/moviesListSlice";
import movieDetailSlice from "./slices/movieDetailSlice";
import rootSaga from "./sagas/rootSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    moviesList: moviesListSlice,
    movieDetail: movieDetailSlice,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
