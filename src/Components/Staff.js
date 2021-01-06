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
        <Frame
        
            left={props.PLeft}
            right={props.PRight}
            top={props.PUp}
            bottom={props.PDown}
            backgroundColor={"#FFFFFF"}
            width={500}
        >
        <div className={props.NameClass}>

        <Frame 
                radius={50}
                size={100}
                background={bg}
                whileHover={{scale:1.2}}

                left={props.Left}
                right={props.Right}
                top={props.Up}
                bottom={props.Down}
        >
            {props.Name} 
        </Frame>
        
    
        </div>
        <div className={props.TextClass}>{props.TextArray}</div>
       

        </Frame>
    )


}


export default Staff