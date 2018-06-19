import React, { Component } from "react";
import "./styles.css";

class AddDailyGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyGoal: ""
    }
  };
  render() {
    return(
      <div className="addGoal">
        <p>Create your daily goal!</p>
        <textarea className="dailyGoal" name="description" defaultValue=""/> 
      </div>
    )
  }
};

export default AddDailyGoal;