import { GetMoviesListRequest } from "../../types/moviesListTypes";

const apiUrl = "https://www.omdbapi.com/";

export function getMovies(payload: GetMoviesListRequest) {
  return fetch(
    `${apiUrl}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${payload.query}&page=${payload.page}`
  ).then((resp) => resp.json());
}
