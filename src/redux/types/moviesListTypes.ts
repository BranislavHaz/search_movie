export type MoviesListState = {
  moviesList: {
    moviesList: MoviesListElement[];
    totalResults: number;
    searchQuery: string;
    isLoading: boolean | null;
  };
};

export type MoviesListInitial = {
  moviesList: MoviesListElement[];
  totalResults: number;
  searchQuery: string;
  isLoading: boolean | null;
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

export type GetMoviesListRequest = {
  query: string;
  page: number;
};

export type FetchMoviesList = {
  payload: GetMoviesListRequest;
  type: string;
};
