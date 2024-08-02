import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'

const Service = () => {
  return (
    <>
      <div className='service-box' style={{marginLeft:"40px"}}>
        <h1 variant='h4' style={{ fontWeight: 700, fontSize: "60px", letterSpacing: "-2%", lineHeight: "75.6px", color: "#222D37" }} className='service-title' >Our Services</h1>
      </div>
      <br/>
    <MDBContainer>
      <div className='service-container'>
      <div className='service-mainbox'>
        <div className='service-content'>
        <div className='service-grid'>
        <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" data-aos-offset="30" data-aos-duration="1500" className='service-image-house'>
            <div className='service-rectangle' />
            <button>Houses</button>
          </div>
          <div>
          <ul style={{listStyle:"disc",padding :"20px",fontSize: "18px", lineHeight: "28px", color: "#222D37", wordWrap: "break-word",
            fontFamily:"outfit"
          }}>
          <li><b style={{color:"red"}}>Planning and Design: </b> <br/> Our team of expert architects and designers harnesses the
              latest software and technology to create detailed plans and blueprints. We ensure
              compliance with local building codes, providing a solid foundation for your project.</li>
            <li><b style={{color:"red"}}>
              Foundation and Structure: </b><br/> BeamTech prioritizes robust foundations and structures.
              Using advanced techniques and materials, we prepare sites, lay foundations, and
              construct structural frames for maximum stability and durability.
            </li>
            <li><b style={{color:"red"}}>Advanced Construction Techniques: </b><br/> Prefabrication, modular construction, and
              sustainable practices are our specialties. High-quality materials and modern
              techniques ensure efficient, high-standard projects.
              </li>

          </ul>
          </div>

        </div>
        <div className='service-grid'>
       <ul style={{listStyle:"disc",padding :"20px",fontSize: "18px", lineHeight: "28px", color: "#222D37", wordWrap: "break-word",
            fontFamily:"outfit"
          }}>
            
              <li><b style={{color:"red"}}>
                Technology Integration: </b><br/> We leverage 3D modelling, virtual reality walkthroughs,
                smart building systems, and automation to enhance every aspect of construction.

              </li>
              <li><b style={{color:"red"}}>
                Interior and Exterior Finishing: </b> <br/>Our comprehensive services cover electrical
                systems, plumbing, insulation, roofing, siding, and smart home integration. Every
                detail is perfected to your specifications.

              </li>
              <li><b style={{color:"red"}}>Inspection and Approval: </b><br/> Rigorous inspections at every stage ensure quality and
                safety. We work closely with local authorities to obtain necessary approvals,
                guaranteeing compliance with regulatory requirements</li>
            
          </ul>
          <div>
          <div className='serviceimg-container'>
          
          <div data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom" data-aos-offset="100" data-aos-duration="1500" className='service-image-bulding'>
            <div className='service-rectangle' />
            <button>construction For Business</button>
          </div>

        </div>
          </div>
        </div>
          {/* <Typography sx={{ fontWeight: 300, fontSize: "24px", lineHeight: "28px", color: "#222D37", wordWrap: "break-word" }}>Flawless construction powered by deep expertise.</Typography> */}
          

        </div>
        
      </div>
    </div>
    </MDBContainer>
    </>
  )
}

export default Service
