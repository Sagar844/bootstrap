import React from "react";
import { Produts } from "../Produts";

export const SvgItems = ({ product }) => {
  return (
    <div className="text-white grid grid-cols-2 md:grid-cols-6 gap-0 mx-3">
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
