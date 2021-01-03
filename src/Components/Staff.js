import React from 'react'
import { Frame } from 'framer'

function Staff(props){

    let negative;

    let bg = props.bg
    bg = bg.toLowerCase()

    if(bg == "black" || "#000000"){

        negative = "white"
    }
    else if(bg == "white" || "#fff" || "#ffffff"){

        negative = "black"
    }

    return(
        <div>
        <Frame radius={30}
        size={80}
        background={bg}
        whileHover={{scale:1.2}}
        
        >{props.Name}</Frame>


        </div>
    )


}


export default Staff