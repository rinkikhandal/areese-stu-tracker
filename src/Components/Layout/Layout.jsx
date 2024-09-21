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
      <div className="bg-gray-200 min-h-[100vh]">
        <Navbar path={path} />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
