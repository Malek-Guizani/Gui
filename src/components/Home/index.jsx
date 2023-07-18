import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="mt-28 mr-20 pt-20">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
