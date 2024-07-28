// import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Faqs = () => {
    const [questions,setQuestions] = useState([
        {
            q:"Lorem ipsum dolor sit amet consectetur. A convallis  ?",
            ans:"Lorem ipsum dolor sit amet consectetur. A convallis non praesent ultricies vivamus eget urna aliquam.",
            id:1,
            view:false
        },
        {
            q:"Lorem ipsum dolor sit amet consectetur. A convallis  ?",
            ans:"Lorem ipsum dolor sit amet consectetur. A convallis non praesent ultricies vivamus eget urna aliquam.",
            id:2,
            view:false
        },
        {
            q:"Lorem ipsum dolor sit amet consectetur. A convallis  ?",
            ans:"Lorem ipsum dolor sit amet consectetur. A convallis non praesent ultricies vivamus eget urna aliquam.",
            id:3,
            view:false
        },
        {
            q:"Lorem ipsum dolor sit amet consectetur. A convallis  ?",
            ans:"Lorem ipsum dolor sit amet consectetur. A convallis non praesent ultricies vivamus eget urna aliquam.",
            id:4,
            view:false
        },
        {
            q:"Lorem ipsum dolor sit amet consectetur. A convallis  ?",
            ans:"Lorem ipsum dolor sit amet consectetur. A convallis non praesent ultricies vivamus eget urna aliquam.",
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
    <>
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
                    <>
                    <div key={question.id} className='faq-question-item' onClick={()=>showAnswer(index)}>
                        <div className='faq-question-item-header'>
                            <p>{question.q}</p>
                        </div>
                        {question.view && <div className='faq-question-item-content' style={{width:"600px"}}>
                            <p>{question.ans}</p>
                        </div>}
                    </div>
                    <div style={{width:"100%",height:"2px",background:"black"}}/>
                    </>
                )
            })}
      </div>
    </div>

    </>
  )
}

export default Faqs
