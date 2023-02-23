import React from "react";

export const Produts = ({ id, name, svg }) => {
  return (
    <div className="" key={id}>
      <img className="bg-gray-600 px-16  py-12 rounded-md  " src={svg} alt="" />
      <h1 className="ml-8">{name}</h1>
    </div>
  );
};
