import React from "react";
import { Produts } from "../Produts";

export const SvgItems = ({ product }) => {
  return (
    <div className="text-white flex-wrap grid grid-cols-8 gap-2 mx-3 ">
      {product.map((s) => {
        return (
          <div>
            <Produts {...s} />
          </div>
        );
      })}
    </div>
  );
};
