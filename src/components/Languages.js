import React, { useState } from "react";
import uniqid from "uniqid";

const Languages = () => {
  const [languages, setLanguage] = useState([{ language: "English", id: uniqid() }])

  const handleChange = (e) => {
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
  return (
    <div>
      {
        languages.map(language => (
          <div key={language.key}>
            <h4>Languages</h4>
            <input
              type="input"
              id="language"
              name="language"
              placeholder="language"
              onChange={(e) => handleChange(e)}
            >
            </input>
          </div>
        ))
      }
    </div>
  )
}

export default Languages