import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer";

const store= configureStore({
  reducer:{
    user:reducer,
  },
 
})
const App = () => (
  <div > 
    <h1>I am the content of the host react</h1>
    <Provider  store={store}>
      <Navbar/>
    </Provider>
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
