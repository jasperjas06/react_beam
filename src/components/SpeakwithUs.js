import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MDBBtn,  MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, } from 'mdb-react-ui-kit'
import React from 'react'
import "./styles.css"
import whatsappLogo from '../assets/images/what.png'
import { Link } from 'react-router-dom'
const SpeakwithUs = ({open,setOpen}) => {
    // const toggleClose = () => {
    //     setOpen(false)
    // }
  return (
    <MDBModal open={open} onClose={setOpen} tabIndex='-1'>
        <MDBModalDialog size="xl">
          <MDBModalContent>
          <div>
              <MDBBtn style={{margin:"10px", float:"right"}} className='btn-close' color='none' onClick={setOpen}></MDBBtn>
          </div>
            <MDBModalBody>
                {/* <h4 style={{color:"#070707"}}>You bring an idea, we <span style={{color:"red"}}>make it happen!</span></h4> */}
                <div>
                    {/* <MDBCard>
                        <MDBCardBody> */}
                        <div className='swuBody'style={{margin:"20px"}} >
            <h3 className='swuText'>You bring an idea, we <span style={{color:"#CB2139"}}>make it happen!</span> </h3>
            <div className='swuComCon'>
              <div className='swuComWra'>
                <div className='swuComWraHeader' >
                  <FontAwesomeIcon icon={faCalendar} fontSize={"20px"} color='white' />
                  <p className='swuComWraHeaderText'>Schedule Meeting</p>
                </div>
                <p className='swuComWraText'>Talking business takes time. Schedule a meeting for later!</p>
                {/* <div
                    // className="flex items-center gap-4 lg:gap-8 flex-shrink-0"
                    className="flex items-center gap-2 md:gap-4 lg:gap-8 flex-shrink-0"
                >
                    <button
                      id="speakWithUsButton"
                      // className="speak-with-us-button text-[12px] text-white h-[32px] py-[7px] px-[17px] md:text-[18px] md:h-[48px] md:py-[12px] md:px-[30px] rounded-[50px] flex justify-center items-center"
                      className="speak-with-us-button text-xs md:text-base text-white py-2 px-4 md:py-3 md:px-6 rounded-full flex justify-center items-center"
                      type="button"
                    >
                        <span className='swuComWraBtn' >Get a Slot  <FontAwesomeIcon style={{marginLeft:"5px"}} icon={faArrowRight} /></span>
                    </button>
                </div> */}
                <div style={{display:"flex", justifyContent:"center", position:"relative", zIndex:10,}} className="flex justify-center py-6 relative z-10">
                    <Link
                        // to="/package"
                        // state={{ packageDetails }}
                        style={{borderRadius:20,textDecoration:"none"}}
                        className="cursor-pointer px-4 py-2 text-white submit-btn rounded-full text-lg"
                    >
                        <span className="flex items-center">Get a Slot <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></span>
                    </Link>
                </div>
              </div>
              <div className='swuComWra'>
                <div className='swuComWraHeader' >
                <img src={whatsappLogo} alt='whatsapplogo' className='swuWhatsappLogo' />
                  {/* <FontAwesomeIcon icon={faWhatsappSquare} fontSize={"20px"} color='white' /> */}
                  <p className='swuComWraHeaderText' >Quick Chat</p>
                </div>
                <p className='swuComWraText'>Let's cut to the chase. Our business team is a text away!</p>
                <div style={{display:"flex", justifyContent:"center", position:"relative", zIndex:10,}} className="flex justify-center py-6 relative z-10">
                    <Link
                        // to="/package"
                        // state={{ packageDetails }}
                        style={{borderRadius:20,textDecoration:"none"}}
                        className="cursor-pointer px-4 py-2 text-white submit-btn rounded-full text-lg"
                    >
                        <span className="flex items-center">Chat Now <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
                        {/* </MDBCardBody>
                    </MDBCard> */}
                </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
  )
}

export default SpeakwithUs
