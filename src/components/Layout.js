import React from "react";
import GlobalSearchBox from "./GlobalSearchBox";
import "./layout.css";

const Layout = ({ children, filter, setFilter }) => {
  return (
    <>
      <nav>
        <h4>Dashboard</h4>
        <GlobalSearchBox filter={filter} setFilter={setFilter} />
      </nav>

      {children}
    </>
  );
};

export default Layout;
