import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  state = {
    education: [
      {
        startDate: null,
        endDate: null,
        title: "",
        id: uniqid()
      }
    ],
    school: {
      startDate: null,
      endDate: null,
      title: ""
    }
  }
  handleChange(e) {
    this.setState({
      school: { [e.target.id]: e.target.value }
    });
    console.log(this.state)
  }
  render() {
    return (
      <div>
        {
          this.state.education.map(school => (
            <div key={school.id}>
              <h1>Education</h1>
              <div className="education">
                <div className="date">
                  <input type="date" id="startDate" name="startDate" onChange={(e) => this.handleChange(e)}></input>
                  <p>to</p>
                  <input type="date" id="endDate" name="endDate" onChange={(e) => this.handleChange(e)}></input>
                </div>
                <input type="text" id="title" name="title" placeholder="education" onChange={(e) => this.handleChange(e)}></input>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
};

export default Education