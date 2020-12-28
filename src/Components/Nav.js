import React from 'react'


function ToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  
    console.log("To top ran")
}


function ToBottom(){
    window.scrollTo(0,document.body.scrollHeight)
  
    console.log("To bottom ran")
}

function Nav(){
    
    

    let hoverClass = " p-2 h-10 transform hover:scale-110 motion-reduce:transform-none transition-all hover:bg-white hover:text-black"

    return(

        <nav className=" space-x-20 flex justify-center text-white font-bold  box-content subpixel-antialiased "> 
            <a href="#home">
                <img 
                src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg"
                width="35" height="35" 
                className="absolute inset-0 p-2 transform hover:scale-110 motion-reduce:transform-none transition-transform"
                onClick={ToTop}
            />
            </a>

            <div className={hoverClass}> Home </div>

            <div className={hoverClass}> Store</div>

            <a 
                href="#footer" 
                className={hoverClass}
                onClick={ToBottom}
                >
                        Social media
                        
            </a>

            <div className={hoverClass}> Contact us</div>

        </nav>

    )


}

export default Nav


//NOTES: maybe change bg as you scroll down, would be with js. Also, do the hover events for header buttons