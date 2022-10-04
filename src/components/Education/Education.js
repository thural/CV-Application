import React, { useReducer } from "react";
import uniqid from "uniqid";
import './Education.css'

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

const Education = () => {

  const [list, setList] = useReducer(listReducer, []);

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
    <div className="Education">
      <h1>Education</h1>

      {
        list.map(school => (

          <form className="school" key={school.id} onSubmit={(e) => save(e, school.id)}>
            <div className="date">
              <input type="date"
                id="startDate"
                name="startDate"
                defaultValue={school.startDate}
                readOnly={school.readOnly}
                required
              >
              </input>
              <p>to</p>
              <input
                type="date"
                id="endDate"
                name="endDate"
                defaultValue={school.endDate}
                readOnly={school.readOnly}
                required
              >
              </input>
            </div>
            <input type="text"
              id="title"
              name="title"
              defaultValue={school.title}
              readOnly={school.readOnly}
              placeholder="school title"
              required
            >
            </input>
            <div className="textarea">
              <textarea id="description" name="description"
                minLength="32"
                rows="6"
                maxLength="320"
                placeholder="education"
                defaultValue={school.description}
                readOnly={school.readOnly}
                required>
              </textarea>
            </div>
            {school.readOnly && <button type="button" onClick={(e) => edit(school.id)}>edit</button>}
            {!school.readOnly && <button type="submit">save</button>}
          </form>

        ))}

      <form className="school" onSubmit={add}>
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
        <input
          type="text"
          id="title"
          name="title"
          placeholder="job title"
          required
          onChange={(e) => handleChange(e)}>
        </input>
        <div className="textarea">
          <textarea
            id="description"
            name="description"
            minLength="32"
            rows="6"
            maxLength="320"
            placeholder="education"
            onChange={(e) => handleChange(e)}
            required>
          </textarea>
        </div>
        <button type="submit" >add</button>
      </form>
    </div>
  )
};

export default Education