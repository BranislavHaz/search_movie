import { useState, useEffect } from "react";
import { MovieFavorite } from "../redux/types/movieDetailTypes";

import MoviesList from "../components/moviesList/MoviesList";

const Favorites = () => {
  const [favoritedList, setFavoritedList] = useState<MovieFavorite[]>([]);
  const storageItemName = "favoritedMovies";

  useEffect(() => {
    if (localStorage.getItem(storageItemName)) {
      setFavoritedList(JSON.parse(localStorage.getItem(storageItemName) || ""));
    }
  }, []);

  return (
    <div className="favorites">
      <h1>Favorite movies</h1>
      <MoviesList movies={favoritedList} />
    </div>
  );
};

export default Favorites;
