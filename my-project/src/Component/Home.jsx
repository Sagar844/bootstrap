import React from "react";
import { AiOutlineRead } from "react-icons/ai";

export const Home = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-100 via-blue-300   to-blue-500 py-32 space-y-10 ">
      <div className=" font-bold flex justify-center">
        <button
          title="New in v5.3"
          className="  bg-yellow-200 mx-4 shadow-3xl rounded-md px-1  py-2 "
        >
          New in v5.3
        </button>
        <h1 className="flex text-center text-white lg:text-black mt-1">
           Color mode support, expanded color palette, and more!
        </h1>
      </div>

      <img
        title="Bootstrap"
        className="w-1/2 lg:w-60 mt-5 mx-auto items-center flex-wrap"
        src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
        alt=""
      />
      <div className="flex text-center">
        <h6 className="text-3xl lg:text-6xl font-bold mx-auto text-white  lg:text-black ">
          Build fast, responsive sites <br />
          with Bootstrap
        </h6>
      </div>
      <div className=" flex-wrap  mt-5 space-y-2">
        <p className="text-center text-xl   text-white lg:text-black font-semibold">
          Powerful, extensible, and feature-packed frontend toolkit. Build and
          <br />
          customize with Sass, utilize prebuilt grid system and components, and
          bring <br /> projects to life with powerful JavaScript plugins.
        </p>
      </div>

      <div className=" flex justify-center   flex-col    mx-2 space-x-3 lg:flex-row ">
        <span className="text-black lg:text-white lg:bg-slate-700   bg-gray-100 px-14 py-3 lg:px-20   rounded-lg  font-semibold before:content-['$'] ">
          npm i bootstrap@5.3.0-alpha1
        </span>
        <div>
          <button className="bg-violet-500 hover:bg-violet-700 py-2 lg:py-3 lg:px-8 rounded-lg list-none text-white px-32 font-bold ">
            <div className="sm:flex hidden  ">
              <AiOutlineRead />
            </div>
            Read the Docs
          </button>
        </div>
      </div>
      <div className="font-bold flex justify-center">
        <p>
          Currently v5.3.0-alpha1 ·
          <span>Download · v4.6.x docs · All releases</span>
        </p>
      </div>
      <div className=" flex justify-center  bg-slate-600 mx-96 rounded-lg py-3">
        <img
          className="w-20 rounded-lg  mr-20 "
          src="https://cdn4.buysellads.net/uu/1/127419/1670532337-Stock2.jpg"
          alt=""
        />
        <h1 className="flex text-center text-white font-mono">
          Get 10 Free Images From Adobe Stock. Start Now. ads via Carbon
        </h1>
      </div>
    </div>
  );
};
