import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BootstrapIcons from "./Component/BootstrapIcons";
import { HomeRouter } from "./HomeRouter";
import { Navbar } from "./Component/Navbar";
import { Footer } from "./Component/SVGCOMPONET/Footer";
import { SetTimeout } from "./SetTimeout";
import MyModal from "./Component/Mymodel";
// import { Movieapi } from "./Movieapi";
import { Chat } from "./Chat.jsx";


const data = createContext();
const product = createContext();
const dro = createContext();
const hanlesui = createContext();
function App() {
  const [toogle, settogle] = useState(false);
  const [drop, setdeop] = useState(false);
  const [query, setquery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const to = { toogle, settogle };
  const quer = { query, setquery };
  const version = { drop, setdeop };
  const ui = { isOpen, setIsOpen };
  console.log(isOpen)
  return (
    <div>
      <data.Provider value={to}>
        <product.Provider value={quer}>
          <dro.Provider value={version}>
            <hanlesui.Provider value={ui}>
            <Navbar />

            {/* <Movieapi/> */}
   
            <Routes>
              <Route path="/" element={<HomeRouter />}></Route>
              <Route path="/icon" element={<BootstrapIcons />}></Route>
            </Routes>
            <Footer />
            <SetTimeout />
            <MyModal/>
            <Chat />
            </hanlesui.Provider>
          </dro.Provider>
        </product.Provider>
      </data.Provider>
    </div>
  );
}
export default App;
export { data, product, dro,hanlesui };
