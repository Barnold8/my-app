
import React from 'react'
import Staff from './Staff'
import testIMG from '../Images/Box1.jpg'



var JayArray = []


// function Hex2Den(ColString){

//   //setup
  
//   let tempColString = ColString.toUpperCase()   //Makes incoming string upper case for easier hex identification
//   let newStr = tempColString.split('')          //Splits said string into an array for counting and adding to its components
//   let counter = 0                               //Default counter to mitigate any error with I in loop
//   let endStr = ""                               //This string to have an end string to then split into sections on n where n is 2, this is to figure out the denary of our hex value for our RGB
//   //console.log(newStr)

//   if(newStr.length <=5){                        //If the length of our array is less than 6 (what we want for our hex value, for the best colour accuracy, finish it up)
//     //Completes hex value to full 6 digits
//     let difference =  6 - newStr.length         //Find the amount of array ojects missing
//     for(let i = 0; i < difference; i++){        //For the amount of missing objects, do the code below
//         newStr.push(newStr[counter])            //Push the first element of the current array, to the end, duplicating itself till our number of difference is complete within  the loop
//         counter++                               //Increment counter
        
//     }
//     //console.log(newStr)
//   }

//   //Turn hex to denary


//    for(let i = 0; i < newStr.length; i++){

//         endStr += newStr[i]

//    }

//    let MathArray = endStr.match(/.{1,2}/g);
//    //console.log(MathArray)

//    let finish = FinishHex(MathArray)

//    return finish
// }
    
 
// //Creating new function for the soul fact that the one above this has too much code in it, its for my own clean code practice

// function FinishHex(hexARR){


//     let hexArr = ["A","B","C","D","E","F"]
//     let numArray = ["0","1","2","3","4","5"]
//     let tempArray = []
//     console.log(hexARR)
 
//     let endArray = []

//     for(let i = 0; i < hexARR.length; i++){

//         tempArray.push(hexARR[i].split(''))

//     }
//     for(let i = 0; i < tempArray.length; i++){
//         let num1 = 0
//         let num2 = 0
//         for(let y = 0 ; y < tempArray[i].length; y++ ){
            
//             switch(y){

//                 case 0:
//                     if(hexArr.includes(hexArr.indexOf(tempArray[i][y]))){
//                     num1 = (hexArr.indexOf(tempArray[i][y]) + 10) * 16
//                     }                       //console.log("y = 0")
//                     else{num1 = (parseInt(numArray.indexOf(tempArray[i][y])), 10) * 16}
//                 break;

//                 case 1:
//                     if(hexArr.includes(hexArr.indexOf(tempArray[i][y]))){
//                     num2 = hexArr.indexOf(tempArray[i][y]) + 10
//                     }
//                     else{num2 = (parseInt(numArray.indexOf(tempArray[i][y])), 10)}
//                     //console.log("y = 1")
//                 break;

//                 default:
//                     num1 = 0
//                     num2 = 0
//                     break
//             }
            
//         }
//         endArray.push(num1+num2)
//     }
//    // console.log(endArray)

//     // for(let i = 0; i < hexARR.length; i++){
//     //     let num1 = 0
//     //     let num2 = 0
//     //     for(let y = 0; y < hexARR[i].length; y++){
//     //         console.log(hexARR[i][y])
//     //         if(y === 0){
//     //             num1 =(hexArr.indexOf(hexARR[i][y]) + 10) * 16
//     //         }
//     //         else if(y === 1){

//     //             num2 = (hexArr.indexOf(hexARR[i][y]) + 10)

//     //         }
//     //         console.log(num1+num2)
            
//     //     }
//     // }
//     //console.log(tempArray)

//     return endArray
// }

//I had a lightbulb moment and realised I dont need those functions up above

//console.log(colArr)
function AboutUs(props){
    
    let colArrays = [    // This 2D array will be sufficent enough to do the linear gradient but I am sure there is a more suited way of doing this
        [153, 27, 27], [6,95,70], [146,64,14] ,[157,23,77], [91,33,182], [30,64,175] ,[55,48,163]
    ]

    return(
        <div style={{height:`${props.heightsize}px`,background:`linear-gradient(180deg, rgba(${colArrays[props.number][0]},${colArrays[props.number][1]},${colArrays[props.number][2]},1) 0%, rgba(255,255,255,1) 23%`}}>
            <div style={{fontSize: 60}} className="font-serif font-light w-full py-40 text-gray-500"> About us!  </div>   {/* Title */}
           

            <div className="-py-96 text-gray-500 w-96 inline-block justify-center">  
                    Despite our name, we dont only specialise in wall art! We are also known to make a variety of items. One of our most popular products is the Bespoke Storage Unit! <br/><br/>
                    Top tip! Have you tried dragging the social media icons?
            </div> 
        
            <div style={{fontSize: 60}} className="font-serif font-light w-full py-10 text-gray-500"> Our Staff! </div>   {/* Title */}

            <Staff Name="Jay" Role="Owner/Artist" TextArray={JayArray} bg="#000"/>
            
            
        </div>
    )


}


export default AboutUs


// Jay - Owner/Artist
// I first started drawing about 15years ago when my children first asked me draw a picture of 'The Lion King' for them. I've never considered myself as an artist before but do have a great eye for detail. So, I gave it a go and was astounded by how good it was.... even if I do say so myself! As you can imagine, the kids soon asked me to draw anything and everything. Then came the question... "Can you draw a picture on my bedroom wall?". The passion was ignited....

// From that first painting came lots of requests from family and friends.

// Whilst painting, I still worked full-time and fitted my pastime around my work and family commitments. This carried on for a couple of years until other people were offering to pay me a proper wage to decorate their rooms. At this point came the big decision... which career path do I choose? My wife became pregnant with our fourth child (yes, fourth! We actually have five now!) and the I got offered a significant promotion. I took the safe option and had a successful career as an Operations Manager in a Construction company for over 10 years but I still kept my hand-in with the painting.

// As the recession hit, the company folded and I was made redundant. After spending time at home being a 'house-husband' its time for a new challenge...

// Also, all our artists are DBS checked.
// holly- admin assistant
// I'm Jay's  daughter and joined the family business in September 2014. My tasks include marketing, all aspects of admin and social media.