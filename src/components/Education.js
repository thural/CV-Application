import React, { useState, useReducer } from "react";
import uniqid from "uniqid";

const Education = () => {

  const [education, setEducation] = useReducer(listReducer,
    [
        {
          startDate: null,
          endDate: null,
          title: "",
          id: uniqid()
        },
      ]
  );

  const [school, setSchool] = useState ({
    startDate: null,
    endDate: null,
    title: "",
    id: uniqid()
  });

  handleChange = (e) => {
    setSchool({
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
                <input type="date" id="startDate" name="startDate" onChange={(e) => handleChange(e)}></input>
                <p>to</p>
                <input type="date" id="endDate" name="endDate" onChange={(e) => handleChange(e)}></input>
              </div>
              <input type="text" id="title" name="title" placeholder="education" onChange={(e) => handleChange(e)}></input>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Education