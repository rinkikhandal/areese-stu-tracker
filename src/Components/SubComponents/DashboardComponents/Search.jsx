import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";
import OverLay from "../Common/OverLay";

const Search = ({ handleSearchForm, closeOverlay }) => {
  return (
    <OverLay closeOverlay={closeOverlay}>
      <div className="border-b-2 border-primary_blue px-2 pb-1 flex items-center gap-2">
        <BsSearch className=" text-primary_blue" />
        <form action="#" onSubmit={handleSearchForm}>
          <input
            type="text"
            className="focus:outline-none text-sm caret-primary_blue placeholder:text-primary_orange text-sky-600"
            placeholder="Search"
            name="dashSearch"
          />
        </form>
      </div>
    </OverLay>
  );
};

Search.propTypes = {
  handleSearchForm: PropTypes.func.isRequired,
  closeOverlay: PropTypes.func.isRequired,
};

export default Search;
