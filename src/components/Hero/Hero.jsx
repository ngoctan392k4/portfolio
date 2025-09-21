import "./Hero.css";
import profile_image from "../../assets/profile_image.png";
import profile from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} className="profile_image" />
      <h1>
        <span>I'm Ngoc Tan,</span> a Computer Science Student based in Viet Nam
      </h1>
      <p>
        Hi, I'm <strong>Tan</strong>, aiming to become a Data Engineer. I
        have hands-on experience with Python, SQL, BigQuery, dbt, GCP and
        visualization with Looker Studio.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">
          <a href="../../../public/Huynh_Nguyen_Ngoc_Tan_CV_DE.pdf" download>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
