import React, { Component } from "react";
import uniqid from "uniqid";

class Skills extends Component {

  state = {
    skills: [
      { skill: "", id: uniqid() }
    ],
    skill: { skill: "", id: uniqid() }
  }
  handleChange(e) {
    this.setState({
      skill: {[e.target.id]: e.target.value}
    });
    console.log(this.state)
  }
  render() {
    return (
      <ul>
        {
          this.state.skills.map(skill => (
            <div key={skill.id}>
              <h3>Skills</h3>
              <input
                type="input"
                id="skill"
                name="skill"
                placeholder="skill"
                onChange={(e) => this.handleChange(e)}
              ></input>
              <button type="button" onClick={() => this.props.handleEdit("skills", this.state)}>Save</button>
            </div>
          ))
        }
      </ul>
    )
  }
}
export default Skills