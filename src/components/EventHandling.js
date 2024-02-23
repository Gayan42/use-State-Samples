import React, { useState } from "react";

var name;

function EventHandling() {
  const [heading, changeHeading] = useState("Hello");
  const [bgcolor, changecolor] = useState("white");
  // const [lastName, changeHeading] = useState("");

  var isOver = false;

  function clickHandle() {
    changeHeading("Submit " + name);
  }

  function mouseOverEvent() {
    console.log("over");
    changecolor("black");
  }

  function mouseOutEvent() {
    console.log("out");
    changecolor("white");
  }

  function changeEvent(event) {
    changeHeading("Hello " + event.target.value);
    name = event.target.value;
    console.log(event.target.value);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input
        onChange={changeEvent}
        type="text"
        placeholder="What's your name?"
      />
      <button
        style={{ backgroundColor: `${bgcolor}` }}
        onClick={clickHandle}
        onMouseOver={mouseOverEvent}
        onMouseOut={mouseOutEvent}
      >
        Submit
      </button>
    </div>
  );
}

export default EventHandling;
