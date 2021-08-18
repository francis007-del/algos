import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import './menu.css'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
const Menu=({changeSpeed,speed,refresh,visualize,createmaze})=>{
 return(
     <div className='menu'>
              <div className='button'>
                
     <AwesomeButton type="primary" onPress={refresh}>REFRESH</AwesomeButton>
   
     </div>
     <div className='slider'>
     <span className='name'>SPEED</span>
     <Slider
              min={0}
              max={5}
              value={speed}
              orientation='horizontal'
              onChange={changeSpeed}
            />
            
     </div>
     <div className='button'>
     <AwesomeButton type="primary" onPress={visualize}>VISUALIZE</AwesomeButton>
     </div>
     <div className='button'>
     <AwesomeButton type="primary" onPress={createmaze}>MAZE</AwesomeButton>
     </div>
     </div>
 );
}
export default Menu;