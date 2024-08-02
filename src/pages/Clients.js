import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  MDBContainer } from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from './Testimonials';

const Clients = () => {
  return (
    <div>
      <div className='ourClient-container'>
      <div className='our-clients'>
        <p>Our Clients</p>
      </div>
      {/* <div>
        <div className='client-logos clientStyle'>
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
          <img src={require('../assets/images/icon.png')} alt='client3' />
          <img src={require('../assets/images/icon.png')} alt='client1' />
          <img src={require('../assets/images/icon.png')} alt='client2' />
        </div>
      </div> */}
      <br/>
      <br/>
      <div className='client-says' >
      <center >
        <h2>What Our Clients Say</h2>
      </center>
      <br/>
    <MDBContainer>
    <Testimonials />
    </MDBContainer>
    <br/>
    <br/>
      </div>
      <div className='cta-container'>
      <div className='cta-header'>
      <p>CTA Section</p>
      </div>
      <p className='cta-content'>Ready to start your next construction project with BeamTech? Contact us today for a free consultation and quote. Our team is eager to bring your vision to life</p>
      <div className="flex justify-center py-6 relative z-10">
      <div style={{display:"flex", justifyContent:"center", position:"relative", zIndex:10,}} className="flex justify-center py-6 relative z-10">
                    <Link
                        // to="/package"
                        // state={{ packageDetails }}
                        style={{borderRadius:20,textDecoration:"none"}}
                        className="cursor-pointer px-4 py-2 text-white submit-btn rounded-full text-lg"
                    >
                        <span className="flex items-center">Get a free Quote <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></span>
                    </Link>
                </div>
                    {/* <Button variant='contained' className="cta-btn" sx={{borderRadius:"25px",backgroundColor:"#222D37"}} endIcon={<ArrowForward/>}>Contact Us</Button> */}
                </div>
      </div>
    </div>
    </div>
  )
}

export default Clients
