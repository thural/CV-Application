import React, { Component } from "react";
import style from "./Personal.css"

class Personal extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    name: "",
    title: "",
    address: "",
    email: "",
    phone: ""
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state)
  }
  render() {
    return (
      <div className="Personal">
        <div className="photo"><div><h1>add photo</h1></div></div>
        <div>
          <div className="headline">
            <input type="text" id="name" name="name" placeholder="name" onChange={(e) => this.handleChange(e)}></input>
            <input type="text" id="title" name="title" placeholder="title" onChange={(e) => this.handleChange(e)}></input>
          </div>
          <div className="details">
            <input type="text" id="address" name="address" placeholder="address" onChange={(e) => this.handleChange(e)}></input>
            <input type="email" id="email" name="email" placeholder="email address" onChange={(e) => this.handleChange(e)}></input>
            <input type="tel" id="phone" name="phone" placeholder="phone number" onChange={(e) => this.handleChange(e)}></input>
          </div>
        </div>
        <button type="button" onClick={()=>this.props.handleEdit("personal", this.state)}>Save</button>
      </div>
    )
  }
};

export default Personal