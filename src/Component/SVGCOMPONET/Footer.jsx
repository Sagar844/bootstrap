import React, { useContext } from "react";
import { dro } from "../../App";

export const Footer = () => {
  const { setdeop } = useContext(dro);

  const handle = (e) => {
    if (e.target.id === "container") setdeop(false);
  };

  return (
    <div>
      <footer
        id="container"
        onClick={handle}
        className="bg-gray-700 container flex-wrap py-40 flex space-x-32 text-white "
      >
        <div className=" space-y-2 mx-8">
          <h1>Bootstrap</h1>
          <img
            className="w-20"
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
            alt=""
          />
          <h1>
            Designed and built with all the love in the <br></br> world by the
            Bootstrap team with the help of our contributors.
          </h1>
          <h1>Code licensed MIT, docs CC BY 3.0.</h1>
          <h1>Currently v5.3.0-alpha1.</h1>
        </div>

        <div>
          <h6>Links</h6>
          <h1>Home</h1>
          <h1>Docs</h1>
          <h1>Examples</h1>
          <h1>Icons</h1>
          <h1>Themes</h1>
          <h1>Blog</h1>
          <h1>Swag Store</h1>
        </div>

        <div>
          <h6> Guides</h6>
          <h1>Getting started</h1>
          <h1>Starter template</h1>
          <h1>Webpack</h1>
          <h1>Parcel</h1>
          <h1>Vite</h1>
        </div>

        <div>
          <h6>Projects</h6>
          <h6>Bootstrap 5 </h6>
          <h1>Bootstrap 4</h1>
          <h1>Icons</h1>
          <h1>RFS</h1>
          <h1>npm starter</h1>
        </div>
      </footer>
    </div>
  );
};
