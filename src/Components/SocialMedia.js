import { motion } from 'framer'
import React from 'react'

//This provides the social media title to animate


class Letter{

    constructor(Letter){

       

       this.Letter = Letter
       this.Letter = this.Letter.toLowerCase() //Will stop possible bugs in future code

       //All let vars are there so they are private variables and can only be accessed by the object
       let offset = 0.25
       let letters = ["s","o","c","i","a","l","m","e","d","i","a"]
       let limit = 40 ; //Amount of frames in letter animation
       let keyFrameMax =  21 
       let keyFrameMin = 0;
       let keyFrames = []
       let startingNum
       let caughtMatch = false
       let addBy = 1

       for(let i = 0 ; i < letters.length; i++){
            if(this.Letter === letters[i]){
                startingNum = i //this essentially says, go through the array and if the two items match, the starting number is the index of that array item +1. +1 because our keyframe values will start at 1
                //console.log(`starting num = ${startingNum}`)   
                caughtMatch = true;         
            }
            else{
                //console.log(this.Letter + this.letters[i])

            }
       }
        
       if(caughtMatch){

        for(let i = 0; i < limit; i++){
            
            startingNum += addBy

            if(startingNum >= keyFrameMax){
                
                addBy = -addBy
                
            }
            else if(startingNum <= keyFrameMin){
                addBy = -addBy
            }
           

            keyFrames.push(startingNum)
        }
    }
    
  
    this.info = 
          <motion.div
       
                    whileHover={{y: keyFrames}}
                    
                    transition={{
                        
                        duration:1.45,
                        
                        
                        
                    }}>
       
       {Letter}
  
    </motion.div> 
    console.log(` Keyframes: ${keyFrames}`)
        }
  
    }



function SocialMedia(){

    let s = new Letter("S")
    let o = new Letter("o")
    let c = new Letter("c")
    let i = new Letter("i")
    let a = new Letter("a")
    let l = new Letter("l")


    let m = new Letter("M")
    let e = new Letter("e")
    let d = new Letter("d")
    //let i = new Letter("i")
    //let a = new Letter("a")
 
    
    
    return(

        <div className="flex">

            <div className="flex">
                
                {s.info}
                {o.info}
                {c.info}
                {i.info}
                {a.info}
                {l.info}

            </div>

                

            <div className="flex ml-8">

                {m.info}
                {e.info}
                {d.info}
                {i.info}
                {a.info}
                

            </div>

        </div>

    )

}

export default SocialMedia