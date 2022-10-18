import "./categorylist.scss"
import Slider from "react-slick";
import Categories from '../Categories/Categories';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { categories } from '../Categories/categorydata';

function CategoryList() {

    const settings = {
  
        infinite: true,
        speed: 500,
        slidesToScroll:1,
        slidesToShow: 6,
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
    <div className="slider-wrapper">
            <Slider className="slider" {...settings}>
         {categories.map((category)=>
         {return (
            
               <Categories category={category} />
           
         )})}
        </Slider>
    </div>
  )
}

export default CategoryList