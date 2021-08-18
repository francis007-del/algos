          import React from 'react'
          import Slider from 'react-rangeslider'
          import 'react-rangeslider/lib/index.css'
          import './menu.css'
          import { AwesomeButton } from "react-awesome-button";
          import "react-awesome-button/dist/styles.css";
          import { RangeSlider } from 'rsuite';
          const Menu=({number,changeNumber,changeSpeed,speed,refresh,visualize})=>{
          return(
              <div className='menu'>
                        <div className='button'>
                          
              <AwesomeButton type="primary" onPress={refresh}>REFRESH</AwesomeButton>
            
              </div>
              <div className='slider'>
                  <span className='name'>NUMBER</span>
                  <Slider
                  
                  orientation='horizontal'
                  value={number}
                  min={0}
                  max={500}
                  onChange={changeNumber}
                  />
              </div>
              <div className='slider'>
                  <span className='name'>SPEED</span>
                  <Slider
                  orientation='horizontal'
                  value={speed}
                  min={0}
                  max={5}
                  onChange={changeSpeed}
                  />
                  </div>
                  <div className="button">
              <AwesomeButton  type="primary" onPress={visualize}>VISUALIZE</AwesomeButton>
              </div>
              </div>
          );
          }
          export default Menu;