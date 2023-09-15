import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="mt-36  pt-20 w-full ">
        <Outlet />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
