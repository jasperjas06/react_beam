import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Logo from "../assets/images/logo.png";
import "../nav/navbar.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
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
        </MDBNavbarNav>
      {/* </MDBContainer> */}
      
  </MDBCollapse>
    </MDBNavbar>
  );
}
