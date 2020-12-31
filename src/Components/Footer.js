import { motion } from 'framer';
import React from 'react'
import DraggableIcon from './DraggableIcon'

//Images
import twitter from '../Images/twitter.png'
import facebook from '../Images/Facebook.png'
import youtube from '../Images/Youtube.png'
//----
function Footer(props){

    let CurrentDate = new Date();
    let Year = CurrentDate.getFullYear();
    let defaultStyle= "text-center w-full place-self-center"

    return(

        <footer className={`p-40 h-30 font-bold text-white bg-${props.name}-900  bottom-0 w-full`}>

            <div className={`absolute shadow-2xl border-opacity-100 border-4 pr-10 py-10 -my-4 border-width-10 border-${props.name}-700 bg-${props.name}-800`} >
                             {/*This div is for social media*/}
                     <span>      
                     <a > <DraggableIcon image={twitter} className="object-top-left" text="Twitter" link="https://twitter.com/JayUniquewalls"/></a>
                     <a> <DraggableIcon image={facebook} className="object-right" text="Facebook" link="https://www.facebook.com/uniquewallsuk"/></a>
                     <a> <DraggableIcon image={youtube} className="object-right" text="Youtube" link="https://www.youtube.com/channel/UC7f3EEG9dgXsN00IyHkqzgQ"/></a>
                     </span>  

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