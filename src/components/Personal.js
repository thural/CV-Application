import React, { Component } from "react";
import style from "./Personal.css"

class Personal extends Component {
  state = {

  }
  render() {
    return (
      <div className="Personal">
        <div className="photo"><div><h1>add photo</h1></div></div>
        <div>
          <div className="headline">
            <input type="text" id="name" name="name" placeholder="name"></input>
            <input type="text" id="title" name="title" placeholder="title"></input>
          </div>
          <div className="details">
            <input type="text" id="address" name="address" placeholder="address"></input>
            <input type="email" id="email" name="email" placeholder="email address"></input>
            <input type="tel" id="phone" name="phone" placeholder="phone number"></input>
          </div>
        </div>
      </div>
    )
  }
};

export default Personal