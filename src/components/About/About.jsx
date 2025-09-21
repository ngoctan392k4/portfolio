import "./About.css";
import theme_pattern from "../../assets/theme_pattern.png";
import profile_image from "../../assets/profile_image.png";
import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-section">
        <div className="about-para">
          <p>
            I am currently a fourth-year student at Troy University on-site based in Viet Nam
          </p>
          <p>
            I have experience building data pipelines with SQL, Python, and
            cloud tools like GCP and BigQuery. My projects include creating
            financial reports with SQL, designing data models with dbt, and creating
            dashboards in Looker Studio.
          </p>
          <p>
            I am passionate about turning raw data into meaningful insights. I
            enjoy building efficient pipelines and exploring new technologies to
            make data more reliable and accessible.
          </p>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3.92/ 4.0</h1>
          <p>GPA</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6.0</h1>
          <p>IELTS</p>
          <p>With no skills below band 6.0</p>
        </div>
      </div>
    </div>
  );
};

export default About;
