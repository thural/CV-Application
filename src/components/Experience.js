import React, { useState } from "react";
import uniqid from "uniqid";

const Experience = () => {

  const [experience, setExperience] = useState(
    {
      jobs: [
        {
          startDate: null,
          endDate: null,
          title: "",
          description: "",
          id: uniqid()
        },
      ],
      job: {
        startDate: null,
        endDate: null,
        title: "",
        description: "",
        id: uniqid()
      }
    }
  );

  handleChange = (e) => {
    setExperience({
      job: {
        [e.target.id]: e.target.value
      }
    });
    console.log(experience)
  }

  return (
    <div>
      {
        Experience.jobs.map(job => (
          <div key={job.id}>
            <h1>Experience</h1>
            <div className="job">
              <div className="date">
                <input type="date" id="startDate" name="startDate" onChange={(e) => this.handleChange(e)}></input>
                <p>to</p>
                <input type="date" id="endDate" name="endDate" onChange={(e) => this.handleChange(e)}></input>
              </div>
              <input type="text" id="title" name="title" placeholder="job title" onChange={(e) => this.handleChange(e)}></input>
              <div className="textarea">
                <textarea id="description" name="description"
                  minLength="32"
                  rows="6"
                  maxLength="320"
                  placeholder="experience"
                  onChange={(e) => this.handleChange(e)}
                >
                </textarea>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default Experience