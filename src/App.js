import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navigationbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/inputArea";

function App() {
  return (
    <>
      <Navbar name="sanjeev" />
      <div className="container">
        <InputForm heading="Enter your text here" />
      </div>
    </>
  );
}

export default App;
