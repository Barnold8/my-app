import React from 'react'
import {  Frame } from 'framer'
import InnerScoller from './InnerScroller'


function dec2hexString(Arr) {       //Function modified from https://gist.github.com/agirorn/0e740d012b620968225de58859ccef5c
  
//   console.log(Arr)
   let section1 = (Arr[0]+0x10000).toString(16).substr(-4).toUpperCase().split('') 
   let section2 = (Arr[1]+0x10000).toString(16).substr(-4).toUpperCase().split('') 
   let section3 = (Arr[2]+0x10000).toString(16).substr(-4).toUpperCase().split('') 

    

  // let lastTwo = (dec+0x10000).toString(16).substr(-4).toUpperCase().split('')


   return( `#${section1[section1.length-2] + section1[section1.length-1] + section2[section2.length-2] + section2[section2.length-2] + section3[section3.length-2] + section3[section3.length-1]}`)
    
 }

var w = window.innerWidth;
function Scroller(props){


    const gradient = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 56%, rgba(24,24,24,1) 80%, rgba(75,75,75,1) 92%, rgba(255,255,255,1) 100%)"

    let colArrays = [    // This 2D array will be sufficent enough to do the linear gradient but I am sure there is a more suited way of doing this. Hate that I had to hardcode it in the end
        [153, 27, 27], [6,95,70], [146,64,14] ,[157,23,77], [91,33,182], [30,64,175] ,[55,48,163]
    ]

    let col = dec2hexString(colArrays[props.number])
   // console.log(col)
    var w = window.innerWidth
    return(

        <div style={{height:`${props.heightsize}px`,background:` ${gradient}`}}>
            
            <Frame 
            
            
                backgroundColor={`${col}`}
                left={0}
                bottom={-1852}
                width={w}
                height={500}
                
            
            >
                
                <InnerScoller size={500}/>
               

            </Frame>

        </div>

    )

}


export default Scroller