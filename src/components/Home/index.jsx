import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="flex flex-col gap-8 w-full">
        <div className="mt-36  pt-20 w-full ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
