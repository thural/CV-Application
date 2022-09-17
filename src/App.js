import React, { Component } from "react";
import Personal from "./components/Personal/Personal";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Languages from "./components/Languages/Languages";
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      personal: {},
      profile: {},
      experience: [],
      education: [],
      skills: [],
      languages: []
    }
  }

  render() {
    return (
      <div className="App">
        <Personal />
        <div className="content">
          <div className="side">
            <Skills />
            <Languages />
          </div>
          <div className="main">
            <Profile />
            <Experience />
            <Education />
          </div>
        </div>
      </div>)
  }
};

export default App;