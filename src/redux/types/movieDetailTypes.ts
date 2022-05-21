export type MovieDetailState = {
  movieDetail: {
    movieDetail: MovieDetail;
  };
};

export type MovieDetailInitial = {
  movieDetail: MovieDetail;
};

export type MovieDetail = Record<
  | "Title"
  | "Year"
  | "Rated"
  | "Released"
  | "Runtime"
  | "Genre"
  | "Director"
  | "Writer"
  | "Actors"
  | "Plot"
  | "Language"
  | "Country"
  | "Awards"
  | "Poster"
  | "Metascore"
  | "imdbRating"
  | "imdbVotes"
  | "imdbID"
  | "Type"
  | "DVD"
  | "BoxOffice"
  | "Production"
  | "Website"
  | "Response",
  string
> & {
  Ratings?: {
    Source: string;
    Value: string;
  }[];
};

export type MovieFavorite = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
};

export type GetMovieDetail = { movieId: string };

///
export type FetchMovieDetail = {
  payload: { movieId: string };
  type: string;
};
