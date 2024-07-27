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
export default function NavBar() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" className="nav-bar" style={{boxShadow:"none", height:"100px"}}>
      {/* <MDBContainer fluid> */}
        <MDBNavbarBrand href="/">
          <img
            className="nav-logo"
            // className="h-16 md:h-24 lg:h-28"
            alt="Beamtech logo"
            src={Logo}
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
          
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Link</MDBNavbarLink>
            </MDBNavbarItem>

            

            <MDBNavbarItem>
              <MDBNavbarLink
                disabled
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          
        </MDBCollapse>
      {/* </MDBContainer> */}
    </MDBNavbar>
  );
}
