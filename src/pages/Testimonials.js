// import {
//   CCard,
//   CCardBody,
//   CCardText,
//   CCardTitle,
//   CCarousel,
//   CCarouselItem,
// } from "@coreui/react";
// import React from "react";

// const Testimonials = () => {
//   let ReactImg = require("../assets/images/Skyline.jpeg");
//   let VueImg = require("../assets/images/Skyline.jpeg");
//   let AngularImg = require("../assets/images/Skyline.jpeg");
//   return (
//     <div>
//       <CCarousel controls transition="crossfade">
//         <CCarouselItem>
//           <CCard style={{ width: "100%", border: "0" }}>
//             <center>
//               <img
//                 src={ReactImg}
//                 style={{
//                   width: "200px",
//                   height: "200px",
//                   borderRadius: "100%",
//                 }}
//                 alt=""
//               />
//             </center>
//             <CCardBody
//               style={{
//                 alignItems: "center",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               {/* <p style={{fontSize:"40px"}}>“</p> */}
//               <CCardTitle>Alex P.</CCardTitle>
//               <CCardText style={{ maxWidth: "100%" }}>
//                 “BeamTech transformed our vision into reality with their
//                 innovative approach and attention to detail. Our new office
//                 space is both functional and cutting-edge.”
//               </CCardText>
//             </CCardBody>
//           </CCard>
//         </CCarouselItem>
//         <CCarouselItem>
//           <CCard style={{ width: "100%", border: "0" }}>
//             <center>
//               <img
//                 src={ReactImg}
//                 style={{
//                   width: "200px",
//                   height: "200px",
//                   borderRadius: "100%",
//                 }}
//                 alt=""
//               />
//             </center>
//             <CCardBody
//               style={{
//                 alignItems: "center",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               {/* <p style={{fontSize:"40px"}}>“</p> */}
//               <CCardTitle>Emily R.</CCardTitle>
//               <CCardText style={{ maxWidth: "100%" }}>
//               “The BeamTech team was professional, knowledgeable, and responsive
// throughout our home construction project. We couldn’t be happier with the results.”
//               </CCardText>
//             </CCardBody>
//           </CCard>
//         </CCarouselItem>
//       </CCarousel>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBCarouselItem,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBRow className="py-5 text-center">
      <MDBCol md="12">
       <MDBCarousel showControls dark>
      <MDBCarouselItem className="active">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" style={{maxWidth:"500px"}}>
          <MDBCard>
            <MDBCardBody className="m-3">
              <MDBRow>
                <MDBCol
                  lg="4"
                  style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}
                >
                  <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                    className="rounded-circle img-fluid shadow-1 client-image"
                    alt="woman avatar"
                  />
                  <div className="car-name-div">
                  <p className="fw-bold lead mb-2">
                    <strong>Emily R.</strong>
                  </p>
                  <p className="fw-bold text-muted mb-0">Customer</p>
                  </div>
                  </div>    
                  <div className="quote_icon">
                  <MDBIcon fas icon="quote-left" />
                  </div>    
                </MDBCol>
                <MDBCol>
                  {" "}
                  <p className="text-muted fw-light mt-4">
                  “The BeamTech team was professional, knowledgeable, and responsive throughout our home construction project. We couldn’t be happier with the results.”
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBCarouselItem>
      <MDBCarouselItem >
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" style={{maxWidth:"500px"}}>
          <MDBCard>
            <MDBCardBody className="m-3">
              <MDBRow>
                <MDBCol
                  lg="4"
                  style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"}}
                >
                  <div style={{display:"flex",alignItems:"center",gap:"5px"}}>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                    className="rounded-circle img-fluid shadow-1 client-image"
                    alt="woman avatar"
                  />
                  <div className="car-name-div">
                  <p className="fw-bold lead mb-2">
                    <strong>Alex P.</strong>
                  </p>
                  <p className="fw-bold text-muted mb-0">Customer</p>
                  </div>
                  </div>
                  <div className="quote_icon">
                  <MDBIcon fas icon="quote-left" />
                  </div>
                </MDBCol>
                <MDBCol>
                  {" "}
                  <p className="text-muted fw-light mt-4">
                  “BeamTech transformed our vision into reality with their innovative approach and attention to detail. Our new office space is both functional and cutting-edge.”                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      </MDBCarouselItem>
      </MDBCarousel>
      </MDBCol>
    </MDBRow>
  );
}