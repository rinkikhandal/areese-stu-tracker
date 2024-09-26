import Layout from "../Layout/Layout";
import { useReducer } from "react";
import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import Search from "../SubComponents/DashboardComponents/Search";
import NewTest from "../SubComponents/NewTest";
import {
  initialState,
  overlayReducer,
} from "../../LocalReducers/overlayReducer";
import {
  CLOSE_OVERLAY,
  OPEN_SEARCH,
  NEW_TEST,
} from "../../LocalReducers/variables";
import { useNavigate } from "react-router";
// NEW_TEST,
// OPEN_SEARCH,

const Batch = () => {
  const [overlayState, dispatch] = useReducer(overlayReducer, initialState);

  const navigate = useNavigate();

  // ================ FUNCTIONS=================

  // overlay closing========
  const closeOverlay = () => {
    dispatch({ type: CLOSE_OVERLAY });
  };

  // HANDLING OVERLAY TYPE function==========
  const handleOverLay = (param) => {
    if (param === "search") {
      dispatch({ type: OPEN_SEARCH });
    }
    if (param === "test") {
      dispatch({ type: NEW_TEST });
    }
  };

  // SEARCH BAR function==========
  const handleSearchForm = (e) => {
    e.preventDefault();
    if (overlayState.overlayValue) {
      closeOverlay();
    }
    // extra code goes here...
  };

  // navigate to student page=========
  const handleStudentClick = () => {
    navigate("/student/registration");
  };

  return (
    <>
      {overlayState.testValue && <NewTest closeOverlay={closeOverlay} />}
      <Layout>
        {/* ========Heading Section======== */}
        <div className="grid grid-cols-6 gap-x-10 items-center mb-14">
          <h1 className="text-primary_purple col-span-3">Batch Name</h1>
          <div className="text-black grid grid-cols-3 col-span-3 ">
            <div className="col-span-2 grid">
              <form
                action="#"
                onSubmit={handleSearchForm}
                className="md:block hidden"
              >
                <div className="border-solid border-[2px] border-gray-400 rounded px-2 h-9 flex items-center gap-2 focus-within:border-solid focus-within:border-2 focus-within:border-primary_orange bg-white">
                  <BsSearch className="text-primary_blue hidden md:inline-block" />
                  <input
                    type="search"
                    placeholder="Search"
                    name="dashSearch"
                    className="focus:outline-none text-sm  caret-gray-400 bg-transparent w-full"
                  />
                </div>
              </form>
              <div className="md:hidden place-self-center justify-self-end ">
                <BsSearch
                  className="text-primary_blue  cursor-pointer  "
                  onClick={() => handleOverLay("search")}
                />
                {overlayState.searchValue && (
                  <Search
                    handleSearchForm={handleSearchForm}
                    closeOverlay={closeOverlay}
                  />
                )}
              </div>
            </div>
            <div className="relative flex items-center gap-2 bg-primary_orange hover:bg-secondary_orange text-white rounded justify-center h-9  lg:px-7 px-3 justify-self-end tracking-wide lg:text-base text-sm cursor-pointer [&:hover>.hover-div]:visible">
              <FaPlus /> <span className="hidden md:inline-block">New</span>
              <section className="hover-div invisible bg-white text-primary_purple absolute top-10 -right-7 md:right-0 text-center rounded text-sm w-28  h-24 shadow-sm z-20 py-2">
                {/* upper arrow */}
                <div className="h-0 w-0 border-[9px] border-l-transparent border-r-transparent border-t-transparent border-b-white absolute -top-4 left-[45%]"></div>
                <ul className="w-full h-full">
                  <li
                    className="hover:bg-tertiary_blue w-full h-1/3 grid place-items-center"
                    onClick={() => handleOverLay("test")}
                  >
                    Test
                  </li>
                  <li
                    className="hover:bg-tertiary_blue w-full h-1/3 grid place-items-center"
                    onClick={handleStudentClick}
                  >
                    Student
                  </li>
                  <li className="hover:bg-tertiary_blue w-full h-1/3 grid place-items-center  ">
                    Attendance
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        {/* ========END OF Heading Section======== */}
        <div>
          <section className="w-full bg-white"> </section>
        </div>
      </Layout>
    </>
  );
};

export default Batch;
