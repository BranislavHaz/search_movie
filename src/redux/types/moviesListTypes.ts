export type MoviesListState = {
  moviesList: {
    moviesList: MoviesListElement[];
    totalResults: number;
    searchQuery: string;
  };
};

export type MoviesListInitial = {
  moviesList: MoviesListElement[];
  totalResults: number;
  searchQuery: string;
};

export type MoviesListProps = {
  movies: MoviesListElement[];
};

export type MoviesList = {
  Search: MoviesListElement[];
  totalResults: string;
  Response: string;
};

export type MoviesListElement = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
};

export type GetMoviesList = {
  query: string;
  page: number;
};

///
export type FetchMoviesList = {
  payload: { query: string; page: number };
  type: string;
};
