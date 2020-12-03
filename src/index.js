import React from "react"; //The library that allows us to write JSX
import ReactDOM from "react-dom"; //The library that interacts with the DOM
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
); //Grabs elements from the HTML file and replaces it with our React app

reportWebVitals();
