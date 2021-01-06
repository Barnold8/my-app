
// ALL IMPORTS - All important stuff I have made and isnt automatically generated will be found in "components"
import Header from './Components/Header'
import Title from './Components/Title'
import Footer from './Components/Footer'
import { useState } from 'react'
import AboutUs from './Components/AboutUs'
import Information from './Components/Information'
import BackGround from './Components/BackGround'
import Card from './Components/Card'
import image1 from './Images for Website/Boxes/0.png'
// import Scroller from './Components/Scroller'


//<Content/

  //NOTE! Frame is good for CSS animations that need their own positioning

  let About = <AboutUs/>

function App() {
  let [num, numSetter] = useState(0)

  let cols = ["red","green","yellow","pink","purple","blue","indigo"] //Use colour for footer too

  let spacing =  300

  let rows = [-2000, -2500]


  if(num >= cols.length){num = 0}
  
  return (

    <div>

    <Header name={cols[num]}/>
    <button  onClick={() => numSetter(num + 1)} className="sticky  float-right p-2 text-white font-bold  " >Colour changer</button>
    <Title name={cols[num]}/>

    <Information content={<AboutUs heightsize="1550" number={num}/>} colour="FFF" />
   
    {/* <Information colour="000" content={<Scroller  heightsize="1250" number={num}/>}/> NOTE: this was going to be an image, automatic scrolling thing but with the way the pictures are, it doesnt look nice*/}

    <BackGround col="black" height="2002px" Title="Our Products"  content={
        <>
        <Card col="black" Image={image1} Title="Yeezy-Boost-350" Content="This brown box with the Yeezy finish ect ect...."

          bottom={rows[0]}
          left={100}
      
        />


        <Card col="black" Image={image1} Title="Yeezy-Boost-350" Content="This brown box with the Yeezy finish ect ect...."

          bottom={-2000}
          left={100 + spacing}

        />

        <Card col="black" Image={image1} Title="Yeezy-Boost-350" Content="This brown box with the Yeezy finish ect ect...."

        bottom={rows[0]}
        left={100 + spacing * 2}

        />


        <Card col="black" Image={image1} Title="Yeezy-Boost-350" Content="This brown box with the Yeezy finish ect ect...."

            bottom={rows[1]}
            left={100}

        />
              

        </>
    
    }/>
    <Footer name={cols[num]}/>
    </div>
  );
}

export default App;
