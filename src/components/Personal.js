import React, {Component} from "react";

class Personal extends Component {
  state = {

  }
  render() {
    return (
      <div>
      <input type="text" id="name" name="name" placeholder="name"></input>
      <input type="text" id="title" name="title" placeholder="title"></input>
      <input type="text" id="address" name="address" placeholder="address"></input>
      <input type="email" id="email" name="email" placeholder="email address"></input>
      <input type="tel" id="phone" name="phone" placeholder="phone number"></input>
      </div>
    )
  }
};

export default Personal