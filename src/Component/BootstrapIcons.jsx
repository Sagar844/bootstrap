import React, { useContext } from "react";
import { dro } from "../App";
import { IconData } from "./IconData";
import { Navbar } from "./Navbar";

const BootstrapIcons = () => {
  const { setdeop} = useContext(dro);

  const handle = (e) => {
    if (e.target.id === "container") setdeop(false);
  };

  return (
    <div >
      <Navbar />
      <div
          onClick={handle}
          id="container"
        className=" bg-black py-32 flex flex-row-reverse grow-1 flex-wrap  justify-between  "
      >
        <img
          className="w-96 mx-10"
          src="https://icons.getbootstrap.com/assets/img/icons-hero@2x.png"
          alt=""
        />

        <div className="mx-5 space-y-10 ">
          <h1 className="text-4xl font-bold text-white">Bootstrap Icons</h1>
          <p className="text-white text-left">
            Free, high quality, open source icon library with over 1,800 icons.{" "}
            <br></br>
            Include them anyway you like—SVGs, SVG sprite, or web fonts.
            <br></br> Use them with or without Bootstrap in any project.
          </p>
          <div className="flex flex-row space-x-4 ">
            <span
              title="npm i bootstrap-icons"
              className="text-white lg:text-white lg:bg-slate-700   bg-gray-100 px-14 py-3  rounded-lg  font-semibold before:content-['$'] "
            >
              npm i bootstrap-icons
            </span>
            <div>
              <a
                href="https://www.figma.com/"
                target={"_blank"}
                title="Open in Figma"
                className=" hover:bg-white flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500 items-center justify-center hover:text-black border-solid border-2 border-white px-5  py-3 rounded-lg list-none text-white  font-bold "
              >
                <svg
                  className="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#e64a19"
                    d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
                  />
                  <path
                    fill="#7c4dff"
                    d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
                  />
                  <path
                    fill="#66bb6a"
                    d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
                  />
                  <path
                    fill="#ff7043"
                    d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
                  />
                  <circle cx="32" cy="24" r="7" fill="#29b6f6" />
                </svg>{" "}
                Open in Figma
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-white" />
      <IconData />
    </div>
  );
};
export default BootstrapIcons;
