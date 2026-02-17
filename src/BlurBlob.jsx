import React from "react";
import PropTypes from "prop-types";



const BlurBlob = ({position, size}) => {
 // Destrucutre position and size
    const {top, left} = position;
    const {width, height} = size;
    // passing top , width, left.. as props
    return (
        <div className="absolute"
            style={{
                top: top,
                width: width,
                left: left,
                height: height, 
                transform: "translate(-50%,-50%)",
                 zIndex: 0,                
            }}
        >
         <div className="w-full h-full bg-[#e28e06] rounded-full opacity-20 blur-3xl animate-blob">

         </div>


        </div>
    )
}

// Define Prop Types 

BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
}

export default BlurBlob;