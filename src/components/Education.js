import React, { Component } from "react";

class Education extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <h1>Education</h1>
        <div className="education">
          <div className="date">
            <input type="date" id="startDate" name="startDate"></input>
            <input type="date" id="endDate" name="endDate"></input>
          </div>
          <input type="text" id="title" name="title" placeholder="education title"></input>
        </div>
      </div>
    )
  }
};

export default Education