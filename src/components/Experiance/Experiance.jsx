import React from "react";
import "./Experiance.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";

const Experiance = () => {
  return (
    <div className="experiance">
      <h1>Experience</h1>
      <hr style={{ height: 12, color: "red" }} />
      <p>
        Including Programing Languages,frameworks,databases,front-end and
        back-end tools,and APIs
      </p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaNodeJs />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Inqude Solution Pvt ltd
          </h4>
          {/* <p>
        Creative Direction, User Experience, Visual Design, Project
        Management, Team Leading
      </p> */}
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaNodeJs />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
};

export default Experiance;
