import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { dro, hanlesui } from "../App";
import MyModal from "./Mymodel";
import { VersionDrop } from "./VersionDrop";

export const Navbar = () => {
  const { drop, setdeop } = useContext(dro);
  const {isopen ,setIsOpen } = useContext(hanlesui);

  return (
    <div className=" bg-violet-700 py-3 fixed  right-0 left-0 ">
      <nav className=" flex flex-wrap  items-center  justify-center  lg:justify-start ">
        <Link to="/">
          <img
            title="Bootstrap"
            className="w-14  lg:w-14  mx-4 md:w-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 cursor-pointer"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png
            
            "
            alt="Bootstrap"
          />
        </Link>
        <div className="sm:flex hidden text-white space-x-4 font-semibold ">
          <h1>Docs</h1>
          <h1>Examples</h1>
          <Link to="/icon">Icons</Link>
          <h1>Themes</h1>
          <h1>Blog</h1>
        </div>
        <div className="mx-auto mr-20 sm:flex hidden ">
          <button onClick={() => setIsOpen(!isopen)} className="text-white">
            v 5.3
          </button>
          <hr className=" " />
        </div>
      </nav>
    </div>
  );
};
