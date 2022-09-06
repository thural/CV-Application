import React, { Component } from "react";

class Profile extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <div className="textarea">
        <textarea
          id="profile"
          name="profile"
          minLength="32"
          rows="6"
          maxLength="320"
          placeholder="profile"
        >
        </textarea>
        </div>
      </div>
    )
  }
};

export default Profile