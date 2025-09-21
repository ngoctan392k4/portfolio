import skills_data from "../../assets/skills_data";
import theme_pattern from "../../assets/theme_pattern.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <div className="skill-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="skills-section">
        {skills_data.map((skill, index) => {
          return (
            <div key={index} className="skill">
              <div className="skill-image-container">
                <img src={skill.imageSrc} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
