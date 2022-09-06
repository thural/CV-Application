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
      personal: {},
      profile: {},
      experience: [],
      education: [],
      skills: [],
      languages: []
    }
  }
  handleEdit = (keyName, localState) => {
    //e.target.preventDefault()
    if(keyName == "personal" || keyName == "profile"){
      this.setState({[keyName]:localState}) 
    } else this.setState({[keyName]:this.state[keyName].concat(localState)})
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <form>
          <Personal handleEdit={this.handleEdit} />
          <div className="content">
            <div className="side">
              <Skills handleEdit={this.handleEdit} />
              <Languages handleEdit={this.handleEdit} />
            </div>
            <div className="main">
              <Profile handleEdit={this.handleEdit} />
              <Experience handleEdit={this.handleEdit} />
              <Education handleEdit={this.handleEdit} />
            </div>
          </div>
        </form>
      </div>)
  }
};

export default App;