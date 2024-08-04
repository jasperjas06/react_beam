// import { Divider } from '@mui/material'
import { MDBContainer } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react'

const Faqs = () => {
    const [questions,setQuestions] = useState([
        {
            q:"What sets BeamTech apart from other construction companies ?",
            ans:"BeamTech combines cutting-edge technology with time-tested construction practices to deliver innovative, high-quality, and sustainable solutions for all types of projects.",
            id:1,
            view:false
        },
        {
            q:"How does BeamTech ensure project quality and safety ?",
            ans:"We conduct rigorous inspections at every stage of construction and work closely with local authorities to obtain necessary approvals, ensuring compliance with all regulatory requirements.",
            id:2,
            view:false
        },
        {
            q:"What types of projects does BeamTech specialize in ?",
            ans:"BeamTech specializes in residential, commercial, and industrial projects, including sustainable homes, modern office complexes, and eco-friendly manufacturing plants.",
            id:3,
            view:false
        },
        {
            q:"How can I get a quote for my project ?",
            ans:"You can contact us via phone at +91 – 7373535789 or email at info@beamtech.com to schedule a free consultation and receive a detailed quote for your project.",
            id:4,
            view:false
        },
        {
            q:"What sustainable practices does BeamTech implement ?",
            ans:"We prioritize eco-friendly construction techniques, use sustainable materials, and integrate smart building systems to minimize environmental impact and enhance energy efficiency.",
            id:5,
            view:false
        },
    ])
    const showAnswer = (index)=>{
    //    console.log(index);
    let newQuestions = [...questions];
    newQuestions[index].view = !newQuestions[index].view;
    setQuestions(newQuestions);
    }
    useEffect(()=>{},[questions])
  return (
    <MDBContainer>
    <div className='faq-container'>
      <div className='faq-header'>
        <p>FAQs</p>
        <div className='faq-content'>
            <p>Lorem ipsum dolor sit amet consectetur. A convallis non praesent ultricies vivamus eget urna aliquam.</p>
        </div>
      </div>
      <div className='faq-question'>
            {questions.map((question,index)=>{
                return(
                    <div key={index} className='faq-question-container'>
                    <div  className='faq-question-item' onClick={()=>showAnswer(index)}>
                        <div className='faq-question-item-header'>
                            <p>{question.q}</p>
                        </div>
                        {question.view && <div className='faq-question-item-content' style={{width:"600px"}}>
                            <p>{question.ans}</p>
                        </div>}
                    </div>
                    <div className='hrLine'/>
                    </div>
                )
            })}
      </div>
    </div>

    </MDBContainer>
  )
}

export default Faqs
