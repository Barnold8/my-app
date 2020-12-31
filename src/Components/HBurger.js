import React, { useState } from 'react'
import { animate, motion} from "framer-motion"

import { Frame, Size } from "framer";


function HBurger(){
{/*This needs to be finished, it will cover left of the screen */}
  
  let newSize = 500;

  const [size, Sizer] = useState(40);
  const SetSize = () => Sizer(size+newSize) 


  if(size >= 500){

    newSize = -newSize

  }

  return (

    <Frame
      animate={{size}}
      onTap={SetSize}
      size={40}
      radius={30}
      background={"black"}

      transition={{
        duration:2

      }}
    >
       
       </Frame>



    )
  }







export default HBurger