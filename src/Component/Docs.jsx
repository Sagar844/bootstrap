import React from "react";

export const Docs = () => {
  return (
    <div className=" text-center mx-auto items-center ">
      <h6 className="text-2xl font-semibold ">
        Read our getting started guides
      </h6>

      <h1 className="text-xl">
        Get a jump on including Bootstrap's source files in a new project with
        our official guides.
      </h1>
      <div className="flex justify-center flex-wrap gap-5 mt-10 ">
        <img
          className="w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src="https://getbootstrap.com/docs/5.3/assets/img/webpack.svg"
          alt=""
        />
        {/* <h1>Webpack</h1> */}
        <img
          className="w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src="https://getbootstrap.com/docs/5.3/assets/img/parcel.png"
          alt=""
        />
        {/* <h1>Parcel</h1> */}
        <img
          className="w-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          src="https://getbootstrap.com/docs/5.3/assets/img/vite.svg"
          alt=""
        />
        {/* <h1>vite</h1> */}
      </div>
    </div>
  );
};
