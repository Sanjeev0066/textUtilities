import React, { useState } from "react";

export default function Navbar(props) {
  const [mode, setmode] = useState("LIGHT MODE");
  function handleMe() {
    if (mode === "LIGHT MODE") {
      setmode("DARK MODE");
    } else {
      setmode("LIGHT MODE");
    }
  }

  return (
    <div className={mode}>
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          {props.name}
        </a>
        <a className="nav-link" href="/">
          Home
        </a>
        <li className="form-check form-switch" style={{ width: 9 + "vw" }}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={handleMe}
          />
          {mode}
        </li>
      </nav>
      <ul className="unorders"></ul>
    </div>
  );
}
