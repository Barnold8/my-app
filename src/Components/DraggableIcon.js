import { motion} from 'framer'
import React from 'react'




function DraggableIcon(props){

    let height_ = 50
    let width_  = 50

    let dragAmount = 100

    return(

        <motion.div
        
            drag
            dragConstraints={{

                top:-dragAmount,
                left: -dragAmount,
                right: dragAmount,
                bottom: dragAmount

            }}
            whileHover={
                    {scale: 1.125},{cursor:"grab"}
            }
            whileDrag= {
                {scale: 1.2}, {cursor: "grabbing"}
            }
            
        >
            <img src={props.image} draggable="false" height={height_} width={width_}/>
            </motion.div>



       

    )


}

export default DraggableIcon
