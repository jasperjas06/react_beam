import React from "react"
import "./Footer.css"
import Logo from '../assets/images/logowhite.png';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import SocialIcon from "../Social Icon/SocialIcon";
import SocialIcon from "../components/Social Icon/SocialIcon";
import post from "../assets/images/post.png"
import { Link } from "react-router-dom";

const Footer = ()=>{
    let presentYear = new Date().getFullYear();

    return(
        <div>

        <div className="footerCon">
            <div className="footerWra">
                <div className="footerHeader" >
                    <img className="footerHeaderLogoImg" alt="Beamtech logo" src={Logo} /> 
                    <div className="footerHeaderIconTop" >
                        <div style={{display:"flex",justifyContent:"center", gap:"3px", flexWrap:'wrap'}} className="flex justify-center footerHeaderIconCon space-x-4  ">
                            <SocialIcon icon={faTwitter} link="https://twitter.com" />
                            <SocialIcon icon={faFacebookF} link="https://facebook.com" />
                            <SocialIcon icon={faInstagram} link="https://www.instagram.com/beam.tech?igsh=eWRrMjl2aWprbnJ5" />
                            <SocialIcon icon={faLinkedinIn} link="https://linkedin.com" />
                            <SocialIcon icon={faYoutube} link="https://youtube.com" />
                        </div>
                        {/* <p className="footerHeaderText" >Back to Top  <FontAwesomeIcon icon={faArrowUp} /></p> */}
                    </div>
                </div>
                <hr className="footerHr" />
                <div className="footerBody" >
                    <div className="footerTextCon" >
                        <div className="footerTextWra" >
                            <h5 className="footerTextWraHeader">About Us</h5>
                            <p className="footerTextWraText about" style={{width:"350px",position:"relative", top:"10px", color:"GrayText"}} >At BeamTech Pvt Ltd, we’re not just builders; we’re visionaries. As South India’s first tech-enabled civil construction company, we blend cutting-edge technology with time-tested construction practices. Our commitment to innovation and excellence drives us to deliver high-quality, efficient, and sustainable solutions for residential, commercial, and industrial projects.</p>
                        </div>
                    <div className="footerPostCon">
                        <div style={{display:"grid", gridTemplateColumns:"auto auto auto", width:"100%"}}>
                        <div className="footerTextWra" >
                            <h5 className="footerTextWraHeader">Feature</h5>
                            <div className="footerNav-con">
                            <Link to="/solutions" className="footerNav" >Solutions</Link>
                            <Link to="/work" className="footerNav" >Work</Link>
                            <Link to="/process" className="footerNav" >Process</Link>
                            </div>
                            
                        </div>
                        <div className="footerTextWra" >
                            <h5 className="footerTextWraHeader">Helpful</h5>
                            <div className="footerNav-con">
                            <Link to="/about" className="footerNav" >About Us</Link>
                            <Link to="/contact" className="footerNav" >Contact</Link>
                            </div>
                        </div>
                        </div>
                    <div className="footerPostImgCon" >
                        <img src={post} alt="post" className="footerPostImg" />
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
                <div className="footerFooterCon" >
                <p>&copy;{presentYear} Beamtech All rights reserved</p>
                    {/* <div className="footerFooterWra" >
                    <a style={{textDecoration:"none",color:"#222d37", fontSize:"1rem", fontWeight:"600"}} href="/about">
                        <p className="footerFooterText" >About</p>
                    </a>
                    <a style={{textDecoration:"none",color:"#222d37", fontSize:"1rem", fontWeight:"600"}} href="/solutions">
                        <p className="footerFooterText" >Solutions</p>
                    </a>
                    <a style={{textDecoration:"none",color:"#222d37", fontSize:"1rem", fontWeight:"600"}} href="/process">
                        <p className="footerFooterText" >Process</p>
                    </a>
                    <a style={{textDecoration:"none",color:"#222d37", fontSize:"1rem", fontWeight:"600"}} href="/work">
                        <p className="footerFooterText" >Work</p>
                    </a>
                    <a style={{textDecoration:"none",color:"#222d37", fontSize:"1rem", fontWeight:"600"}} href="/contact">
                        <p className="footerFooterText" >Contact</p>
                    </a>
                    </div> */}
                </div>
        </div>
    );
}

export default Footer;