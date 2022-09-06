import React, { Component } from "react";

class Experience extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <h1>Experience</h1>
        <div className="job">
          <div className="date">
            <input type="date" id="startDate" name="startDate"></input>
            <p>to</p>
            <input type="date" id="endDate" name="endDate"></input>
          </div>
          <input type="text" id="title" name="title" placeholder="job title"></input>
          <div className="textarea">
          <textarea id="description" name="description"
            minLength="32"
            rows="6"
            maxLength="320"
            placeholder="experience"
          >
          </textarea>
          </div>
        </div>
      </div>
    )
  }
};

export default Experience