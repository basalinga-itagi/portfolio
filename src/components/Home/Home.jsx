import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import hero from "../../assets/hero.png";
// import Resume from "../../assets/docm/Basalingappa_itagi.pdf";
import Fade from "react-reveal/Fade";
import Resume from "../../assets/docs/Basalingappa_itagi_resume.pdf";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h2>
          Hello There <span className="hi-icon">👏</span>,I am Basalingappa
          Itagi I have experience with{" "}
        </h2>
        <h1>
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "React Js Developer",
                "React native Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <Fade bottom>
          <div className="home-buttons">
            {/* <button className="btn btn-hire">Hire Me</button> */}
            <a
              className="btn btn-hire"
              href="https://web.whatsapp.com/send?phone=8904452859"
              target="_blank"
            >
              Hire Me
            </a>

            {
              <a
                className="btn btn-cv"
                href={Resume}
                download={"Basalingappa_itagi_resume.pdf"}
              >
                My Resume
              </a>
            }
          </div>
        </Fade>
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
