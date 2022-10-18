
import "./home.scss"
//import Slider from '../../components/HeroSlider/Slider'
import Navbar from '../../components/Navbar/Navbar'
//import Product from '../../components/productCard/Product'
import SliderCard from '../../components/SliderCard/SliderCard'
import Specialdeal from "../../components/specialDeal/Specialdeal"
import { products } from '../../components/SliderCard/productData'
import Categories from "../../components/Categories/Categories"
import CategoryList from "../../components/CategoryList/CategoryList"


function Home() {
  return (
    <>
  <Navbar/>
  <div className="home-body">
   {/* <Specialdeal />  */}
{/* <SliderCard show={6} products={products}/>  */}
<CategoryList/>
  </div>


    </>
  )
}

export default Home