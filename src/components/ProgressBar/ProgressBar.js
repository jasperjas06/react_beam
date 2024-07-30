import React from 'react'
import { ProgressBar, Step } from 'react-step-progress-bar'
import "./style.css"
import "react-step-progress-bar/styles.css";
const Progressbar = ({percent}) => {
  return (
    <div>
      <ProgressBar percent={percent}>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
</ProgressBar>
    </div>
  )
}

export default Progressbar
