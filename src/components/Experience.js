import React, {Component} from "react";

class Experience extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <h1>Experience</h1>
        <div className="job">
        <div className = "date">
          <input type="date" id="startDate" name="startDate"></input>
          <input type="date" id="endDate" name="endDate"></input>
        </div>
        <input type="text" id="title" name="title" placeholder="job title"></input>
        <textarea id="description" name="description"
        minlength="32"
        rows="10"
        cols="50"
        maxlength="320"
        placeholder="profile"
        >
        </textarea>
      </div>
      </div>
    )
  }
};

export default Experience