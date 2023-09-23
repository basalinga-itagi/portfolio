import React from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
const TechStack = () => {
  const techLists = [
    {
      id: 1,
      name: "HTML",
      url: "https://play-lh.googleusercontent.com/RslBy1o2NEBYUdRjQtUqLbN-ZM2hpks1mHPMiHMrpAuLqxeBPcFSAjo65nQHbTA53YYn",
    },
    {
      id: 2,
      name: "CSS",
      url: "https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg",
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      url: "https://play-lh.googleusercontent.com/PAPuQveK8eeVwh7M4vccotAFPOJI0sENMWxnFe9RDt-_63SfVRiLUNXcpJ-8iHuVng",
    },
    {
      id: 4,
      name: "REACT",
      url: "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
    },
    {
      id: 5,
      name: "NODE JS",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_91H3OVet4ezeSGW3p9S8GBCCBv4cCrzOI4hhCtNtzX6ynbypGxB6C2SwS7cC3gj7elA&usqp=CAU",
    },
    {
      id: 6,
      name: "MONGO DB",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBce4yZJ8hcHa23LIy-vVjSg_MSXWCyQk1Q&usqp=CAU",
    },
    {
      id: 7,
      name: "Typescript",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylVrrFR3dHVnN4Kt406kJhRbTBllcZ02FIw&usqp=CAU",
    },
    {
      id: 8,
      name: "Bootstrap",
      url: "https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png",
    },
    {
      id: 9,
      name: "Material ui",
      url: "data:image/jpeg;base64,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",
    },
    {
      id: 10,
      name: "GitHub",
      url: "https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg",
    },
  ];
  return (
    <div>
      <div className="techstack">
        <h1>Technology Stack</h1>
        <hr style={{ height: 12, color: "red" }} />
        <p>
          Including Programing Languages,frameworks,databases,front-end and
          back-end tools,and APIs
        </p>
        <Fade left>
          <div className="techstack-list-container">
            {techLists &&
              techLists.map((list, index) => {
                return (
                  <div className="stack-container" key={index}>
                    <img src={list.url} alt={list.name} />
                    <p>{list.name}</p>
                  </div>
                );
              })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default TechStack;
