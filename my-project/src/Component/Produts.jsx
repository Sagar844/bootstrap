import React from "react";

export const Produts = ({ id, name, svg }) => {
  return (
    <div key={id}>
      <img className="bg-gray-600 px-16  py-12 object-cover rounded-md" src={svg} alt="" />
      <h1>{name}</h1>
    </div>
  );
};
