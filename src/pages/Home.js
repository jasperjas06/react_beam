import React from 'react'
import NavBar from '../nav/NavBar'
import LandingPage from './LandingPage'
import "../assets/styles/index.css"
import "../assets/styles/res.css"
import Package from './Package'
import Service from './Service'
import Cultuer from './Cultuer'
const Home = ({setOpen,open}) => {
  return (
    <div className="main-layout">
      <NavBar />
      <div>
        <LandingPage />
      </div>
      <div>
        <Package />
      </div>
      <div>
        <Service />
      </div>
      <div>
        <Cultuer />
      </div>
    </div>
  )
}

export default Home
