import React, { useEffect, useState } from "react";

export const SetTimeout = () => {
  const [data, setdata] = useState(false);

  // setTimeout(() => {
  //   setdata(true);
  //   clearTimeout();
  // }, );

  const handle = (e) => {
    if (e.target.id === "container") setdata(false);
  };
  if (!data) return null;

  return (
    <div
      onClick={handle}
      id="container"
      className="fixed inset-0  bg-opacity-30 backdrop-blur-sm flex justify-center items-center w-full h-screen"
    >
      {data && (
        <form className="bg-white px-16 flex py-20 flex-col space-y-5 rounded-lg">
          <input
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email "
            type="text"
            name=""
            id=""
          />
          <input
            className="bg-gray-50 border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            type="text"
            name=""
            id=""
          />
          <button onClick={() => setdata(false)}>x</button>
        </form>
      )}
    </div>
  );
};
