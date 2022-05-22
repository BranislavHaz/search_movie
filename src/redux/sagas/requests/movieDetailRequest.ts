const apiUrl = "https://www.omdbapi.com/";

export function getMovie(payload: string) {
  return fetch(
    `${apiUrl}?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${payload}`
  ).then((resp) => resp.json());
}
