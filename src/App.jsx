import React, { Component, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Experiance from "./components/Experiance/Experiance";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "app-light" : "app-dark"}>
      <NavBar />
      <Home />
      <About />
      <Experiance />
      <TechStack />
      <Projects />
      <Contact />
      <ScrollToTop
        smooth
        // color="white"
        style={{
          // position: "absolute",
          backgroundColor: "transparent",
          // bottom: 10,
          // borderRadius: 80,
          // padding: 4,
        }}
      />
      <Footer />
    </div>
  );
};

export default App;
