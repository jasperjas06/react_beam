import React from "react";
import NavBar from "../nav/NavBar";

const About = ({ setOpen, sepratePage = true }) => {
  return (
    <>
      {sepratePage && <NavBar setOpen={setOpen} />}
      <div className="About">
        <h2 style={{ fontWeight: "300" }}>About Us</h2>
        {/* <img src={home} alt=''/> */}
        <p>
          At BeamTech Pvt Ltd, we’re not just builders; we’re visionaries. As
          South India’s first tech-enabled civil construction company, we blend
          cutting-edge technology with time-tested construction practices. Our
          commitment to innovation and excellence drives us to deliver
          high-quality, efficient, and sustainable solutions for residential,
          commercial, and industrial projects.
        </p>
        <div>
          <img
            className="about-image"
            src={require("../assets/images/trally.png")}
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default About;
