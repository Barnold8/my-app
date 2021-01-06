import { Frame, motion } from 'framer'
import React, { useState } from 'react'
import image from '../Images/Box2.jpg'

function Card(props){


    const [clicked, ClickedSetter] =  useState(false)

    return(
        <Frame
        
            backgroundColor={props.col}
        
        
        >
            

        <motion.div
            className="float-left pr-8 pl-8 z-5 "
            
           
            
        >
            <img src={image} draggable="false" />
            
            </motion.div>


       

            </Frame>
            


    )

}export default Card