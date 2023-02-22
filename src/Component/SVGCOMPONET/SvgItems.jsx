import React from "react";
import { Produts } from "../Produts";

export const SvgItems = ({ product }) => {
  return (
    <div className="text-white grid grid-cols-8 gap-2 ">
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
