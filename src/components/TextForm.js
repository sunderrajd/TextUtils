import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked" + Text);
    let newText = Text.toUpperCase();
    SetText(newText);
  };
  const handleLoClick = () => {
    // console.log("uppercase was clicked" + Text);
    let newText = Text.toLowerCase();
    SetText(newText);
  };

  const handleReverseClick = () => {
    let newText = Text.split("").reverse().join("");
    SetText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("changing");
    SetText(event.target.value);
  };

  const [Text, SetText] = useState("Enter the Text Here");
  return (
    <>
      <div className="container">
        <h1>{props.Heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          ConvertToUpperCase
        </button>
        <buttion className="btn btn-primary mx-1" onClick={handleLoClick}>
          CovertToLowerCase
        </buttion>
        <buttion className="btn btn-primary mx-1" onClick={handleReverseClick}>
          ReverseTheWords{" "}
        </buttion>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary </h1>
        <p>
          {Text.split(" ").length} Words {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes To read</p>
        <h2>preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
