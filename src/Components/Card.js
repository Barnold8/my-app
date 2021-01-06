import { Frame, motion } from 'framer'
import React, { useState } from 'react'


function Card(props){


    

    const HigherBounds = 285
    const LowerBounds = 155

    let Amount = HigherBounds - LowerBounds

    const [size, Sizer] = useState(LowerBounds);
    const SetSize = () => Sizer(size+Amount) 



    let Title, Content

    if(size >= HigherBounds && size >= LowerBounds){

        Amount = -Amount
    
      }


    if(size >= HigherBounds){

        Title = props.Title
        Content = props.Content
    }
    else{

        Title = null
        Content = null

    }


    return(
        <Frame
            className="text-white"
            animate={{size}}
            backgroundColor={props.col}
            bottom={props.bottom}
            left={props.left}
            size={500}
            onTap={SetSize}
            radius={80}
            image={props.Image}
        
        >
            

        <motion.div
            
            
           
            
        >
           
            
            </motion.div>


            <div className="my-80 font-bold text-center text-8x1">{Title}</div>
            <div className="-my-72 font-bold text-center text-8x1">{Content} </div>

            </Frame>
            


    )

}export default Card