import React, { useState } from "react";
import uniqid from "uniqid";

const Skills = () => {
  const [skills, setSkills] = useState({

    all: [
      {
        skill: "",
        id: uniqid(),
        visible: false
      }
    ],

    current: {
      skill: "",
      id: uniqid(),
      visible: false
    }
    
  });

  const handleChange = (e) => {
    setSkills({
      current: {
        skill: e.target.value
      }
    })
  };

  const showForm = () => {
    setSkills({ current: { visible: true } })
  };

  const addSkill = () => {
    setSkills({ all: all.concat(current) })
  };


  return (
    <div>
      {
        skills.all.map(skill => (

          <form key={skill.id}>
            <h3>Skills</h3>
            <input
              type="input"
              id="skill"
              name="skill"
              placeholder="skill"
              onChange={(e) => handleChange(e)}
            >
            </input>
            <button type="submit" onClick={addSkill()}>save</button>
          </form>

        ))
      }
      {!skills.current.visible && <button onClick={showForm()}>add</button>}
    </div>
  )
}
export default Skills