import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-sm-8 col-md-4 col-lg-4 col-xl-4 profile-img">
          <img
            width={170}
            height={170}
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="col-md-8 col-lg-8 col-xl-8 ">
          <h1>About Me</h1>
          <p>
            Hello, I'm Basalingappa Itagi. With 2.3 years of valuable experience
            in the dynamic world of full-stack development.
            <br />
            <br />
            In my career, I have honed my skills in front-end and back-end
            technologies, enabling me to bridge the gap between user experience
            and technical functionality. I thrive in collaborative environments,
            where I can work closely with cross-functional teams to turn ideas
            into reality.
            <br />
            <br />
            As a continuous learner, I stay updated with the latest trends and
            technologies in the ever-evolving field of full-stack development. I
            believe in the power of adaptability and innovation, which are
            essential in today's fast-paced tech industry.
            <br />
            <br />I am excited about the opportunities that lie ahead and look
            forward to contributing my expertise to your next project. Let's
            connect and explore how I can be a valuable asset to your team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
