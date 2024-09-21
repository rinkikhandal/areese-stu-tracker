import OverLay from "../Common/OverLay";
import PropTypes from "prop-types";

const NewBatch = ({ closeOverlay }) => {
  return (
    <OverLay closeOverlay={closeOverlay}>
      <h3 className="mt-[-10px] border-b-solid border-b-[0.5px] border-b-gray-200 text-primary_orange py-2 text-xl text-center">
        Create Batch
      </h3>
      <form action="" className="w-full !important mt-5">
        <div className="w-full grid grid-rows-2 mb-3">
          <label
            htmlFor="batchName"
            className="text-sm text-primary_blue tracking-wide"
          >
            Batch Name :
          </label>
          <input
            type="text"
            name="batchName"
            id="batchName"
            placeholder="foundation"
            className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px]  focus:outline-solid tracking-wider"
          />
        </div>
        <div className="w-full grid grid-rows-2 mb-3 ">
          <label
            htmlFor="batchClass"
            className="text-sm text-primary_blue tracking-wide"
          >
            Class :
          </label>
          <input
            type="text"
            name="batchClass"
            id="batchClass"
            placeholder="00"
            className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
          />
        </div>
        <div className="w-full grid grid-rows-2 mb-3">
          <label
            htmlFor="batchYear"
            className="text-sm text-primary_blue tracking-wide"
          >
            Year :
          </label>
          <input
            type="text"
            name="batchYear"
            id="batchYear"
            placeholder="YYYY"
            className=" border-gray-200 border-solid border-2 rounded px-2 text-sm py-1 mt-[-4px] focus:outline-orange-600 focus:outline-[0.5px] focus:outline-solid tracking-wider"
          />
        </div>
        <div className="w-full mt-10 grid place-items-center">
          <button
            type="submit"
            className="text-sm tracking-wider bg-primary_blue text-white hover:bg-secondary_blue rounded py-2 px-5 text-center transition:background"
          >
            Create Batch
          </button>
        </div>
      </form>
    </OverLay>
  );
};

NewBatch.propTypes = {
  closeOverlay: PropTypes.func.isRequired,
};

export default NewBatch;
