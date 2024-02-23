import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import RealTime from "./components/RealTime";
// import ArraysDestucturing from "./components/ArraysDestucturing";
// import cars from "./data";
import EventHandling from "./components/EventHandling";
import ComplexState from "./components/ComplexStates";
import FormChallenge from "./components/NewFormChallenge";

// const [tesla, honda] = cars;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//       <th>Color</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{tesla.coloursByPopularity}</td>
//       <td>{tesla.speedStats.topSpeed}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{honda.speedStats.topSpeed}</td>
//       <td>{honda.coloursByPopularity}</td>
//     </tr>
//   </table>
// );
//root.render(<EventHandling />);

//root.render(<ComplexState />);
root.render(<FormChallenge />);
