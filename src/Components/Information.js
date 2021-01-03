import React from 'react'
import { motion} from 'framer'
//I was going to have text in body components be dependant on text files that the client could write himself giving him full control, however, this is getting silly for me trying this for hours for one feature


function Information(props){

    let col = props.colour
    let lowerCol = col.toLowerCase()
    let txt

    console.log(typeof(props.y))

    if(lowerCol === "white"){

        txt = "black"

    }
    else{txt="white"}


    return(

        <motion.div animate={{opacity:[0,1]}} className={`text-center w-full font-bold text-${txt} bg-${col}  `} >
            
                {props.content}

        </motion.div>

    )
    // className={`text-center w-full font-bold text-${txt} bg-${col} `}

}


export default Information