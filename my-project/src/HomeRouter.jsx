import React from "react";
import { Home } from "./Component/Home";
import { Navbar } from "./Component/Navbar";

export const HomeRouter = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};
