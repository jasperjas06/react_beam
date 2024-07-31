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
const Home = ({setOpen,open}) => {
  return (
    <div className="main-layout">
      <NavBar />
      <div>
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
      <div>
        <Work/>
      </div>
      <br/>
      <div>
        <Clients/>
      </div>
      <br/>
      <div>
        <Faqs/>
      </div>
      <br/>
      <div>
        <Contact/>
      </div>
      <br/>
      <div className='construct-img'>
        <img src={require("../assets/images/newBulding.jpg")} alt='construct' />
        {/* <img src={require("../assets/images/engineering-construction.png")} alt='construct' /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
