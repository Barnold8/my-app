import React, { useState } from 'react'
import Nav from './Nav'
import HBurger from './HBurger'

//OLD CODE
//bg-purple-800 h-10 fixed top-0 w-full z-2 shadow-lg"

//<div className={headerClass} onClick={() => colSetter(!cols)}>
//<Nav/>
//</div>


function Header(props){

    const [cols, colSetter] = useState(false)
    let P = <div className={`bg-${props.name}-500 h-10 fixed top-0 w-full z-1 shadow-lg`} onClick={() => colSetter(!cols)}> <Nav/> </div>

    return(

        <header>
            {P}
            <HBurger className="z-2"/>
        </header>


    )


}

export default Header