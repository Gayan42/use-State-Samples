import React, { useState } from "react";

function RealTime() {
  var hours;
  var minutes;
  var seconds;
  const now = new Date().toLocaleTimeString();
  console.log(now);
  const [runTime, getTimeNow] = useState(0);

  function sendTime() {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();
    seconds = new Date().getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
    getTimeNow(hours + ":" + minutes + ":" + seconds);
  }

  //setInterval(sendTime, 1000);

  return (
    <div className="App">
      <h1 className="number">{runTime}</h1>
      <button className="btn" onClick={sendTime}>
        Submit
      </button>
    </div>
  );
}

export default RealTime;
