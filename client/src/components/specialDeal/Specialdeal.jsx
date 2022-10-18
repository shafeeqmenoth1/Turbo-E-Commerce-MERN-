import SliderCard from "../SliderCard/SliderCard"
import "./specialdeal.scss"
import {LocalFireDepartment,Bolt} from '@mui/icons-material';
import {flash,popular} from "./productData"


function Specialdeal() {
  return (
    <div>
        <div className="special-container">
          <div className="wrapper">
            <div className="left">
              <h3 className="flashdeal"><Bolt className="icon"/>Flash Deal</h3>
                <SliderCard show={3} products={flash}/>
            </div>
            <div className="right">
            <h3 className="flashdeal"><LocalFireDepartment className="icon"/>Popular Products</h3>
            <SliderCard show={3} products={popular}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Specialdeal
