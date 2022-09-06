import React, { Component } from "react";
import Personal from "./components/Personal";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import style from "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <form>
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

        </form>
      </div>)
  }
};

export default App;