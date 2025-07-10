import React from "react";
import { HiChevronRight, HiHome, HiOutlineHome } from "react-icons/hi";
import { HiHomeModern } from "react-icons/hi2";
import { Link, Links } from "react-router-dom";

const Breadcrumb = ({ currentPageTitle, links }) => {
  return (
    <div className="flex w-full gap-3 mb-5">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex  items-center">
            <Link
              to="/"
              className="inline-flex gap-1 items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
             <HiHome />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <HiChevronRight />
              <Link
                to="/product"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {currentPageTitle}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
