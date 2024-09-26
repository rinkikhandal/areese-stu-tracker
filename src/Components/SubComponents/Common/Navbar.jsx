import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import PropTypes from "prop-types";

const Navbar = ({ path }) => {
  return (
    <>
      <nav className="shadow-md py-2 px-8  md:px-11 xl:px-36 bg-white">
        <header className=" flex items-center justify-between gap-8">
          <div className="w-full max-w-[250px]">
            <img src="/images/log.png" alt="" className="w-32 md:w-40  " />
          </div>
          <ul className="w-full">
            <li
              className={
                path === "dashboard"
                  ? "bg-primary_orange text-white rounded px-2 py-1 tracking-wide transition lg:text-base text-sm"
                  : "hover:bg-secondary_orange hover:text-white text-primary_orange font-medium rounded px-2 py-1 tracking-wide transition lg:text-base text-sm"
              }
            >
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <div className="w-full max-w-[30%] flex justify-end">
            <Link
              to="#"
              className="flex items-center gap-2 bg-primary_blue text-white rounded justify-center py-2   lg:w-28 w-24 justify-self-end tracking-wide lg:text-base text-sm hover:bg-secondary_blue"
            >
              <span>Logout</span>
              <MdLogout />
            </Link>
          </div>
        </header>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Navbar;
