import React, { useState } from "react";
import uniqid from "uniqid";

const Education = () => {
  const [education, setEducation] = useState(
    {
      all: [
        {
          startDate: null,
          endDate: null,
          title: "",
          id: uniqid()
        },
      ],
      school: {
        startDate: null,
        endDate: null,
        title: ""
      }
    }
  );

  handleChange = (e) => {
    setEducation({
      school: { [e.target.id]: e.target.value }
    });
    console.log(education)
  };

  return (
    <div>
      {
        education.all.map(school => (
          <div key={school.id}>
            <h1>Education</h1>
            <div className="education">
              <div className="date">
                <input type="date" id="startDate" name="startDate" onChange={(e) => this.handleChange(e)}></input>
                <p>to</p>
                <input type="date" id="endDate" name="endDate" onChange={(e) => this.handleChange(e)}></input>
              </div>
              <input type="text" id="title" name="title" placeholder="education" onChange={(e) => this.handleChange(e)}></input>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Education