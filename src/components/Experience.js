import React, { useReducer } from "react";
import uniqid from "uniqid";

function listReducer(state, { type, id, form, values }) {
  switch (type) {
    case 'add':
      return [...state, form];

    case 'edit':
      return state.map(listItem => {
        if (listItem.id == id) return { ...listItem, readOnly: false }
        else return listItem
      });

    case 'save':
      return state.map(listItem => {
        if (listItem.id == id) return { ...listItem, ...values, readOnly: true }
        else return listItem
      });

    default: return state
  }
};

function formReducer(state, { name, value }) {
  return { ...state, [name]: value }
};

const Experience = () => {

  const [list, setList] = useReducer(listReducer,[]);

  const [form, setForm] = useReducer(formReducer,
    {
      startDate: null,
      endDate: null,
      title: "",
      description: "",
      id: uniqid(),
      readOnly: false
    }
  );

  const handleChange = (event) => {
    setForm(event.target)
  };

  const add = (e) => {
    e.preventDefault();
    form.readOnly = true;
    setList({ form, type: "add" });
    form.id = uniqid();
    e.target.reset()
  };

  const edit = (id) => {
    setList({ id, type: "edit" })
  };

  const save = (e, id) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {};
    for (let [key, value] of formData) { values[key] = value };
    setList({ id, type: "save", values });
  };

  return (
    <>
      <h1>Experience</h1>

      {
        list.map(job => (

          <form className="job" key={job.id} onSubmit={(e) => save(e, job.id)}>
            <div className="date">
              <input type="date"
                id="startDate"
                name="startDate"
                defaultValue={job.startDate}
                readOnly={job.readOnly}
                required>
              </input>
              <p>to</p>
              <input
                type="date"
                id="endDate"
                name="endDate"
                defaultValue={job.endDate}
                readOnly={job.readOnly}
                required>
              </input>
            </div>
            <input type="text"
              id="title"
              name="title"
              defaultValue={job.title}
              readOnly={job.readOnly}
              placeholder="job title"
              required>
            </input>
            <div className="textarea">
              <textarea id="description" name="description"
                minLength="32"
                rows="6"
                maxLength="320"
                placeholder="experience"
                defaultValue={job.description}
                readOnly={job.readOnly}
                required>
              </textarea>
            </div>
            {job.readOnly && <button type="button" onClick={(e) => edit(job.id)}>edit</button>}
            {!job.readOnly && <button type="submit">save</button>}
          </form>

        ))}

      <form className="job" onSubmit={add}>

        <div className="date">
          <input
          type="date"
          id="startDate"
          name="startDate"
          required
          onChange={(e) => handleChange(e)}>
          </input>
          <p>to</p>
          <input
          type="date"
          id="endDate"
          name="endDate"
          required
          onChange={(e) => handleChange(e)}>
          </input>
        </div>

        <input type="text" id="title" name="title" required placeholder="job title" onChange={(e) => handleChange(e)}></input>
        
        <div className="textarea">
          <textarea id="description" name="description"
            minLength="32"
            rows="6"
            maxLength="320"
            placeholder="experience"
            required
            onChange={(e) => handleChange(e)}>
          </textarea>
        </div>

        <button type="submit" >add</button>
      </form>

    </>
  )
};

export default Experience