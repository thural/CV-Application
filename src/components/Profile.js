import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState("")

  const handleChange = (e) => {
    setProfile(e.target.value);
    console.log(profile)
  }

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
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
    </div>
  )
};

export default Profile