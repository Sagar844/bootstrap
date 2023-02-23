import axios from "axios";
import Hamburger from "hamburger-react";
import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BootstrapIcons from "./Component/BootstrapIcons";
import { HomeRouter } from "./HomeRouter";
import { Navbar } from "./Component/Navbar";
import { Footer } from "./Component/SVGCOMPONET/Footer";

const data = createContext();
const product = createContext();
const  dro =createContext();

function App() {
  const [toogle, settogle] = useState(false);
  const [drop, setdeop] = useState(false);
  const [query, setquery] = useState("");
  const to = { toogle, settogle };
  const quer = { query, setquery };
  const version = {drop ,setdeop}

  return (
    <div>
      <data.Provider value={to}>
        <product.Provider value={quer}>
          <dro.Provider value={version}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeRouter />}></Route>
            <Route path="/icon" element={<BootstrapIcons />}></Route>
          </Routes>
          <Footer />
          </dro.Provider>
        </product.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data, product, dro };
