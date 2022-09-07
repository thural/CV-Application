import React, { Component } from "react";
import uniqid from "uniqid";

class Languages extends Component {

  state = {
    languages: [
      { language: "", id: uniqid() }
    ]
  }
  handleChange(e) {
    const id = e.target.key;
    const value = e.target.value;
    this.setState(state.languages.map(language => {
      if (language.id == id) {
        language.language = value
        return language
      } else return language
    }
    ));
    console.log(this.state)
  }
  render() {
    return (
      <div>
        {
          this.state.languages.map(language => (
            <div>
              <h4>Languages</h4>
              <input
                key={language.id}
                type="input"
                id="language"
                name="language"
                placeholder="language"
                onChange={(e) => this.handleChange(e)}
              ></input>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Languages