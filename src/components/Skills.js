import React, { useReducer } from "react";
import uniqid from "uniqid";

function listReducer(state, action) {

  switch (action.type) {
    case 'add':
      const update = [...state];
      update.push(action.skill);
      return update;
    case 'edit':
      return state.map(skill => {
        if (skill.id == action.id) {
          skill.readOnly = false
          return skill
        } else return skill
      });
    case 'save':
      return state.map(skill => {
        if (skill.id == action.id) {
          skill.value = action.value
          return skill
        } else return skill
      });
    default:
      return state
  }
};

function skillReducer(state, skillName) {
  const update = { ...state };
  update.value = skillName;
  return update
};


///////////////////////////////////////////////////////////////

const Skills = () => {

  const [list, setList] = useReducer(listReducer,
    [
      {
        value: "Javascript",
        id: uniqid(),
        readOnly: true,
      },
    ]
  );

  const [skill, setSkill] = useReducer(skillReducer,
    {
      value: "",
      id: uniqid(),
      readOnly: true,
    }
  );

  const add = () => {
    setList({ skill, type: "add" })
  };

  const edit = (id) => {
    setList({ id, type: "edit" })
  };

  const save = (id, value) => {
    setList({ id, type: "save", value })
  };

  const handleChange = (e) => {
    setSkill(e.target.value)
  };


  return (
    <div>
      <h3>Skills</h3>

      {
        list.map(skill => (

          <form key={skill.id}>
            <input
              type="input"
              id="skill"
              name="skill"
              placeholder="skill"
              readOnly={skill.readOnly}
            >
            </input>
            {skill.readOnly && <button type="submit" onClick={edit(skill.id)}>edit</button>}
            {!skill.readOnly && <button type="submit" onClick={(e) => save(skill.id, e.target.value)}>save</button>}
          </form>

        ))}

      <form key={skill.id}>
        <input
          type="input"
          id="skill"
          name="skill"
          placeholder="skill"
          onChange={(e) => handleChange(e)}
        >
        </input>
        <button type="submit" onClick={add()}>add</button>
      </form>

    </div>
  )
};

export default Skills