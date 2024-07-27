import React,{useEffect} from "react";
import Card from "../components/Card";
import Aos from "aos";
import "aos/dist/aos.css";
const Package = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="package-main">
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">
        Our Packages
      </h1>

      <div className="package-container">
        
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="30"
            data-aos-duration="1500"
            style={{marginBottom:"20px"}}
          >
            <Card
              hoverText={
                <>
                  Basic Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 1990/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="80"
            data-aos-duration="1500"
            style={{marginBottom:"20px"}}
          >
            <Card
              hoverText={
                <>
                  Premium Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 2190/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="100"
            data-aos-duration="1500"
            style={{marginBottom:"20px"}}
          >
            <Card
              hoverText={
                <>
                  Elite Package
                  <br />
                  <span className="text-[#cb2139]">Rs. 2490/Sq.ft</span>
                  <br />
                  (Incl. GST)
                </>
              }
            />
          </div>
        {/* </Container> */}
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Package;
