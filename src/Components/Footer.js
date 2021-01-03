import { motion } from 'framer';
import React from 'react'
import DraggableIcon from './DraggableIcon'
import SocialMedia from './SocialMedia'

//Images
import twitter from '../Images/twitter.png'
import facebook from '../Images/Facebook.png'
import youtube from '../Images/Youtube.png'
import phone from '../Images/Phone.png'
import pc from '../Images/pc.png'
//----
function Footer(props){

    let CurrentDate = new Date();
    let Year = CurrentDate.getFullYear();
    let defaultStyle= "text-center w-full place-self-center"

    return(

        <footer className={`p-40 h-30 font-bold text-white bg-${props.name}-900  bottom-0 w-full `} style={{textShadow: "2px 2px #444444"}}>

            <div className=" pl-32 -my-16 absolute text-xl">
            <SocialMedia/></div>

            <div className={`absolute shadow-2xl border-opacity-100 border-4 pr-10 py-10 -my-4 border-width-10 border-${props.name}-700 bg-${props.name}-800`} >
                             {/*This div is for social media*/}

                    
                             

                     <a> <DraggableIcon image={twitter} className="object-top-left" text="Twitter" link="https://twitter.com/JayUniquewalls"/></a>
                     <a> <DraggableIcon image={facebook} className="object-right" text="Facebook" link="https://www.facebook.com/uniquewallsuk"/></a>
                     <a> <DraggableIcon image={youtube} className="object-right" text="Youtube" link="https://www.youtube.com/channel/UC7f3EEG9dgXsN00IyHkqzgQ"/></a>
                       

            </div>


            <div className={defaultStyle}> {/*This div is for all footer center parts */}
                    
                     Copyright &copy; {Year}<br/>
                     Designed by: <a href="https://github.com/Barnold8" > Brandon Wright </a><br/>
                     <a href="https://github.com/Barnold8/my-app" > This site on GitHub! </a>
                     <div className="text-xs py-8 m-0 text-center">
                     All rights reserved
                     </div>
            </div>


            <div className="right-0 absolute text-sm  flex">
                    <div className="-my-52 mr-20 -py-3">
                    Is this website looking strange? Click the device you are using to fix this!<br/>
                    <img src={phone} style={{height:100, width:100}}  className="my-12 inline-block"/>
                    <img src={pc} style={{height:100, width:100}}  className=" my-12 ml-60 inline-block"/>
                    </div>
            </div>

        </footer>

    )


}


export default Footer