import React, { useState } from "react";
import "./Personal.css"

const Personal = () => {

  const [details, setDetails] = useState({
    name: "",
    title: "",
    address: "",
    email: "",
    phone: ""
  })

  const handleChange = (e) => {
    setDetails({
      [e.target.id]: e.target.value
    });
  }

  return (
    <div className="Personal">
      <div className="photo"><div><h1>add photo</h1></div></div>
      <div>
        <div className="headline">
          <input
            type="text"
            id="name" name="name"
            placeholder="name"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="title"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="details">
          <input
            type="text"
            id="address"
            name="address"
            placeholder="address"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email address"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="phone number"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
      </div>
    </div>
  )
}

export default Personal