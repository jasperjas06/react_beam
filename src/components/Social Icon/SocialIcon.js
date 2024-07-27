import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialIcon({ icon, link }) {
    return (
        <div className="icons" style={{width:"40px", height:"40px", backgroundColor:"#DCDDDE", borderRadius:"50%",display:"flex",alignItems:"center", justifyContent:"center"}}>
        <a
            // className="w-12 h-12 bg-[#dcddde] flex justify-center items-center rounded-full text-xl hover:bg-[#cb2139] hover:text-white transition-colors duration-300"
           
            href={link}
            target='_blank'
        >
            <FontAwesomeIcon className='icon' icon={icon} />
        </a>
        </div>
        
    );
}

SocialIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    link: PropTypes.string.isRequired,
};

export default SocialIcon;
