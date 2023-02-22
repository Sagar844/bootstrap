import React, { useContext } from "react";
import { data } from "../App";

export const Hanburger = () => {
  const { toogle, settogle } = useContext(data);
  return (
    <div className="text-white">
      {/* <button onClick={() => settogle(!toogle)}>X</button> */}

    </div>
  );
};
