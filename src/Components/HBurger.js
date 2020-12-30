import React, { useState } from 'react'
import { animate, motion} from "framer-motion"

import { Frame, Size } from "framer";

var w = window.innerWidth;
var h = window.innerHeight;

function HBurger(){

    
  const [size, setSize] = useState(40);
const toggleRotate = () => setSize(size +w); {/*This needs to be finished, it will cover left of the screen */}

  return (
    <Frame
      animate={{ size }}
      onTap={toggleRotate}
      size={40}
      radius={30}
      background={"green"}

      transition={{
        duration:2

      }}
    />
    )
  }







export default HBurger