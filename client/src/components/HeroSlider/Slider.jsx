import React from 'react'
import "./slider.scss"
import { sliderData } from './sliderData'

import Carousel from 'react-material-ui-carousel'
import { Paper} from '@mui/material'



function Slider({slides}) {



  return (
   
     
         <div className = "slider">
       <Carousel>
            {
                sliderData.map((slide, index)=> <Item key={index} item={slide} />
                 
                )
            }

       </Carousel>
        </div>
  )
}

export default Slider

function Item({item})
{
    return (
        <Paper>
            <div className="slider-item" style={{background:item.bg}}>
                <div className="left">

                <h1>{item.title}</h1>

                <button className="CheckButton">
                    {item.button}
                </button>
                </div>
                <div className="right">
                    <div className="imgWrapper">
                    <img src={item.image}/>
                    </div>
              
                </div>
           
          
            </div>
        </Paper>
    )
}