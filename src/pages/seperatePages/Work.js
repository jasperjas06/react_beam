import React, { useState } from "react";
import building1 from "../../assets/images/p1.png";
import building2 from "../../assets/images/p2.png";
import building3 from "../../assets/images/p3.png";
import building4 from "../../assets/images/p4.png";
import NavBar from "../../nav/NavBar";

const imageUrls = [building1, building2, building3, building4];
const Work = ({ open }) => {
  const [bgImage, setBgImage] = useState(imageUrls[0]);

  const handleImageClick = (url) => {
    setBgImage(url);
  };
  return (
    <div>
      {open && <NavBar />}
      <div className="project" style={{ backgroundImage: `url(${bgImage})` }}>
        {/* className="pt-14 px-14 text-black" */}
        <div className="pt-14 px-5 md:px-14 text-black" style={{width:"50%"}}>
          {/* className="text-6xl font-bold"font-size: 60px;
  font-weight: 700; */}
          <h1
            className="project-title"
            style={{ color: "#DCDDDE", fontSize: "60px", fontWeight: "700" }}
          >
            Our Projects
          </h1>
          {/* className="pt-10 max-w-lg text-2xl" */}
          <p
            className="project-line "
            style={{
              color: "#DCDDDE",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "28px",
            }}
          >
           Our Recent Work
           </p>
           <p
            className="project-line "
            style={{
              color: "#DCDDDE",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "28px",
              textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"
            }}
          >
            Residential Homes
          </p>
            <p
            className="project-line "
            style={{
              color: "#DCDDDE",
              fontWeight: 300,
              fontSize: "24px",
              lineHeight: "28px",
              textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"
            }}
          >
           <span className="project-line-span"> ●	The Eco Smart Home:</span> A sustainable, energy-efficient home featuring smart technology and eco-friendly materials.<br/>
           <span className="project-line-span"> ●	The Modern Haven:</span>  A contemporary residence with sleek design, advanced automation, and luxurious finishes.<br/> 
          </p>
            <p
            className="project-line "
            style={{
              color: "#DCDDDE",
              fontWeight: "bold",
              fontSize: "24px",
              lineHeight: "28px",
              textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"
            }}
          >    Commercial Buildings
          </p>
            <p
            className="project-line "
            style={{
              color: "#DCDDDE",
              fontWeight: 300,
              fontSize: "24px",
              lineHeight: "28px",
              textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000"
            }}
          >
          <span className="project-line-span"> ●	TechHub Office Complex:</span> A modern office building equipped with the latest smart building technologies for enhanced productivity.<br/>
          <span className="project-line-span"> ●	GreenMall Expansion:</span> An eco-friendly mall expansion project incorporating sustainable construction practices and green technologies.<br/>
          </p>
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
