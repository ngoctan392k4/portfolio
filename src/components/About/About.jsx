import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_image from "../../assets/profile_image.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I have experience building data pipelines with SQL, Python, and
              cloud tools like GCP and BigQuery. My projects include automating
              financial reports, designing data models with dbt, and creating
              dashboards in Looker Studio.
            </p>
            <p>
              I'm passionate about turning raw data into meaningful insights. I
              enjoy building efficient pipelines and exploring new technologies
              to make data more reliable and accessible.
            </p>
          </div>

        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
