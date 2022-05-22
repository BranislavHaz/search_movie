import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import {
  MovieDetailState,
  MovieFavorite,
} from "../../redux/types/movieDetailTypes";

import inActive from "../../assets/images/favorite-inactive.png";
import active from "../../assets/images/favorite-active.png";

const FavoriteMovieButton = () => {
  const storageItemName = "favoritedMovies";
  const favoriteBtn = useRef<HTMLImageElement>(null);
  const { movieDetail } = useSelector(
    (state: MovieDetailState) => state.movieDetail
  );
  const [favoritedList, setFavoritedList] = useState<MovieFavorite[]>([]);
  const [isFavorited, setIsFavorited] = useState<Boolean>(false);

  useEffect(() => {
    if (localStorage.getItem(storageItemName)) {
      const favoritedMovies = JSON.parse(
        localStorage.getItem(storageItemName) || ""
      );
      setFavoritedList(favoritedMovies);

      const foundMovie = favoritedMovies?.find(
        (movie: MovieFavorite) => movie.imdbID === movieDetail.imdbID
      );

      foundMovie ? setIsFavorited(true) : setIsFavorited(false);
    }
  }, [isFavorited, movieDetail]);

  const handleClick = () => {
    // Check if the movie is popular, if not - add it
    if (isFavorited) {
      const filterMovie = favoritedList.filter(
        (movie: MovieFavorite) => movie.imdbID !== movieDetail.imdbID
      );
      localStorage.setItem(storageItemName, JSON.stringify(filterMovie));

      setIsFavorited(false);
    } else {
      const currentMovie = {
        Title: movieDetail.Title,
        Year: movieDetail.Year,
        Genre: movieDetail.Genre,
        imdbID: movieDetail.imdbID,
        Poster: movieDetail.Poster,
      };

      localStorage.setItem(
        storageItemName,
        JSON.stringify([...(favoritedList ? favoritedList : []), currentMovie])
      );

      setIsFavorited(true);
    }

    // Animate favorite button
    if (favoriteBtn !== null) {
      favoriteBtn.current?.classList.add("active");
      setTimeout(() => {
        favoriteBtn.current?.classList.remove("active");
      }, 100);
    }
  };

  return (
    <img
      className="favorited-button"
      src={isFavorited ? active : inActive}
      onClick={handleClick}
      alt="Add to favorites"
      ref={favoriteBtn}
    />
  );
};

export default FavoriteMovieButton;
