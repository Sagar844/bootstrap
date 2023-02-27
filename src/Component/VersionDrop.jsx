import React from "react";

export const VersionDrop = () => {
  return (
    <div className=" bg-black flex flex-col space-y-4 rounded-md items-center justify-center drop-shadow-2xl shadow-lg shadow-violet-500/50 py-8 px-2 absolute right-0 mx-28 text-white font-bold ">
      <h1>v5 releases</h1>

      <button className="bg-indigo-800 px-20 rounded-lg">v5.2.3</button>
      <button>v5.1.3</button>
      <button>v5.0.3</button>
     
      
      <h1>Previous releases</h1>
      <button>v5.2.3</button>
      <button>v5.2.3</button>
      <button>v5.2.3</button>
    </div>
  );
};
