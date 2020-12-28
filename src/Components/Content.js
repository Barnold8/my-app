import React from 'react'
import TestIMG from '../Test.jpg'


function Content(props){

    //I was originally going to have the bg be an image from unique walls but blurred. I then saw the footer at 800 next to the header and decided "This should be the background now"

    return(
        <div className={`font-bold text-white bg-${props.name}-800  bottom-0 w-full h-auto shadow-lg `}>
           <br/> <br/>  {/*The breaks are here because tailwind insists the header needs to be above everything*/}
            Content to be made, include some scrolling thing for shop items
      
        </div>
    )


}

export default Content

