import React, { Component } from "react";

class Profile extends Component {
  state = {
    profile: ""
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state)
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
            onChange={(e) => this.handleChange(e)}
          ></textarea>
        </div>
        <button
          type="button"
          onClick={() => this.props.handleEdit("profile", this.state)}
        >Save</button>
      </div>
    )
  }
};

export default Profile