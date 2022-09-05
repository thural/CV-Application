import React, { Component } from "react";
import Personal from "./components/Personal";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <form>
          <Personal />
          <div className="side content">
            <Skills />
            <Languages />
          </div>
          <div className="main content">
            <Profile />
            <Experience />
            <Education />
          </div>
        </form>
      </div>)
  }
};

export default App;