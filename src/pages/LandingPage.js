import React, { useEffect, useState } from 'react'
import Home from '../assets/images/home-img.svg';
const LandingPage = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const secondDivMiddle = windowHeight;
  const isSecondDivPastMiddle = scrollPosition >= secondDivMiddle;
  const firstDivPosition = isSecondDivPastMiddle ? scrollPosition - secondDivMiddle : 0;
  // const thirdDivPosition = isSecondDivPastMiddle ? secondDivMiddle : scrollPosition;
  return (
    <div className="scroll-container">
      <div className='scroll-content first'
      style={{
          transform: `translateX(${firstDivPosition}px)`,
          // opacity: scrollPosition < window.innerHeight / 2 ? 1 : 0,
        }}>
      <h2 style={{ fontWeight: "bold" }}>
          Construct Your Dream
        </h2>
        <img src={Home} alt=''/>
        <h2 style={{ color: "red", fontWeight: "bold" }}>
          Home
        </h2>
        <p>
          Step Into the Home You've Always dreamed
        </p>
        <p>
          Of, Built Into The Highest Standard Of
        </p>
        <p>
          Quality
        </p>
      </div>
{/* image */}
      <div>
      <img 
      style={{ transform: `translateX(${scrollPosition / 3}px)` }} 
      className="scroll-image" src={require("../assets/images/trally.png")} alt='img' />
      </div>

      <div className="scroll-content third"
        style={{ transform: `translateX(${scrollPosition / 2}px)` }}>
      <h2 >
          Lorem ipsum dolor sit
        </h2>
        <h2 >
          amet consectetur.
        </h2>
        <div className='counter-box'>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className='circle-counter'>
              <center>
                <p>45K+</p>
              </center>
              <br />
              <br />
            </div>
            <h4 className='counter-lable'>Home</h4>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className='circle-counter'>
              <center>
                <p>470+</p>
              </center>
              <br />
              <br />
            </div>
            <h4 className='counter-lable'>Quality Checks</h4>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
