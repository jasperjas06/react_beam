import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Building from "../assets/images/building-1.jpg";
import Icon from "../assets/images/icon.png";
import "../components/styles.css"
export default function Card({ hoverText, packageDetails, fileLink, name }) {
    return (
        <>
            <div className="clipped-container p-2 ">
                <img
                    src={Building}
                    alt="Example Building"
                    className="clipped-img object-cover"
                />
                <div className="overlay-logo">
                    <img src={Icon} alt="Logo" />
                </div>
                <div style={{position:"absolute",left:0,top:0,width:"100%", height:"100%", justifyContent:"center", alignItems:"center", display:"flex"}} className="overlay-text absolute inset-0 flex justify-center">
                    <p className="text-white text-center relative top-28 text-4xl font-semibold">{hoverText}</p>
                </div>
                <div style={{display:"flex", justifyContent:"center", position:"relative", zIndex:10,}} className="flex justify-center py-6 relative z-10">
                    <a
                        href={fileLink}
                        // to="/package"
                        // to = {fileLink}
                        download={name + " package details"}
                        // state={{ packageDetails }}
                        style={{borderRadius:20,textDecoration:"none"}}
                        className="cursor-pointer px-4 py-2 text-white submit-btn rounded-full text-lg"
                    >
                        <span className="flex items-center">Learn more <FontAwesomeIcon icon={faArrowRight} className="ms-2" /></span>
                    </a>
                </div>
            </div>
        </>
    );
}