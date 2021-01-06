import { Frame } from 'framer';
import React from 'react'




function BackGround(props){

    
    let gradient;

    if(props.col.toLowerCase() == "black"){

        gradient = "linear-gradient(0deg, rgba(0,0,0,1) 77%, rgba(120,120,120,1) 93%, rgba(255,255,255,1) 100%)" 

    }
    else{

        gradient= "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(120,120,120,1) 6%, rgba(0,0,0,1) 18%)"
    }

    console.log(gradient)
    return(

        <div style={{height:props.height,background:`${gradient}`}} >
        
            {props.content}
        </div>

    )


}export default BackGround