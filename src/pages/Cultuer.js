import React from 'react'
import "../assets/styles/timeline.css"
const Cultuer = () => {
  return (
    <div className="culture-mainContainer">
      <div className="culture-box">
        <div className="culture-content">
          <div style={{ display: "flex", flexDirection: "column" }}>
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
            <br/>
            <br/>
            <div className="timeline">
            <div class="lines">
            <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
            <div class="dot" style={{backgroundColor:"#CB2139"}}></div>
            <p style={{color:"#CB2139"}}>The Attitude Of Gratitude</p>
            </div>
            <div class="line" style={{background:"#CB2139"}}></div>
            <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
            <div class="dot"></div>
            <p>The Attitude Of Gratitude</p>
            </div>
            <div class="line"></div>
            <div style={{display:'flex', justifyContent:'center', alignItems:"center"}}>
            <div class="dot"></div>
            <p>The Attitude Of Gratitude</p>
            </div>
            <div class="line"></div>
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
          </div>
          <img src={require("../assets/images/house-service.jpeg")} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Cultuer
