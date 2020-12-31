import { motion } from 'framer';
import React from 'react'
import twitter from '../Images/twitter.png'
import DraggableIcon from './DraggableIcon'

function Footer(props){

    let CurrentDate = new Date();
    let Year = CurrentDate.getFullYear();
    let defaultStyle= "text-center w-full place-self-center"

    return(

        <footer className={`p-20 h-30 font-bold text-white bg-${props.name}-900  bottom-0 w-full`}>

            <div className="float-left border-solid border-black ">
                             {/*This div is for social media*/}
                             
                     <a > <DraggableIcon image={twitter} x="100" y="2"/></a>
                      

            </div>


            <div className={defaultStyle}> {/*This div is for all footer center parts */}
                     Designed by: <a href="https://github.com/Barnold8" > Brandon Wright </a><br/>
                     Copyright &copy; {Year}<br/>
                     <a href="https://github.com/Barnold8/my-app" > This site on GitHub! </a>
                     <div className="text-xs py-8 m-0 text-center">
                     All rights reserved
                     </div>
            </div>


            <div >
                    
            </div>

        </footer>

    )


}


export default Footer