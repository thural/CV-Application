import React, { useReducer, useState } from "react";
import uniqid from "uniqid";

function listReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.job];
    case 'edit':
      return state.map(job => {
        if (job.id == action.id) {
          job.readOnly = false
          return job
        } else return job
      });
    case 'save':
      return state.map(job => {
        if (job.id == action.id) {
          job.value = action.value
          job.readOnly = false
          return job
        } else return job
      });
    default:
      return state
  }
};

const Experience = () => {

  const [list, setList] = useReducer(listReducer,
    {
      startDate: null,
      endDate: null,
      title: "Network Engineer",
      description: "done this .. done that...",
      id: uniqid(),
      readOnly: true
    },
  );

  const [job, setJob] = useState(
    {
      startDate: null,
      endDate: null,
      title: "",
      description: "",
      id: uniqid(),
      readOnly: false
    }
  )

  const add = (job) => {
    setList({ job, type: "add" })
  };
  
  const edit = (id) => {
    setList({ id, type: "edit" })
  };
  
  const save = (e, id) => {
    const value =  e.target.value;
    setList({ id, type: "save", value })
  };

  const handleChange = (e) => {
    setJob({ [e.target.id]: e.target.value });
    console.log(list)
  };

  return (
    <div>
      <h1>Experience</h1>

      {
        list.map(job => (

            <div className="job" key={job.id}>
              <div className="date">
                <input type="date" id="startDate" name="startDate" onChange={(e) => handleChange(e)}></input>
                <p>to</p>
                <input type="date" id="endDate" name="endDate" onChange={(e) => handleChange(e)}></input>
              </div>
              <input type="text" id="title" name="title" placeholder="job title" onChange={(e) => handleChange(e)}></input>
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
              {skill.readOnly && <button type="button" onClick={edit(skill.id)}>edit</button>}
              {!skill.readOnly && <button type="button" onClick={(e) => save(e, skill.id)}>save</button>}
            </div>

        ))
      }

      <form key={job.id}>
        <div className="job">
          <div className="date">
            <input type="date" id="startDate" name="startDate" onChange={(e) => handleChange(e)}></input>
            <p>to</p>
            <input type="date" id="endDate" name="endDate" onChange={(e) => handleChange(e)}></input>
          </div>
          <input type="text" id="title" name="title" placeholder="job title" onChange={(e) => handleChange(e)}></input>
          <div className="textarea">
            <textarea id="description" name="description"
              minLength="32"
              rows="6"
              maxLength="320"
              placeholder="experience"
              onChange={(e) => handleChange(e)}
            >
            </textarea>
          </div>
        </div>
        <button type="submit" onClick={add(skill)}>add</button>
      </form>
    </div>
  )
};

export default Experience