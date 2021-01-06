
// ALL IMPORTS - All important stuff I have made and isnt automatically generated will be found in "components"
import Header from './Components/Header'
import Title from './Components/Title'
import Footer from './Components/Footer'
import { useState } from 'react'
import AboutUs from './Components/AboutUs'
import Information from './Components/Information'
import BackGround from './Components/BackGround'
import Card from './Components/Card'
// import Scroller from './Components/Scroller'


//<Content/

  //NOTE! Frame is good for CSS animations that need their own positioning

  let About = <AboutUs/>

function App() {
  let [num, numSetter] = useState(0)

  let cols = ["red","green","yellow","pink","purple","blue","indigo"] //Use colour for footer too


  if(num >= cols.length){num = 0}
  
  return (

    <div>

    <Header name={cols[num]}/>
    <button  onClick={() => numSetter(num + 1)} className="sticky  float-right p-2 text-white font-bold  " >Colour changer</button>
    <Title name={cols[num]}/>

    <Information content={<AboutUs heightsize="1550" number={num}/>} colour="FFF" />
   
    {/* <Information colour="000" content={<Scroller  heightsize="1250" number={num}/>}/> NOTE: this was going to be an image, automatic scrolling thing but with the way the pictures are, it doesnt look nice*/}

    <BackGround col="000" heightsize="1002" content={<Card col="black"/>}/>
    <Footer name={cols[num]}/>
    </div>
  );
}

export default App;
