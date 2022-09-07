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
      <div>
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
            </div>
          ))
        }
      </div>
    )
  }
}
export default Skills