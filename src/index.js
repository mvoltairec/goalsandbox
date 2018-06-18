import React from "react";
import ReactDOM from "react-dom";
import Dropdown from './Dropdown';
import "./styles.css";

function App() {
  return (
    <div className="App">
      <p>select a long term goal</p>
      <Dropdown />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
