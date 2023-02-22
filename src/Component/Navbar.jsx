import React, { useContext, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Hanburger } from "./Hanburger";
import { data } from "../App";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-violet-700  py-3 shadow-lg fixed  right-0 left-0 ">
      <nav className=" flex flex-wrap  items-center  justify-center lg:justify-start  ">
        <Link to="/">
          <img
            title="Bootstrap"
            className="w-14  lg:w-14  mx-4 md:w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            alt=""
          />
        </Link>
        <div className="sm:flex hidden text-white space-x-4 font-semibold ">
          <h1>Docs</h1>
          <h1>Examples</h1>
          <Link to="/icon">Icons</Link>
          <h1>Themes</h1>
          <h1>Blog</h1>
        </div>
      </nav>
    </div>
  );
};
