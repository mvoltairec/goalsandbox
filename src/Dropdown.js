import React, { Component } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  render() {
    return (
      <div className="dropdown">
        <select onChange={e => this.handleSelect(e)}>
          <option value="fitness">fitness</option>
          <option value="wellness">wellness</option>
          <option value="programming">programming</option>
          <option value="add new goal">add new goal</option>
        </select>
      </div>
    );
  }

  handleSelect(e) {
    console.log(e.target.value);
  }
}

export default Dropdown;
