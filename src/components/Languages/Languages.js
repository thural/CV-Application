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

const Languages = () => {

  const [list, setList] = useReducer(listReducer, []);

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
    event.preventDefault();
    const value = event.target.value;
    setList({ id, type: "save", value })
  };

  return (
    <div className="Languages">
      <h3>Languages</h3>

      {
        list.map(({ id, readOnly, value }) => (
          <form key={id} onSubmit={(e) => save(e, id)}>
            <input
              type="input"
              name="lang"
              placeholder="language"
              defaultValue={value}
              readOnly={readOnly}
              required
            ></input>
            {readOnly && <button type="button" onClick={e => edit(id)}>edit</button>}
            {!readOnly && <button type="submit" >save</button>}
          </form>
        ))
      }

      <form key={form.id} onSubmit={add}>
        <input
          type="input"
          name="lang"
          placeholder="language"
          required
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="submit" >+</button>
      </form>

    </div>
  )
}

export default Languages