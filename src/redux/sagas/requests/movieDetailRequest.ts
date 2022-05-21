import axios from "axios";

const apiUrl = "https://www.omdbapi.com/";

export function getMovie(payload: string) {
  return axios.request({
    method: "get",
    url: `${apiUrl}?apikey=${process.env.REACT_APP_API_KEY}&i=${payload}`,
  });
}
