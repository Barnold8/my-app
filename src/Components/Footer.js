import React from 'react'


function Footer(props){

    var CurrentDate = new Date();
    var Year = CurrentDate.getFullYear();

    return(

        <footer className={`p-20 h-30 font-bold text-white bg-${props.name}-900  bottom-0 w-full`}>

            <div>


            </div>


            <div className="text-center w-full place-self-center"> {/*This div is for all footer center parts */}
                     Designed by: <a href="https://github.com/Barnold8" > Brandon Wright </a><br/>
                     Copyright &copy; {Year}
            </div>


            <div>

                
            </div>

        </footer>

    )


}


export default Footer