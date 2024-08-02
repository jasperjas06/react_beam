import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CCarousel,
  CCarouselItem,
} from "@coreui/react";
import React from "react";

const Testimonials = () => {
  let ReactImg = require("../assets/images/Skyline.jpeg");
  let VueImg = require("../assets/images/Skyline.jpeg");
  let AngularImg = require("../assets/images/Skyline.jpeg");
  return (
    <div>
      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <CCard style={{ width: "100%", border: "0" }}>
            <center>
              <img
                src={ReactImg}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                }}
                alt=""
              />
            </center>
            <CCardBody
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* <p style={{fontSize:"40px"}}>“</p> */}
              <CCardTitle>Alex P.</CCardTitle>
              <CCardText style={{ maxWidth: "100%" }}>
                “BeamTech transformed our vision into reality with their
                innovative approach and attention to detail. Our new office
                space is both functional and cutting-edge.”
              </CCardText>
            </CCardBody>
          </CCard>
        </CCarouselItem>
        <CCarouselItem>
          <CCard style={{ width: "100%", border: "0" }}>
            <center>
              <img
                src={ReactImg}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                }}
                alt=""
              />
            </center>
            <CCardBody
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* <p style={{fontSize:"40px"}}>“</p> */}
              <CCardTitle>Emily R.</CCardTitle>
              <CCardText style={{ maxWidth: "100%" }}>
              “The BeamTech team was professional, knowledgeable, and responsive
throughout our home construction project. We couldn’t be happier with the results.”
              </CCardText>
            </CCardBody>
          </CCard>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Testimonials;
