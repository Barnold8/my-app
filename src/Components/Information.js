import React from 'react'

//I was going to have text in body components be dependant on text files that the client could write himself giving him full control, however, this is getting silly for me trying this for hours for one feature


function Information(props){

    let col = props.colour
    let lowerCol = col.toLowerCase()
    let txt;

    console.log(typeof(props.y))

    if(lowerCol === "white"){

        txt = "black"

    }
    else{txt="white"}

    return(

        <div className={`font-bold text-${txt} bg-${col} text-center w-full `}>
            
                {props.text}

        </div>

    )


}


export default Information