
import React, { useEffect , useState } from 'react';
import axios from 'axios';
import './header.css';





const Header = () => {

    return(

        <div className='headerContainer'> 
            
        <b>Welcome !</b> <br/>
        <img src = 'https://www.gradpost.ucsb.edu/images/default-source/default-album/nice-nasa-banner.png?sfvrsn=784f9165_0'/>

            
        </div>
    )

}


export default Header;
