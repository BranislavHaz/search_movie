import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMoviesList,
  setTotalResults,
  setSearchQuery,
} from "../../redux/slices/moviesListSlice";
import { MoviesListState } from "../../redux/types/moviesListTypes";

const SearchBar = () => {
  const findForm = useRef<HTMLFormElement>(null);
  const inputText = useRef<HTMLInputElement>(null);
  const findBtn = useRef<HTMLButtonElement>(null);
  const [inputTextValue, setInputTextValue] = useState<string>("");
  const [errorInput, setErrorInput] = useState<boolean>(false);
  const { searchQuery } = useSelector(
    (state: MoviesListState) => state.moviesList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setInputTextValue(searchQuery);
  }, [searchQuery]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputText.current?.blur();

    // Remove old movies list
    dispatch(setTotalResults(0));

    // Simple input validation
    if (inputText.current?.value && inputText.current?.value.length > 2) {
      const searchQuery = inputText.current.value;
      dispatch(getMoviesList({ query: searchQuery, page: 1 }));
      dispatch(setSearchQuery(searchQuery));
      setErrorInput(false);
    } else {
      findForm.current?.classList.add("wrong");
      setErrorInput(true);

      setTimeout(() => {
        findForm.current?.classList.remove("wrong");
      }, 250);
    }

    // Animate submit button
    if (findBtn !== null) {
      findBtn.current?.classList.add("active");
      setTimeout(() => {
        findBtn.current?.classList.remove("active");
      }, 100);
    }
  };

  const showErrorMessage = () => {
    return (
      errorInput && (
        <div className="error-text">Enter at least 3 characters.</div>
      )
    );
  };

  const handlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextValue(e.target.value);
  };

  const handleFocus = () => setInputTextValue("");

  return (
    <form id="find-movie-form" onSubmit={handleSubmit} ref={findForm}>
      <input
        className="find-movie-input"
        type="text"
        onChange={handlChange}
        onFocus={handleFocus}
        ref={inputText}
        placeholder={inputTextValue}
      />
      {showErrorMessage()}
      <button
        className="btn find-movie-btn"
        form="find-movie-form"
        ref={findBtn}
      >
        Find movie
      </button>
    </form>
  );
};

export default SearchBar;
