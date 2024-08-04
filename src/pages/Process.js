/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import building from "../assets/animations/building.gif"
// import Navbar from "../components/Navbar/Navbar";
import NavBar from "../nav/NavBar.js";
import Progressbar from "../components/ProgressBar/ProgressBar.js";

export default function Process({open,sepratePage=true}) {
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const totalSteps = 6;
        const totalSeconds = 6;
        const intervalTime = (totalSeconds / totalSteps) * 1000;
    
        const interval = setInterval(() => {
          setCurrentStep(prev => {
            const nextStep = prev < totalSteps ? prev + 1 : 1;
            return nextStep;
          });
        }, intervalTime);
    
        return () => clearInterval(interval);
      }, []);
    
      const percent = ((currentStep - 1) / 5) * 100;
    //   console.log('Percent:' ,percent); 
    
    return (
        <div>
            {open && <NavBar  />}
            {/* className="px-14 py-10 mt-20 w-screen" */}
            <section className="howitwork px-6 py-8 mt-20 md:px-14 md:py-10 md:mt-20 " style={{width:"100%",}} >
                {/* className="text-5xl" */}
                <div className="text-3xl md:text-5xl">
                    {/* className="py-3 font-bold" */}
                    <h1 className="py-2 md:py-3 font-bold" style={{fontSize:"60px", fontWeight:"600", lineHeight:"75.6px", letterSpacing:"-2%"}}>How it
                        <span style={{ color: '#cb2139' }}> Works?</span>
                    </h1>
                </div>
                {/* className="text-2xl w-[490px] pt-5" */}
                <div className="process-box">
                <p >
                    Our house construction steps are simple and easy to understand: Plan - Build - Track - Settle in.
                </p>
                    
                </div>
                <div className="process-bar" style={{padding:'20px'}}>
                {/* <ProgressBar  currentStep={currentStep} /> */}
                <Progressbar percent={percent} />

                </div>
                <div style={{width:"100%",display:"flex", alignItems:'center', justifyContent:'center'}} className="Img flex justify-center h-96 w-auto">
                    
                    <img
                        src={building}
                        alt="Building Construction"
                        className="pt-8 md:pt-16 w-fit mx-auto"
                        // style={{paddingTop:8,maxWidth:"596px", height:"464px", padding:"40px"}}
                    />
                </div>
                <div className="flex justify-center">
                    {/* className="w-2/3 pt-16 text-2xl text-center" */}
                    <p className="w-full md:w-2/3 pt-8 md:pt-16 text-lg md:text-2xl text-justify">
                    At our company, building your dream home is straightforward. We start with a detailed planning phase, ensuring all your needs are met. Then, our expert builders bring your vision to life with high-quality construction. You can track the progress in real-time, staying informed every step of the way. Finally, we ensure everything is perfect before you settle into your new home.</p>
                </div>
            </section>
        </div>
    );
}