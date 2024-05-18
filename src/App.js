import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navigationbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "./components/inputArea";

function App() {
  const [mode, setmode] = useState("LIGHT MODE");
  const toggleMode = function toggleMode() {
    if (mode === "LIGHT MODE") {
      setmode("DARK MODE");
      document.body.style.backgroundColor = "rgb(11 10 10)";
      console.log(document.getElementsByClassName("navbar"));
      document.getElementById("navbar").style.color = "white";
      console.log("i ma cllaed");
    } else {
      setmode("LIGHT MODE");
      console.log("i ma cllaed setting light mode");
      document.body.style.backgroundColor = "rgb(131, 120, 178)";
      document.getElementById("navbar").style.color = "black";
    }
  };

  return (
    <>
      <Navbar name="sanjeev" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <InputForm heading="Enter your text here" />
      </div>
    </>
  );
}

export default App;
