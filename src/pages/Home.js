import React from 'react'
// import NavBar from '../nav/NewNav/Nav'
import NavBar from '../nav/NavBar'
import LandingPage from './LandingPage'
import "../assets/styles/index.css"
import "../assets/styles/res.css"
import Package from './Package'
import Service from './Service'
import Cultuer from './Cultuer'
import Process from './Process'
import { MDBContainer } from 'mdb-react-ui-kit'
import Work from './Work'
import Clients from './Clients'
import Faqs from './Faqs'
import Contact from './Contact'
import Footer from '../Footer/Footer'
import ScrollToTopButton from '../components/GoTop'
import Sky from "../assets/images/citysky.png"
const Home = ({setOpen,open}) => {
  return (
    <div className="main-layout">
      <NavBar />
      <div  className='mn' >
        <LandingPage />
      </div>
      <div>
        <Package  />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Cultuer />
      </div>
      <MDBContainer>
        <Process />
      </MDBContainer>
      <br/>
      <div>
        <Work/>
      </div>
      <br/>
      <div>
        <Clients/>
      </div>
      <br/>
      <div>
      <br/>
      <br/>
      <br/>
        <Faqs/>
      </div>
      <br/>
      <div >
        <Contact/>
      </div>
      {/* <div className='bg-img'>
      <img src={Sky} />
      </div> */}
      
      <br/>
      <br/>
      <br/>
      {/* <div className='construct-img'>
        <img src={require("../assets/images/newBulding.jpg")} alt='construct' />
      </div> */}
      <Footer />
      <ScrollToTopButton/>
    </div>
  )
}

export default Home
