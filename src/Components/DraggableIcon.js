import { motion} from 'framer'
import React from 'react'




function DraggableIcon(props){

    let height_ = 50
    let width_  = 50

    let dragAmount = 50

    return(

        <motion.div
            className="float-left pr-8 pl-8 "
            drag
            dragConstraints={{

                top:0,
                left: -(dragAmount /2),
                right: dragAmount,
                bottom: dragAmount

            }}
            whileHover={
                    {scale: 1.125}
            }
            whileDrag= {
                {scale: 1.2}
            }
            
        >
            <img src={props.image} draggable="false" height={height_} width={width_} />
            <a href={props.link} className="shadow-md">{props.text}</a>
            </motion.div>
    )

}

export default DraggableIcon
