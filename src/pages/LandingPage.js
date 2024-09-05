import React, { useEffect, useState } from "react";
import Home from "../assets/images/homeIMG.svg";
import "../assets/styles/index.css"; // Add this for custom styles (adjust as needed)

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const secondDivMiddle = windowHeight;
  const isSecondDivPastMiddle = scrollPosition >= secondDivMiddle;
  const firstDivPosition = isSecondDivPastMiddle
    ? scrollPosition - secondDivMiddle
    : 0;

  return (
    <div className="scroll-container" style={{ margin: 0 }}>
      {/* First Section */}
      <div
        className="scroll-content first"
        style={{
          transform: `translateX(${firstDivPosition}px)`,
        }}
      >
        <h2 style={{ fontWeight: "600" }}>BeamTech Pvt Ltd</h2>
        <h2 style={{ color: "red", fontWeight: "400" }}>
          Innovating the Future
          <br />
          of Construction
        </h2>
      </div>

      {/* Image Section */}
      <div className="scroll-image-container">
        <img
          style={{ transform: `translateX(${scrollPosition / 4}px)` }}
          className="scroll-image"
          src={require("../assets/images/trally.png")}
          alt="Trally"
        />
      </div>

      {/* Third Section */}
      <div
        className="scroll-content third"
        style={{ transform: `translateX(${scrollPosition / 1.5}px)` }}
      >
        <h2 style={{ color: "red", fontWeight: "600" }}>
          Welcome to BeamTech Pvt Ltd
        </h2>
        <h2 style={{ color: "red", fontWeight: "600" }}>
          Where Innovation Meets Construction
        </h2>
        <p>
          As South India’s pioneering tech-enabled civil construction company,
          we are committed to delivering high-quality, efficient, and
          sustainable solutions across residential, commercial, and industrial
          projects. At BeamTech, we merge cutting-edge technology with deep
          industry expertise to revolutionize the construction landscape,
          ensuring excellence in every project we undertake.
        </p>
      </div>

      {/* Spacer to Ensure Scroll */}
      <div style={{ height: "100px" }} />
    </div>
  );
};

export default LandingPage;
