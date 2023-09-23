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
      url: "https://static.wixstatic.com/media/6df414_34fd6ac0edcd48f2b974722a7385f728~mv2.jpg",
      name: "Bloodcells Cart Web",
      imageSrc: `${bdCart}`,
      tech: ["React", "Node js", "Express", "MongoDb"],
      content:
        "BloodcellsKart providing services dealing with Pathology and radiology ",
    },
    {
      role: "Full Stack Mobile App",
      url: "https://play-lh.googleusercontent.com/r0mv0kCEZP_6wGt8fAge57zMQW_drGY6KJSuTrbS1lJ67OGv140QtXoAClElyMCNVlA",
      name: "Sample Collector App",
      imageSrc: `${phebot}`,
      tech: ["React Native", "Node js", "Express", "MongoDb"],
      content:
        "BloodcellsKart providing services dealing with Pathology and radiology ",
    },
    {
      role: "Full Stack Web",
      url: "https://media.licdn.com/dms/image/C4D0BAQHFCyP-TWNtVA/company-logo_200_200/0/1655879601754?e=2147483647&v=beta&t=-dAQF1DkesSNxGn4KwxDGflbGMF7F-RSu5f4gijnSCk",
      name: "Gallops Club Web",
      imageSrc: `${gallop}`,
      tech: ["React", "Node js", "Express", "MongoDb"],
      content: "Your Trusted Source for Accurate India Horse Race Predictions",
    },
    {
      role: "Full Stack Mobile App",
      url: "https://media.licdn.com/dms/image/C4D0BAQHFCyP-TWNtVA/company-logo_200_200/0/1655879601754?e=2147483647&v=beta&t=-dAQF1DkesSNxGn4KwxDGflbGMF7F-RSu5f4gijnSCk",
      name: "Gallops Club App",
      imageSrc: `${gallop}`,
      tech: ["React Native", "Node js", "Express", "MongoDb"],
      content: "Your Trusted Source for Accurate India Horse Race Predictions",
    },
    {
      role: "Full Stack",
      url: "https://media.licdn.com/dms/image/C4D0BAQHFCyP-TWNtVA/company-logo_200_200/0/1655879601754?e=2147483647&v=beta&t=-dAQF1DkesSNxGn4KwxDGflbGMF7F-RSu5f4gijnSCk",
      name: "Bloodcells Cart Web",
      imageSrc: `${phebot}`,
      tech: ["React", "Node js", "Express", "MongoDb"],
      content: "",
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
                        <a className="ad-btn" href="">
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
