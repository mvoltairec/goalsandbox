import React from "react";
import ReactDOM from "react-dom";
import Dropdown from './Dropdown';
import AddDailyGoal from './AddDailyGoal';

import "./styles.css";


function App() {
  return (
    <div className="App">
      <AddDailyGoal />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
