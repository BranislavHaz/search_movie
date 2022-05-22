import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  MoviesListInitial,
  MoviesListElement,
  GetMoviesListRequest,
} from "../types/moviesListTypes";

const initialState = {
  moviesList: [{}],
  totalResults: 0,
  searchQuery: "",
} as MoviesListInitial;

export const moviesListSlice = createSlice({
  name: "moviesList",
  initialState,
  reducers: {
    getMoviesList: (state, action: PayloadAction<GetMoviesListRequest>) => {},
    setMoviesList: (state, action: PayloadAction<MoviesListElement[]>) => {
      state.moviesList = action.payload;
    },
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { getMoviesList, setMoviesList, setTotalResults, setSearchQuery } =
  moviesListSlice.actions;

export default moviesListSlice.reducer;
