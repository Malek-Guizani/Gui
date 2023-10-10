import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoSagemcom from "../../Assets/Logo/logo-sagemcom-new-charte-header.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("ppGet");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const pendingClasses =
    "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    localStorage.setItem("activeButton", buttonName);
  };

  useEffect(() => {
    const storedActiveButton = localStorage.getItem("activeButton");
    if (storedActiveButton) {
      setActiveButton(storedActiveButton);
    }
  }, []);
  return (
    <header>
      <div className="bg-gray-200 w-full fixed flex flex-row justify-around py-6 z-50">
        {}
      </div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-10 left-0 border border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/home/PermanentParameters/ppGet"
            className="flex items-center"
          >
            <img src={LogoSagemcom} className="h-8 mr-2" alt="sagem Logo" />
          </Link>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="PermanentParameters/ppGet"
                  className={`${
                    (pendingClasses,
                    activeButton === "ppGet" ? " md:text-blue-700" : "")
                  }`}
                  onClick={() => {
                    toggleMenu();
                    handleClick("ppGet");
                  }}
                  aria-current="page"
                >
                  Permanent Params
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="Upgrade/SoftwareUpgrade"
                  className={`${
                    (pendingClasses,
                    activeButton === "Upgrade" ? " md:text-blue-700" : "")
                  }`}
                  onClick={() => {
                    toggleMenu();
                    handleClick("Upgrade");
                  }}
                >
                  Upgrade
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Partition/backupPartition"
                  className={`${
                    (pendingClasses,
                    activeButton === "Partition" ? " md:text-blue-700" : "")
                  }`}
                  onClick={() => {
                    toggleMenu();
                    handleClick("Partition");
                  }}
                >
                  Partitions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="other/cmd"
                  className={`${
                    (pendingClasses,
                    activeButton === "cmd" ? " md:text-blue-700" : "")
                  }`}
                  onClick={() => {
                    toggleMenu();
                    handleClick("cmd");
                  }}
                >
                  Others
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
