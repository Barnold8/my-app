import React from 'react'
import TestIMG from '../Test.jpg'
import Learning from './Learning'
import { motion, useMotionValue, useTransform } from "framer-motion"

function Content(props){

    //I was originally going to have the bg be an image from unique walls but blurred. I then saw the footer at 800 next to the header and decided "This should be the background now"

    return(
        <div className={`font-bold text-white bg-${props.name}-800  bottom-0 w-full h-auto shadow-lg `}>
           <br/> <br/>  {/*The breaks are here because tailwind insists the header needs to be above everything*/}
            
            <motion.div 
            animate={{scale:10, rotate:360, scale:1}}
            transition={{ ease: "easeOut", times: [0, 0.2, 0.5,], }} 
            className="text-center p-96"> 
                                        Unique Walls                             
            </motion.div>



            {/*Animated title to go here}
            <Learning/>*/}
        </div>
    )


}

export default Content

