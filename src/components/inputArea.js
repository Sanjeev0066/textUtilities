import React, { useState } from "react";

export default function InputForm(props) {
  const [first, setfirst] = useState("i am the only one here");
  function toCaps() {
    document.getElementById("exampleFormControlTextarea1").value =
      first.toUpperCase();
  }
  function trimSpace() {
    let a = first.trim(" ");

    a = a
      .split(" ")
      .filter((word) => word.length > 0)
      .join(" ");

    document.getElementById("exampleFormControlTextarea1").value = a;
  }
  function OnChangeHandler(event) {
    console.log("I am changed");
    setfirst(event.target.value);
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label
            className="check my-3 mx-3"
            htmlFor="exampleFormControlTextarea1"
          >
            {props.heading}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="12"
            value={first}
            onChange={OnChangeHandler}
          ></textarea>
          <button
            type="button"
            className="btn btn-success mx-1 my-2"
            onClick={toCaps}
          >
            Caps
          </button>
          <button
            type="button"
            className="btn btn-success mx-1 my-2"
            onClick={trimSpace}
          >
            RemoveSpace
          </button>
        </div>
      </form>
    </div>
  );
}
