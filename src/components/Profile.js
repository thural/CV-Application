import React, { Component } from "react";

class Profile extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <textarea
          id="profile"
          name="profile"
          minlength="32"
          rows="10"
          cols="50"
          maxlength="320"
          placeholder="profile"
        >
        </textarea>
      </div>
    )
  }
};

export default Profile