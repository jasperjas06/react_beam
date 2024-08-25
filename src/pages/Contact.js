/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SocialIcon from "../components/Social Icon/SocialIcon";
import NavBar from "../nav/NavBar";
import { MDBContainer } from "mdb-react-ui-kit";

export default function Contact({open,sepratePage=true}) {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '7904138012',
        message: '',
    });

    const [templateMessage, setTemplateMessage] = useState('');

    const [errors, setErrors] = useState({
        fullName: '',
        mobile: '',
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        const newErrors = {
            fullName: '',
            mobile: '',
            message:""
        }

        const messageTemplate = ` Hello,
        Name: ${formData.fullName}
        mobile: ${formData.mobile}
        Message:
        ${formData.message}`;

        setTemplateMessage(messageTemplate);

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full Name is required';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            valid = false;
        }

        // if (!formData.mobile.trim()) {
        //     newErrors.mobile = 'mobile number is required';
        //     valid = false;
        // }

        if (!valid) {
            setErrors(newErrors);
            return;
        }

        let number = formData.mobile.replace(/[^\w\s]/gi, "").replace(/ /g, "");
        const message = encodeURIComponent("Hi i'm "+formData.fullName +", "+formData.message);
        // Appending the phone number to the URL
        let url = `https://wa.me/${formData.mobile}?text=${message}`;

        // Appending the message to the URL by encoding it
        // url += `&text=${encodeURI(formData.message)}&app_absent=0`;

        // Open our newly created URL in a new tab to send the message
        window.open(url);


        setFormData({
            fullName: '',
            mobile: '',
            message: '',
        });
    }

    return (
        <>
            {/* {sepratePage && <Navbar setOpen={setOpen} />} */}
            {/* className="mt-24 pt-20 px-12 grid grid-cols-3 gap-8" */}
            {
                open && <NavBar/>
            }
            {
                open && (<><br/>
                    
                <br/></>)
            }
            <MDBContainer style={{marginTop:"10px"}}>
            <div style={{display:"grid", gridTemplateColumns:"auto auto ", }} className="contact-container">
                <div className="text-center md:text-left md:col-span-1">
                    {/* className="text-6xl font-bold" */}
                    <h1 className="contact-title">Contact Us</h1>
                    {/* className="pt-12 text-2xl" */}
                    <p className="contact-lines">
                        Ariesh Technologies Private Limited, <br />
                        49/13 Bharathiyar 16th Street,<br />
                        Sankarankovil, Tenaksi Dst,<br />
                        TN - 627756, India.<br />
                    </p>
                    {/* className="flex space-x-4 pt-10" */}
                    <div className="contact-social">
                        <SocialIcon icon={faTwitter} link="https://twitter.com" />
                        <SocialIcon icon={faFacebookF} link="https://facebook.com" />
                        <SocialIcon icon={faInstagram} link="https://www.instagram.com/beam.tech?igsh=eWRrMjl2aWprbnJ5" />
                        <SocialIcon icon={faLinkedinIn} link="https://linkedin.com" />
                        <SocialIcon icon={faYoutube} link="https://youtube.com" />
                    </div>
                    {/* className="pt-10" */}
                    <div style={{display:'flex',flexDirection:'column', float:'left', marginTop:"2px"}}>
                    <div  style={{float:'left'}}>
                        <p className="text-lg"><FontAwesomeIcon icon={faPhone} className="mr-2" /> +91 7373535789</p>
                    </div>

                    <div  style={{float:'left'}}>
                        <p className="text-lg"><FontAwesomeIcon icon={faEnvelope} className="mr-2" />info@beamtech.com</p>
                    </div>
                    </div>
                </div>
                <div className="Form">
                    {/* className="w-full h-auto bg-[#dcddde] px-16 py-10 col-span-2" */}
                    <div style={{width:"100%", height:'auto', background:"#dcddde", padding:"20px"}} className="w-full h-auto bg-[#dcddde] px-4 md:px-16 py-8 md:py-10">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm md:text-lg text-black">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    style={{width:'100%', padding:'2px',border:'black'}}
                                    className={`w-full p-2 border border-black rounded ${errors.fullName ? 'border-red-500' : ''}`} />
                                {errors.fullName && <p style={{color:"red"}} className="text-red-500 text-sm">{errors.fullName}</p>}
                            </div>

                            {/* <div className="mb-4">
                                <label className="block mb-2 text-sm md:text-lg text-black">Mobile Number</label>
                                <input
                                    type="number"
                                    name="mobile"
                                    disabled
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    style={{width:'100%', padding:'2px',border:'black'}}
                                    className={`w-full p-2 border border-black rounded ${errors.mobile ? 'border-red-500' : ''}`} />
                                {errors.mobile && <p style={{color:"red"}} className="text-red-500 text-sm">{errors.mobile}</p>}
                            </div> */}

                            <div className="mb-4">
                                <label className="block mb-2 text-sm md:text-lg text-black">Message</label>
                                <textarea
                                    name="message"
                                    style={{width:'100%', padding:'2px',border:'black', resize:"none",}}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-black rounded resize-none" />
                                {errors.message && <p style={{color:"red"}} className="text-red-500 text-sm">{errors.message}</p>}
                            </div>

                            <div className="">
                                <button
                                    type="submit"

                                    // className="cursor-pointer px-4 py-2 text-white submit-btn">
                                    style={{background:"#cb2139",cursor:'pointer'}}
                                    className="cursor-pointer px-4 py-2 text-white bg-[#cb2139] hover:bg-[#a21c32] transition-colors rounded">
                                    <span>Send</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </MDBContainer>
        </>
    );
}