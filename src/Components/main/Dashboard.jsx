import Layout from "../Layout/Layout";
// import { IoSearch } from "react-icons/io5";
import { useReducer } from "react";
import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

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
        <main className="mt-10 px-8 md:px-11 xl:px-36 ">
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
                      type="text"
                      placeholder="Search"
                      name="dashSearch"
                      className="focus:outline-none text-sm  caret-gray-400 bg-transparent"
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
              <div className="grid grid-cols-2 gap-x-14 gap-y-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}

                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
                {/* ----folder---- */}
                <section
                  className="relative bg-white h-40 w-52 pb-5 shadow-sm [&:hover>article]:visible"
                  onDoubleClick={() => handleBatchOpen(1)}
                >
                  <article className="invisible absolute top-4 right-3 hover:bg-gray-300 p-1 rounded ">
                    <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
                  </article>
                  <div className="h-[80%] grid place-items-center border-b-[0.5px] border-b-gray-400 border-b-solid">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-primary_blue"
                    >
                      <rect width="24" height="24" fill="white" className="" />
                      <path
                        d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blue fill-none"
                      />
                      <path
                        d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-primary_blues"
                      />
                    </svg>
                  </div>

                  <div className="text-sm tracking-wider text-center mt-3 text-primary_red font-medium">
                    Batch Name
                  </div>
                </section>
                {/* ----end of folder---- */}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Dashboard;
