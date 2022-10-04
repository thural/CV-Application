import React, { useState } from "react";
import './Profile.css'

const Profile = () => {
  const [profile, setProfile] = useState("")

  const handleChange = (e) => {
    setProfile(e.target.value);
  }

  return (
    <div className="Profile">
      <h1>Profile</h1>
      <div className="textarea">
        <textarea
          id="profile"
          name="profile"
          minLength="32"
          rows="6"
          maxLength="320"
          placeholder="profile"
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
    </div>
  )
};

export default Profile