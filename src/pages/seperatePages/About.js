import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import NavBar from "../../nav/NavBar";

const About = ({ setOpen, sepratePage = true }) => {
  return (
    <>
      {/* {sepratePage && <NavBar setOpen={setOpen} />} */}
      <NavBar setOpen={setOpen} />
      <MDBContainer>
        <div className="About">
          <h2 style={{ fontWeight: "bold" }}>Welcome to BeamTech Pvt Ltd</h2>
          {/* <img src={home} alt=''/> */}
          <p>
          Where innovation meets construction. As South India’s first tech-enabled civil construction company, we are dedicated to delivering high-quality, efficient, and sustainable solutions for residential, commercial, and industrial projects.
          </p>
          <p>At BeamTech Pvt Ltd, we believe that the future of construction lies at the intersection of technology and tradition. Our team of experts is committed to pushing the boundaries of what’s possible, harnessing the power of cutting-edge technology to create structures that are not only functional but also environmentally conscious and aesthetically pleasing.</p>
          <p>From the initial design phase to the final nail in place, our approach is rooted in precision, innovation, and excellence. Whether it’s a cozy home for a growing family, a dynamic workspace for a thriving business, or a robust facility for industrial operations, we bring the same level of dedication and expertise to every project.</p>
          <p>Our tech-enabled solutions allow us to streamline processes, reduce waste, and ensure that every project is completed on time and within budget. By integrating advanced construction techniques, smart planning tools, and sustainable practices, we are able to offer our clients a seamless and efficient construction experience.</p>
          <p>
          At BeamTech Pvt Ltd, we are not just building structures; we are building dreams. We understand that every project is unique, and we tailor our services to meet the specific needs and vision of each client. Our commitment to quality and innovation ensures that our buildings stand the test of time, providing a safe and inspiring environment for generations to come.</p>
          <p>Join us at BeamTech Pvt Ltd, and experience the future of construction today. Together, we can create a legacy of excellence, sustainability, and innovation that will shape the landscape of South India for years to come.</p>
          <div>
            <img
              className="about-image"
              src={require("../../assets/images/trally.png")}
              alt="img"
            />
          </div>
        </div>
      </MDBContainer>
    </>
  );
};

export default About;
