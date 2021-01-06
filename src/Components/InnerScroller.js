import { motion, AnimatePresence } from "framer-motion"
import image from '../Images/Box1.jpg'
import image1 from '../Images/Box2.jpg'





var w = window.innerWidth;

function ReportX(latest){

  //If needed to report X value

}





function InnerScoller(props){


 

return(
  
    <AnimatePresence >
    <motion.img


        size={props.size}
        height={props.size}
        key={image}
        src={image}
        initial={{x:w/2-150}}

        animate={{y:0 ,opacity: [1, 0.75, 0], x:[w/2 -150, w/2 -100, w/2 -50, w/2, w/2 + 50, w/2 + 100]}}
        // onUpdate={ReportX}
       
        transition={{
          duration: 1,
          ease: "easeInOut",
          type: "spring", stiffness: 100,
          loop: Infinity,
          repeatDelay: 1
        }}
        
    />
  </AnimatePresence>
 

)


} export default InnerScoller