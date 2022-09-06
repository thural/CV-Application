import React, { Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    experience: [
      {
        startDate: null,
        endDate: null,
        title: "",
        description: "",
        id: uniqid()
      },
    ],
    job: {
      startDate: null,
      endDate: null,
      title: "",
      description: "",
      id: uniqid()
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state)
  }
  render() {
    return (
      <div>
        {
          this.state.experience.map(job => (
            <div key={job.id}>
              <h1>Experience</h1>
              <div className="job">
                <div className="date">
                  <input type="date" id="startDate" name="startDate" onChange={(e) => this.handleChange(e)}></input>
                  <p>to</p>
                  <input type="date" id="endDate" name="endDate" onChange={(e) => this.handleChange(e)}></input>
                </div>
                <input type="text" id="title" name="title" placeholder="job title" onChange={(e) => this.handleChange(e)}></input>
                <div className="textarea">
                  <textarea id="description" name="description"
                    minLength="32"
                    rows="6"
                    maxLength="320"
                    placeholder="experience"
                    onChange={(e) => this.handleChange(e)}
                  >
                  </textarea>
                </div>
              </div>
              <button type="button" onClick={() => this.props.handleEdit("experience", this.state)}>Save</button>
            </div>
          ))
        }
      </div>
    )
  }
};

export default Experience