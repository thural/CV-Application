import React, { useReducer } from "react";
import uniqid from "uniqid";

function listReducer(state, { type, id, form, value }) {
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
        if (listItem.id == id) return { ...listItem, value, readOnly: true }
        else return listItem
      });

    default: return state
  }
};

function formReducer(state, { name, value }) {
  return { ...state, name, value }
};

const Skills = () => {

  const [list, setList] = useReducer(listReducer,
    [
      {
        name: "skill",
        value: "Javascript",
        id: uniqid(),
        readOnly: true,
      },
    ]
  );

  const [form, setForm] = useReducer(formReducer,
    {
      name: "",
      value: "",
      id: uniqid(),
      readOnly: false,
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
  };

  const edit = (id) => {
    setList({ id, type: "edit" })
  };

  const save = (event, id) => {
    const value = event.target.value;
    setList({ id, type: "save", value })
  };


  return (
    <>
      <h3>Skills</h3>

      {
        list.map(({ id, readOnly, value }) => (
          <div key={id}>
            <input
              type="input"
              name="skill"
              placeholder="skill"
              defaultValue={value}
              readOnly={readOnly}
            ></input>
            {readOnly && <button type="button" onClick={(e) => edit(id)}>edit</button>}
            {!readOnly && <button type="button" onClick={(e) => save(e, id)}>save</button>}
          </div>
        ))
      }


      <form key={form.id}>
        <input
          type="input"
          name="skill"
          placeholder="skill"
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="submit" onClick={e => add(e)}>add</button>
      </form>

    </>
  )
};

export default Skills