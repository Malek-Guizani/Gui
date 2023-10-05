import React from "react";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow dark:bg-gray-900 absolute bottom-0 w-full bg-gray-100 ">
      <div className="max-w-screen-xl mx-auto pb-4 md:pb-8">
        <hr className="mb-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            sagemcom
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
