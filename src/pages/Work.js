import React, { useState } from 'react'
import building1 from "../assets/images/p1.jpeg";
import building2 from "../assets/images/p2.jpeg";
import building3 from "../assets/images/p3.jpeg";
import building4 from "../assets/images/p4.jpeg";

const imageUrls = [building1, building2, building3, building4];
const Work = () => {
    const [bgImage, setBgImage] = useState(imageUrls[0]);

    const handleImageClick = (url) => {
        setBgImage(url);
    }
  return (
    <div>
      <div className="project"
                style={{ backgroundImage: `url(${bgImage})`}}

            >
                {/* className="pt-14 px-14 text-black" */}
                <div className="pt-14 px-5 md:px-14 text-black" >
                    {/* className="text-6xl font-bold"font-size: 60px;
  font-weight: 700; */}
                    <h1 className="project-title text-4xl md:text-5xl lg:text-6xl font-bold" style={{color:"#DCDDDE", fontSize:"60px",fontWeight:"700", marginTop:"20px"}}>Our Projects</h1>
                    {/* className="pt-10 max-w-lg text-2xl" */}
                    <p className="project-line pt-6 md:pt-10 max-w-full md:max-w-lg text-xl md:text-xl lg:text-2xl" style={{color:"#DCDDDE", fontWeight:300, fontSize:"24px", lineHeight:"28px"}}>
                        From a couple to a large Indian family, we have houses built with emotions for everyone.
                    </p>
                </div>
                {/* className="relative top-28 flex justify-end" */}
                <div  className="small-box">
                    {imageUrls.map((url, index) => (
                        <div
                            key={index}
                            // className="bg-cover bg-center h-36 w-32 mr-5 rounded-3xl cursor-pointer"
                            className="small-img"
                            style={{ backgroundImage: `url(${url})` }}
                            onClick={() => handleImageClick(url)}
                        >
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Work
