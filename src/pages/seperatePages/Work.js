import React, { useState } from "react";
import building1 from "../../assets/images/p1.png";
import building2 from "../../assets/images/p2.png";
import building3 from "../../assets/images/p3.png";
import building4 from "../../assets/images/p4.png";
import NavBar from "../../nav/NavBar";
import { MDBCard, MDBCardBody, MDBCarousel, MDBCarouselItem, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";

const imageUrls = [building1, building2, building3, building4];
const Work = ({ open }) => {
  // const [bgImage, setBgImage] = useState(imageUrls[0]);

  // const handleImageClick = (url) => {
  //   setBgImage(url);
  // };
  return (
    <div>
      {open && <NavBar />}
      <div className="project2">
        <MDBContainer>
          <div style={{ marginTop: "20px" }}>
            <h2 style={{ fontWeight: "bold" }}>Our Recent Work</h2>
            <br/>
            <div>
            <h4>Residential Homes</h4>
              <ul
                style={{
                  listStyle: "disc",
                  padding: "20px",
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#222D37",
                  wordWrap: "break-word",
                  fontFamily: "outfit",
                }}
              >
                <li>
                  <b style={{ color: "red" }}>The Eco Smart Home: </b>
                  <br /> A sustainable, energy-efficient home featuring smart
                  technology and eco-friendly materials.
                </li>
                <li>
                  <b style={{ color: "red" }}>The Modern Haven: </b> <br />A
                  contemporary residence with sleek design, advanced automation,
                  and luxurious finishes.
                </li>
              </ul>
            </div>
            <div>
            <h4>Commercial Buildings</h4>
              <ul
                style={{
                  listStyle: "disc",
                  padding: "20px",
                  fontSize: "18px",
                  lineHeight: "28px",
                  color: "#222D37",
                  wordWrap: "break-word",
                  fontFamily: "outfit",
                }}
              >
                <li>
                  <b style={{ color: "red" }}>TechHub Office Complex: </b>
                  <br /> A modern office building equipped with the latest smart
                  building technologies for enhanced productivity.
                </li>
                <li>
                  <b style={{ color: "red" }}>GreenMall Expansion: </b> <br />An eco-friendly mall expansion project incorporating sustainable
                  construction practices and green technologies.
                </li>
              </ul>
            </div>
          </div>
        </MDBContainer>
        
      </div>
      <MDBContainer>
  <MDBRow className="py-5 text-center">
    <MDBCol md="12">
      <MDBCarousel showControls dark>
        <MDBCarouselItem className="active">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="10" style={{ maxWidth: "500px" }}>
              <img src={building1} alt="building1" style={{ width: "100%" }} />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="10" style={{ maxWidth: "500px" }}>
              <img src={building2} alt="building2" style={{ width: "100%" }} />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="10" style={{ maxWidth: "500px" }}>
              <img src={building3} alt="building3" style={{ width: "100%" }} />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="10" style={{ maxWidth: "500px" }}>
              <img src={building4} alt="building4" style={{ width: "100%" }} />
            </MDBCol>
          </MDBRow>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBCol>
  </MDBRow>
</MDBContainer>

    </div>
  );
};

export default Work;
