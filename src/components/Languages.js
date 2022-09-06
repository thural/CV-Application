import React, { Component } from "react";
import uniqid from "uniqid";

class Languages extends Component {

  state = {
    languages: [
      { language: "", id: uniqid() }
    ],
    language: { language: "", id: uniqid() }
  }
  handleChange(e) {
    this.setState({
      language: { [e.target.id]: e.target.value }
    });
    console.log(this.state)
  }
  render() {
    return (
      <ul>
        {
          this.state.languages.map(language => (
            <div key={language.id}>
              <h4>Languages</h4>
              <input
                type="input"
                id="language"
                name="language"
                placeholder="language"
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

export default Languages