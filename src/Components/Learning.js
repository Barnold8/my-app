//This file is for learning the things I do not yet currently know in react
//All the code here is not to be used in any deployment build

import React, { useRef }  from 'react'
import { motion, useMotionValue, useTransform } from "framer-motion"

const T_Img ="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"

function Learning(){



    return(

        <>
            <motion.div 
            whileHover={
                
                {scale: 1.01}

            }> <img src={T_Img}/> </motion.div> 

        </>
    )

}


//I am assuming useRef allows for a javascript reference toward objects without using DOM

// function Learning(){

//     const myRef =  useRef("Hello world") 

//     const onButtonClick = () => {myRef.current.focus()}

//     return(
//         <>
//         <br/>
//         <input ref={myRef} type="text" className="text-black" />
//         <button onClick={onButtonClick}>Focus the input</button>
//       </>

//     )

// }



export default Learning