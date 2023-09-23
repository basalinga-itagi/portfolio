import React from "react";
import "./Footer.css";
import Flip from "react-reveal/Flip";

const Footer = () => {
  return (
    <footer className="footer pb-3">
      <Flip left>
        <h4 className="text-center">Made With Basalingappa &copy; 2023</h4>
      </Flip>
    </footer>
  );
};

export default Footer;
