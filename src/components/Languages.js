import React, { useReducer } from "react";
import uniqid from "uniqid";

function listReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.language];
    case 'edit':
      return state.map(language => {
        if (language.id == action.id) {
          language.readOnly = false
          return language
        } else return language
      });
    case 'save':
      return state.map(language => {
        if (language.id == action.id) {
          language.value = action.value
          language.readOnly = false
          return language
        } else return language
      });
    default:
      return state
  }
};

function languageReducer(state, languageName) {
  const update = { ...state };
  update.value = languageName;
  return update
};

const Languages = () => {
  const [list, setList] = useReducer(listReducer, [{ value: "English", id: uniqid(), readOnly: true }]);
  const [language, setLanguage] = useReducer(languageReducer, { value: "", id: uniqid(), readOnly: false });

  const add = (language) => {
    setList({ language, type: "add" })
  };

  const edit = (id) => {
    setList({ id, type: "edit" })
  };

  const save = (e, id) => {
    const value = e.target.value;
    setList({ id, type: "save", value })
  };

  const handleChange = (e) => {
    e.preventDefault();
    setLanguage(e.target.value)
  };

  return (
    <div>
      {
        list.map(language => (
          <div key={language.id}>
            <h4>Languages</h4>
            <input
              type="input"
              id="language"
              name="language"
              placeholder="language"
              onChange={(e) => handleChange(e)}
            >
            </input>
            {language.readOnly && <button type="button" onClick={edit(language.id)}>edit</button>}
            {!language.readOnly && <button type="button" onClick={(e) => save(e, language.id)}>save</button>}
          </div>
        ))
      }

      <form key={language.id}>
        <input
          type="input"
          id="language"
          name="language"
          placeholder="language"
          onChange={(e) => handleChange(e)}
        >
        </input>
        <button type="submit" onClick={add(language)}>add</button>
      </form>

    </div>
  )
}

export default Languages