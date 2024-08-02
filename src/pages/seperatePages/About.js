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
          <h2 style={{ fontWeight: "bold" }}>Who We Are</h2>
          {/* <img src={home} alt=''/> */}
          <p>
            At BeamTech Pvt Ltd, we’re not just builders; we’re visionaries. Our
            unique blend of cutting-edge technology and time-tested construction
            practices allows us to set new benchmarks in the industry. Our
            commitment to excellence drives us to create structures that stand
            the test of time.
          </p>
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
