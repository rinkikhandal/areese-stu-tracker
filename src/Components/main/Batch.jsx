import Layout from "../Layout/Layout";
import { useReducer } from "react";
import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import Search from "../SubComponents/DashboardComponents/Search";
import {
  initialState,
  overlayReducer,
} from "../../LocalReducers/overlayReducer";
import { CLOSE_OVERLAY } from "../../LocalReducers/variables";
// NEW_TEST,
// OPEN_SEARCH,

const Batch = () => {
  const [overlayState, dispatch] = useReducer(overlayReducer, initialState);

  const closeOverlay = () => {
    dispatch({ type: CLOSE_OVERLAY });
  };

  // SEARCH BAR function==========
  const handleSearchForm = (e) => {
    e.preventDefault();
    if (overlayState.overlayValue) {
      closeOverlay();
    }
    // extra code goes here
  };

  return (
    <>
      <Layout>
        <main className="mt-10 px-8 md:px-11 xl:px-36 ">
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
                      type="text"
                      placeholder="Search"
                      name="dashSearch"
                      className="focus:outline-none text-sm  caret-gray-400 bg-transparent"
                    />
                  </div>
                </form>
                <div className="md:hidden place-self-center justify-self-end ">
                  <BsSearch className="text-primary_blue  cursor-pointer  " />
                  {overlayState.searchValue && (
                    <Search
                      handleSearchForm={handleSearchForm}
                      closeOverlay={closeOverlay}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 bg-primary_orange hover:bg-secondary_orange text-white rounded justify-center h-9  lg:px-7 px-3 justify-self-end tracking-wide lg:text-base text-sm cursor-pointer">
                <FaPlus /> <span className="hidden md:inline-block">New</span>
              </div>
            </div>
          </div>
          {/* ========END OF Heading Section======== */}
        </main>
      </Layout>
    </>
  );
};

export default Batch;
