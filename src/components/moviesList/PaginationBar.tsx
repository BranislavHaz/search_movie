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
      locale={{
        items_per_page: "Items per page",
        jump_to: "Jump to",
        jump_to_confirm: "Jump to confirm",
        page: "page",
        prev_page: "Previous page",
        next_page: "Next page",
        prev_5: "Previos 5 pages",
        next_5: "Next 5 pages",
        prev_3: "Previos 3 pages",
        next_3: "Next 3 pages",
      }}
      nextIcon="Next >"
      prevIcon="< Previous"
      jumpNextIcon="..."
      jumpPrevIcon="..."
    />
  );
};

export default PaginationBar;
