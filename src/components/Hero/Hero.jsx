import "./Hero.css";
import profile_image from "../../assets/profile_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_image} className="profile_image" />
      <h1>
        <span>I'm Ngoc Tan,</span> a Computer Science Student based in Viet Nam
      </h1>
      <p>
        Hi 👋, I'm <strong>Tan</strong>, aiming to become a Data Engineer. I
        have hands-on experience with Python, SQL, BigQuery, dbt, GCP and
        visualization with Looker Studio.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
