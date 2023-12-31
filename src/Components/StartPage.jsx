import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import LogoSagemcom from "../Assets/Logo/logo-sagemcom-new-charte-header.png";

export const StartPage = () => {
  const handleNavigation = () => {
    localStorage.clear(); // Clear local storage before navigation
  };

  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-16 m-auto w-screen  ">
        <img src={LogoSagemcom} alt="Logo" />
        <Link
          to="/home/PermanentParameters/ppGet"
          onClick={handleNavigation}
          className="my-auto"
        >
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            className=" px-10 py-5"
          >
            Get start
          </Button>
        </Link>
      </div>
    </React.Fragment>
  );
};
