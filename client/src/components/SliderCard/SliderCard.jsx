
import Slider from "react-slick";
import "./slidercard.scss"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Product from "../productCard/Product";
//import { products } from './productData'


function SliderCard({show,products}) {

const settings = {
  
      infinite: false,
      speed: 500,
      slidesToScroll:1,
      slidesToShow: show,
      nextArrow: <NavigateNextIcon />,
      prevArrow: <NavigateBeforeIcon />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
         
            infinite: true,
           
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
       
          }
        }
      ]
  };


  return (
    <div className="sliderContainer">
    
        <Slider className="slider" {...settings}>
         {products.map((product)=>
         {return (
            
               <Product product={product} />
           
         )})}
        </Slider>
      </div>

    
  )
}

export default SliderCard