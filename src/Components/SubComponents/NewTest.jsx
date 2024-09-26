import PropTypes from "prop-types";
import OverLay from "./Common/OverLay";

const NewTest = ({ closeOverlay }) => {
  return (
    <OverLay closeOverlay={closeOverlay}>
      <h3 className="mt-[-10px] border-b-solid border-b-[0.5px] border-b-gray-200 text-primary_orange py-2 text-xl text-center">
        Create Test
      </h3>
      <form action="" className="w-full !important mt-5">
        <div className="w-full grid grid-rows-2 mb-3">
          <label
            htmlFor="testName"
            className="text-sm text-primary_blue tracking-wide"
          >
            Test Name :
          </label>
          <input
            type="text"
            name="testName"
            id="testName"
            placeholder="Unit test 1"
            className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider"
          />
        </div>
        <div className="w-full grid grid-rows-2 mb-3 ">
          <label
            htmlFor="subject"
            className="text-sm text-primary_blue tracking-wide"
          >
            Subject :
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="science"
            className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
          />
        </div>
        <div className="w-full grid grid-rows-2 mb-3">
          <label
            htmlFor="date"
            className="text-sm text-primary_blue tracking-wide"
          >
            Date :
          </label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="YYYY-MM-DD"
            className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
          />
        </div>
        <div className="w-full grid grid-rows-2 mb-3">
          <label
            htmlFor="maximumMarks"
            className="text-sm text-primary_blue tracking-wide"
          >
            Maximum Marks :
          </label>
          <input
            type="text"
            name="maximumMarks"
            id="maximumMarks"
            placeholder="000"
            className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
          />
        </div>
        <div className="w-full mt-10 grid place-items-center">
          <button
            type="submit"
            className="text-sm tracking-wider bg-primary_blue text-white hover:bg-secondary_blue rounded py-2 px-5 text-center transition:background"
          >
            Create Test
          </button>
        </div>
      </form>
    </OverLay>
  );
};

NewTest.propTypes = {
  closeOverlay: PropTypes.func.isRequired,
};

export default NewTest;
