import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full relative min-h-screen overflow-hidden">
      <Header />

      <div className="my-36  pt-20 w-full max-h-[calc(70vh-25px)] overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
