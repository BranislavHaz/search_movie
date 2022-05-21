import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  MovieDetailInitial,
  MovieDetail,
  GetMovieDetail,
} from "../types/movieDetailTypes";

const initialState = {
  movieDetail: {},
} as MovieDetailInitial;

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    getMovieDetail: (state, payload: PayloadAction<GetMovieDetail>) => {},
    setMovieDetail: (state, action: PayloadAction<MovieDetail>) => {
      state.movieDetail = action.payload;
    },
  },
});

export const { getMovieDetail, setMovieDetail } = movieDetailSlice.actions;

export default movieDetailSlice.reducer;
