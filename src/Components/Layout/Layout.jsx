import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../SubComponents/Common/Navbar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  const location = useLocation();
  const actualPath = location.pathname.split("/")[1];
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(actualPath);
  }, [path, actualPath]);

  return (
    <>
      <div className="bg-gray-200  min-h-screen  pb-10">
        <Navbar path={path} />
        <main className="mt-10 px-8 md:px-11 xl:px-36">{children}</main>
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
