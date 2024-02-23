import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function add() {
    console.log(count);
    setCount(count + 1);
  }

  function substract() {
    console.log(count);
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1 className="number">{count}</h1>
      <input type="submit" value="+" onClick={add} className="btn"></input>
      <input
        type="submit"
        value="-"
        onClick={substract}
        className="btn"
      ></input>
    </div>
  );
}

export default App;
