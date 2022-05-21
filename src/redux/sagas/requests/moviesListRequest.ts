import axios from "axios";
import { GetMoviesList } from "../../types/moviesListTypes";

const apiUrl = "http://www.omdbapi.com/";

export function getMovies(payload: GetMoviesList) {
  return axios.request({
    method: "get",
    url: `${apiUrl}?apikey=${process.env.REACT_APP_API_KEY}&s=${payload.query}&page=${payload.page}`,
  });
}
