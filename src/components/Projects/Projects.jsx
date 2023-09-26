import React from "react";
import "./Projects.css";
import phebot from "../../assets/phebot.png";
import gallop from "../../assets/gallop.png";
import bdCart from "../../assets/bdCart.png";

import Fade from "react-reveal/Fade";
const Projects = () => {
  const projects = [
    {
      role: "Full Stack Web",
      url: "https://play.google.com/store/apps/details?id=com.bloodcells.customer&hl=en&gl=US",
      name: "Bloodcells Cart Web",
      imageSrc: `${bdCart}`,
      tech: ["React", "Node js", "Express", "MongoDb"],
      content:
        "BloodcellsKart providing services dealing with Pathology and radiology ",
    },
    {
      role: "Full Stack Mobile App",
      url: "https://play.google.com/store/apps/details?id=com.bloodcells.collector&hl=en",
      name: "Sample Collector App",
      imageSrc: `${phebot}`,
      tech: ["React Native", "Node js", "Express", "MongoDb"],
      content:
        "It will guide you to the patient's home address and will inform you about the sample drop off point.",
    },
    {
      role: "Full Stack Web",
      url: "https://gallopsclub.com/",
      name: "Gallops Club Web",
      imageSrc: `${gallop}`,
      tech: ["React", "Node js", "Express", "MongoDb"],
      content: "Your Trusted Source for Accurate India Horse Race Predictions",
    },
    {
      role: "Full Stack Mobile App",
      url: "https://play.google.com/store/apps/details?id=com.gallopsclubapp&hl=en",
      name: "Gallops Club App",
      imageSrc: `${gallop}`,
      tech: ["React Native", "Node js", "Express", "MongoDb"],
      content: "Your Trusted Source for Accurate India Horse Race Predictions",
    },
  ];
  return (
    <div className="project">
      <div className="project-container">
        <div className="project-title">
          <h1>Projects</h1>
          <hr style={{ height: 12, color: "red" }} />
          <p>Including Industrial projects,Personal projects</p>
        </div>
        <Fade left>
          <div id="ads">
            <div>
              <div className="project-list-container">
                {projects &&
                  projects.length > 0 &&
                  projects.map((project, index) => {
                    return (
                      <div
                        className="card rounded card-width highlight"
                        key={index}
                      >
                        <div className="card-image-container">
                          <div className="card-image">
                            <span className="card-noify-image">
                              {project.role}
                            </span>
                            <img src={project.imageSrc} alt="Bloodcells" />
                          </div>
                          <div>
                            <ul>
                              {project.tech.map((techno) => {
                                return <li>{techno}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                        <div className="m-auto">
                          <div className="title">
                            <h6 className="text-upper">{project.name}</h6>
                          </div>
                        </div>
                        <p className="project-content">{project.content}</p>
                        <a
                          className="ad-btn"
                          href={project.url}
                          target="_blank"
                        >
                          View
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
