import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesList } from "../../redux/slices/moviesListSlice";
import { MoviesListState } from "../../redux/types/moviesListTypes";
import Pagination from "rc-pagination";

const PaginationBar = () => {
  const [pageId, setPageId] = useState<number>(1);
  const dispatch = useDispatch();
  const { totalResults, searchQuery } = useSelector(
    (state: MoviesListState) => state.moviesList
  );

  const handleChange = (id: number) => {
    dispatch(getMoviesList({ query: searchQuery, page: id }));
    setPageId(id);
  };

  return (
    <Pagination
      className="pagination-bar"
      current={pageId}
      hideOnSinglePage={true}
      onChange={handleChange}
      total={totalResults}
      showLessItems={true}
      showTitle={false}
      nextIcon="Next >"
      prevIcon="< Previous"
      jumpNextIcon="..."
      jumpPrevIcon="..."
    />
  );
};

export default PaginationBar;
