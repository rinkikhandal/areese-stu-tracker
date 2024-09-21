import { ImCross } from "react-icons/im";
import PropTypes from "prop-types";

const OverLay = ({ children, closeOverlay }) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 grid w-full h-screen place-items-center  bg-black  opacity-50 z-10 "
        onClick={closeOverlay}
      >
        {/* Use closeOverlay function when clicking outside the modal */}
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded h-auto min-h-[150px] w-[90%] max-w-[500px]  grid place-items-center z-50  py-5 px-10">
        <ImCross
          className="absolute top-3 right-3 text-orange-400 hover:text-primary_orange cursor-pointer"
          onClick={closeOverlay}
        />
        {/* Use closeOverlay function when clicking the close button */}
        <div className="w-full">{children}</div>
        {/* Render children (like the NewBatch content) */}
      </div>
    </>
  );
};

OverLay.propTypes = {
  children: PropTypes.node.isRequired,
  closeOverlay: PropTypes.func.isRequired,
};

export default OverLay;
