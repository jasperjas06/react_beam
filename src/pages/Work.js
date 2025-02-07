import React, { useState } from "react";
import building1 from "../assets/images/p1.png";
import building2 from "../assets/images/p2.png";
import building3 from "../assets/images/p3.png";
import building4 from "../assets/images/p4.png";
import NavBar from "../nav/NavBar";
import { MDBContainer } from "mdb-react-ui-kit";

const imageUrls = [building1, building2, building3, building4];
const Work = ({ open }) => {
  const [bgImage, setBgImage] = useState(imageUrls[0]);

  const handleImageClick = (url) => {
    setBgImage(url);
  };
  return (
    <div>
      {open && <NavBar />}
      <MDBContainer><h1
            className="project-title"
            style={{ fontSize: "60px", fontWeight: "300", }}
          >
            Our Projects
          </h1></MDBContainer>
      
          <br/>
          <MDBContainer>
          <p>Our projects include innovative, sustainable residential homes and advanced commercial buildings with cutting-edge technology. We also specialize in eco-friendly industrial projects, such as state-of-the-art manufacturing plants and efficient logistics hubs</p>
          </MDBContainer>
          <br/>
      <div className="project" style={{ backgroundImage: `url(${bgImage})` }}>
        {/* className="pt-14 px-14 text-black" */}
        <div className="pt-14 px-5 md:px-14 text-black" style={{width:"50%"}}>
          {/* className="text-6xl font-bold"font-size: 60px;
  font-weight: 700; */}
         
          {/* className="pt-10 max-w-lg text-2xl" */}
          {/* <p
            className="project-line "
            style={{ 
              fontWeight: 300,
              fontSize: "24px",
              lineHeight: "28px",
            }}
          >
            From a couple to a large Indian family, we have houses built with
            emotions for everyone.
          </p> */}
        </div>
        {/* className="relative top-28 flex justify-end" */}
        <div className="small-box">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              // className="bg-cover bg-center h-36 w-32 mr-5 rounded-3xl cursor-pointer"
              className="small-img"
              style={{ backgroundImage: `url(${url})` }}
              onClick={() => handleImageClick(url)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
