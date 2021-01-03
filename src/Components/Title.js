import React, {useState} from 'react'

//import Learning from './Learning'
import { animate, motion} from "framer-motion"




//<motion.div animate={{x:[-1000,0],rotate:[180,360],}}transition={{ duration:1,  ease: "easeInOut"}}className="text-center  p-44  z-0" style={{fontSize: "120px"}}> 
//Unique Walls               I felt this animation was too much for a title intro              
//</motion.div>



function Title(props){

    //I was originally going to have the bg be an image from unique walls but blurred. I then saw the footer at 800 next to the header and decided "This should be the background now"

  

    return(
        <div className={`font-bold text-white bg-${props.name}-800  bottom-0 w-full h-auto shadow-lg `}>
           <br/> <br/>  {/*The breaks are here because tailwind insists the header needs to be above everything*/}
           

            <motion.div className="text-center py-28   z-0 border-b-1 border-white-900" style={{fontSize: "120px", textShadow: "2px 2px #444444"}}
            animate={{scale:[0.5,1]}}
            
            > 
                                        Unique Walls                             
            </motion.div>
            
         
          


            {/*Animated title to go here}
            <Learning/>*/}
        </div>
    )


}

export default Title

