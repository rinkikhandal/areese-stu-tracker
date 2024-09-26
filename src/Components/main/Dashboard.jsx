import Layout from "../Layout/Layout";
// import { IoSearch } from "react-icons/io5";
import { useReducer } from "react";
import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

// import { useState } from "react";
import {
  initialState,
  overlayReducer,
} from "../../LocalReducers/overlayReducer";
import {
  CLOSE_OVERLAY,
  NEW_BATCH,
  OPEN_SEARCH,
} from "../../LocalReducers/variables";
import Search from "../SubComponents/DashboardComponents/Search";
import NewBatch from "../SubComponents/DashboardComponents/NewBatch";
import { useNavigate } from "react-router";
import Folder from "../SubComponents/DashboardComponents/folder";

const Dashboard = () => {
  const [overlayState, dispatch] = useReducer(overlayReducer, initialState);

  const navigate = useNavigate();

  // HANDLING OVERLAY TYPE function==========
  const handleOverLay = (param) => {
    if (param === "search") {
      dispatch({ type: OPEN_SEARCH });
    } else if (param === "batch") {
      dispatch({ type: NEW_BATCH });
    }
  };

  // CLOSING OVERLAY function==========
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

  // BATCH OPEN DOUBLE CLICK function==========

  const handleBatchOpen = (id) => {
    navigate(`/batch/${id}`);
  };

  return (
    <>
      {overlayState.batchValue && <NewBatch closeOverlay={closeOverlay} />}
      <Layout>
        {/* ========Heading Section======== */}
        <div className="grid grid-cols-6 gap-x-10 items-center mb-14">
          <h1 className="text-primary_purple col-span-3">Dashboard</h1>
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
                  onClick={() => {
                    handleOverLay("search");
                  }}
                />
                {overlayState.searchValue && (
                  <Search
                    handleSearchForm={handleSearchForm}
                    closeOverlay={closeOverlay}
                  />
                )}
              </div>
            </div>
            <div
              className="flex items-center gap-2 bg-primary_orange hover:bg-secondary_orange text-white rounded justify-center h-9  lg:px-7 px-3 justify-self-end tracking-wide lg:text-base text-sm cursor-pointer"
              onClick={() => {
                handleOverLay("batch");
              }}
            >
              <FaPlus /> <span className="hidden md:inline-block">Batch</span>
            </div>
          </div>
        </div>
        {/* ========END OF Heading Section======== */}

        {/* ========Remaining Section ======== */}
        <div className="w-full">
          <h3 className="mb-10 pb-4 text-primary_blue border-b-[0.5px] border-b-primary_orange border-b-solid">
            All Batches : Total 5
          </h3>
          <div className="grid place-items-center w-full">
            <div className="w-full  grid grid-cols-1 gap-x-16 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
              {/* ----folder---- */}
              <Folder handleBatchOpen={handleBatchOpen} />
              <Folder handleBatchOpen={handleBatchOpen} />
              <Folder handleBatchOpen={handleBatchOpen} />
              <Folder handleBatchOpen={handleBatchOpen} />
              {/* ----end of folder---- */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
