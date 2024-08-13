import React from "react";
import ReactDOM from "react-dom";
import Navbar from "reactfirst/Navbar";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import { Provider } from "react-redux";

const NavBar = () => (
  <>
   <header className="nav-style">
     <h1>Microfront End</h1>
     <p>This is the header</p>
     <p>Welcome</p>
   </header>
  <main>
    {/* <App/> */}
  <Navbar/>
  </main>
  </>
);
ReactDOM.render(<NavBar />, document.getElementById("app"));
