import { useAppSelector, useAppDispatch } from '../../../utils/hooks';
import {
  setSearchFilter,
  setPageNumber,
} from '../../../redux/displayOptionsSlice';
import './TableFilter.css';

const TableFilter = () => {
  const dispatch = useAppDispatch();
  const searchedText = useAppSelector(
    (state) => state.displayOptions.searchFilter
  );

  const searchText = () => {
    const text = document.getElementById('search-filter').value;
    if (text.length >= 2) {
      dispatch(setSearchFilter(text));
      dispatch(setPageNumber(1));
    }
    if (text.length < 2 && searchedText !== null) {
      dispatch(setSearchFilter(null));
      dispatch(setPageNumber(1));
    }
  };

  return (
    <div id="table-filter" data-testid="table-filter">
      <label htmlFor="search-filter">Search:</label>
      <input type="text" id="search-filter" onChange={searchText} />
    </div>
  );
};

export default TableFilter;
