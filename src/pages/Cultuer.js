import React from 'react'
import "../assets/styles/timeline.css"
const Cultuer = () => {
  return (
    <div className="culture-mainContainer">
      <div className="culture-box">
            <h1
              style={{
                fontWeight: 700,
                fontSize: "60px",
                lineweight: "75.6px",
                letterSpacing: "-2%",
                // marginLeft:"40px"
              }}
            >
              Cultuer
            </h1>
        <div className="culture-content">
          <div style={{ display: "flex", flexDirection: "row",gap:"20px" }}>
            <br/>
            <br/>
            <div className="timeline">
            <div className="lines">
            <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
            <div className="dot" style={{backgroundColor:"#CB2139"}}></div>
            <p style={{color:"#CB2139"}}>The Attitude Of Gratitude</p>
            </div>
            <div className="line" style={{background:"#CB2139"}}></div>
            <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
            <div className="dot"></div>
            <p>The Attitude Of Gratitude</p>
            </div>
            <div className="line"></div>
            <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
            <div className="dot"></div>
            <p>The Attitude Of Gratitude</p>
            </div>
            <div className="line"></div>
          </div>
              {/* <Timeline>
                <TimelineItem sx={{ color: "#CB2139" }}>
                  <TimelineSeparator>
                    <TimelineDot sx={{ backgroundColor: "#CB2139" }} />
                    <TimelineConnector sx={{ bgcolor: "#CB2139" }} />
                  </TimelineSeparator>
                  <TimelineContent sx={{ color: "#CB2139", width:"560px", fontSize:"20px", fontWeight:600, lineHeight:"30px"}}>
                    The Attitude Of Gratitude
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{  width:"460px", fontSize:"20px", fontWeight:600, lineHeight:"30px"}}>The Attitude Of Wellness</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{  width:"460px", fontSize:"20px", fontWeight:600, lineHeight:"30px"}}>The Attitude Of Learning</TimelineContent>
                </TimelineItem>
              </Timeline> */}
            </div>
          <img src={require("../assets/images/house-service.jpeg")} alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cultuer
