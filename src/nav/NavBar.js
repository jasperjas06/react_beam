import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Logo from "../assets/images/logo.png";
import "../nav/navbar.css"
import { Link } from "react-router-dom";
import SpeakwithUs from "../components/SpeakwithUs";

export default function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);
  const [open,setOpen] = useState(false)

  return (
    <>
    <MDBNavbar expand="lg" className="nav-bar" style={{boxShadow:"none", height:"100px"}}>
      <div className="innerCon">
      <a href="/">
          <img
            className="nav-logo"
            // className="h-16 md:h-24 lg:h-28"
            alt="Beamtech logo"
            src={Logo}
          />
          </a>
          <div className="buttonCon">
        </div>
          {/* <MDBIcon icon="times" fas /> */}
        {/* <MDBCollapse navbar open={openBasic}> */}
        <div className="nav-link-connects">
          <MDBNavbarNav className="forNewNav mr-auto mb-2 mb-lg-0" >
          
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/about">
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/solutions">Solutions</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/process">Process</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/work">Work</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
            </MDBNavbarItem>

            

            {/* <MDBNavbarItem>
              <MDBNavbarLink
              disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
        </div>
          

        <div style={{display:"flex", justifyContent:"center", position:"relative", zIndex:10,right:"10px"}} className="flex justify-center py-6 relative z-10">
                    <Link
                        // to="/package"
                        // state={{ packageDetails }}
                        onClick={() => setOpen(!open)}
                        style={{borderRadius:20, textDecoration:"none",backgroundColor:"#212529"}}
                        className="cursor-pointer px-4 py-2 text-white submit-btn rounded-full text-lg"
                    >
                        <span className="flex items-center">Speak With Us</span>
                    </Link>
                </div>
    
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        
        </div>
        <MDBCollapse navbar open={openBasic}>
        <MDBNavbarNav className="forNewNav mr-auto mb-2 mb-lg-0" >
          
          <MDBNavbarItem>
            {/* <MDBNavbarLink active aria-current="page" href="/about">
              About
            </MDBNavbarLink> */}
            <a href="/about" style={{textDecoration:"none",color:"#212529", fontSize:"1rem", fontWeight:"600"}}>
            About
            </a>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/solutions">Solutions</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/process">Process</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/work">Work</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/contact">Contact</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      {/* </MDBContainer> */}
      
  </MDBCollapse>
    </MDBNavbar>
    {open && <SpeakwithUs open={open} setOpen={()=>setOpen(false)} />}
    </>
  );
}
