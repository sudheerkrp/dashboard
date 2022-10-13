import React, {useEffect} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {FiSettings} from "react-icons/fi";
import {TooltipComponent} from "@syncfusion/ej2-react-popups"

import {Navbar, Footer, Sidebar, ThemeSettings} from './components';
import {Ecommerce, Orders, Kanban, Area, Bar, Pie, Financial, Calendar ,ColorPicker, ColorMapping, Customers, Editor, Employees, Line, Pyramid, Stacked} from './pages';
import "./App.css";
import {useStateContext} from "./contexts/ContextProvider";

const App = () => {
  const {activeMenu} = useStateContext();
  return (
    <div>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{zIndex: "1000"}}>
            <TooltipComponent content="Settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text:white" style={{background: "blue", borderRadius: "50%"}}>
                <FiSettings></FiSettings>
              </button>
            </TooltipComponent>
          </div>
          {(activeMenu)?(
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar/>
            </div>):(
            <div className="w-0 dark:bg:secondary-dark-bg">
              <Sidebar/>
            </div>
          )}
          <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${(activeMenu)?("md:ml-72"):("flex-2")}`}>
            <div className="fixed md-static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>
            <div>
              <Routes>
                <Route exact path="/" element={<Ecommerce/>}></Route>
                <Route exact path="/ecommerce" element={<Ecommerce/>}></Route>

                <Route exact path="/orders" element={<Orders/>}></Route>
                <Route exact path="/employees" element={<Employees/>}></Route>
                <Route exact path="/customers" element={<Customers/>}></Route>

                <Route exact path="/kanban" element={<Kanban/>}></Route>
                <Route exact path="/editor" element={<Editor/>}></Route>
                <Route exact path="/calendar" element={<Calendar/>}></Route>
                <Route exact path="/color-picker" element={<ColorPicker/>}></Route>

                <Route exact path="/line" element={<Line/>}></Route>
                <Route exact path="/area" element={<Area/>}></Route>
                <Route exact path="/bar" element={<Bar/>}></Route>
                <Route exact path="/pie" element={<Pie/>}></Route>
                <Route exact path="/financial" element={<Financial/>}></Route>
                <Route exact path="/color-mapping" element={<ColorMapping/>}></Route>
                <Route exact path="/pyramid" element={<Pyramid/>}></Route>
                <Route exact path="/stacked" element={<Stacked/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;