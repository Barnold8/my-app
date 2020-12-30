
// ALL IMPORTS - All important stuff I have made and isnt automatically generated will be found in "components"
import Header from './Components/Header'
import Content from './Components/Content'
import Footer from './Components/Footer'
import { useState } from 'react';
//<Content/

  //NOTE! Frame is good for CSS animations that need their own positioning
function App() {
  let [num, numSetter] = useState(0)

  let cols = ["red","green","yellow","pink","purple","blue","indigo"] //Use colour for footer too

  if(num >= cols.length){num = 0}

  return (

    <div>
    <Header name={cols[num]}/>
    
    <button  onClick={() => numSetter(num + 1)} className="sticky  float-right p-2 text-white font-bold  " >Colour changer</button>
    <Content name={cols[num]}/>
    <Footer name={cols[num]}/>
    </div>
  );
}

export default App;
