import React, { useContext } from "react";
import "./NavBar.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { ThemeContext } from "../../context/ThemeContext";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Profile from "../../assets/profile.jpg";

const NavBar = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  console.log("CONTEXT", theme);
  return (
    <header>
      <nav className="navbarr">
        {/* <Zoom top> */}
        <img src={Profile} alt="profile" />
        {/* </Zoom> */}
        <div className="menu">
          <AiOutlineMenu />
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="nav-bar">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>

          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="techstack"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Tech stack
          </Link>
          <Link
            activeClass="active"
            to="experiance"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
          </Link>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
          <div
            onClick={() => {
              setTheme((prev) => (prev === "light" ? "dark" : "light"));
            }}
          >
            {theme === "light" ? (
              <BsFillMoonStarsFill size={30} color="black" />
            ) : (
              <BsFillSunFill size={30} color="black" />
            )}
          </div>
        </div>

        {/* <a href="#contact">Contact</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#home">Home</a> */}
      </nav>
    </header>
  );
};

export default NavBar;
