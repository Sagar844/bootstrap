import React, { useState, useEffect, useContext } from "react";
import { product } from "../App";
import { data } from "./api";
import { SvgItems } from "./SVGCOMPONET/SvgItems";

const SvgAPI = () => {
  
  const [svg, setsvg] = useState([]);
  const { query, setquery } = useContext(product);


  // console.log(svg);

  useEffect(() => {
    setsvg(data);
  }, []);

  let icon = svg.filter(function (item) {
    const lowercsenme = item.name.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();
    return lowercsenme.indexOf(lowerCaseQuery) != -1;
  });

  return (
    <div className=" ">
      <div className="flex justify-between mx-4 mb-20">
        <h6 className="text-white text-3xl font-fold">Icons</h6>
        <input
          onChange={(e) => setquery(e.target.value)}
          title=" Start typing "
          className="px-5 py-1 border-solid rounded-md focus:ring-2 cursor-pointer bg-transparent border-2 border-white text-white"
          placeholder="Start typing to filter..."
          type="text"
          name=""
          id=""
        />
      </div>
      <div>
        <SvgItems product={icon} />
      </div>
    </div>
  );
};
export default SvgAPI;
