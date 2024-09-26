import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import PropTypes from "prop-types";

const Folder = ({ handleBatchOpen }) => {
  return (
    <section
      className="relative mx-auto bg-white h-16 w-[80%] sm:w-[100%] p-3 shadow-sm flex items-center gap-3 rounded-sm cursor-pointer hover:shadow-lg"
      onDoubleClick={() => handleBatchOpen(1)}
    >
      <div className="">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-primary_orange"
        >
          <rect width="24" height="24" fill="white" className="" />
          <path
            d="M21 9V7C21 6.44772 20.5523 6 20 6H10L9 4H4L3.21115 5.57771C3.07229 5.85542 3 6.16165 3 6.47214V9"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-primary_orange fill-none"
          />
          <path
            d="M3.91321 20H20.0868C20.604 20 21.0359 19.6056 21.0827 19.0905L21.9009 10.0905C21.9541 9.50492 21.493 9 20.905 9H3.09503C2.507 9 2.0459 9.50492 2.09914 10.0905L2.91732 19.0905C2.96415 19.6056 3.39601 20 3.91321 20Z"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-primary_orange"
          />
        </svg>
      </div>

      <div className=" tracking-wider w-[90%]">
        <h5 className=" text-primary_purple font-medium">Batch Name</h5>
        <p className="text-xs text-slate-600"> class </p>
      </div>
      <article className="  hover:bg-gray-300 p-1 rounded ">
        <PiDotsThreeOutlineVerticalFill className="text-primary_gray" />
      </article>
    </section>
  );
};

Folder.propTypes = {
  handleBatchOpen: PropTypes.func.isRequired,
};

export default Folder;
