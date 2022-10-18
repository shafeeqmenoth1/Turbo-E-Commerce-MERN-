
import "./product.scss"
import {StarRate,StarHalf,StarOutline,AddShoppingCart,FavoriteBorder} from '@mui/icons-material';




function Product({product}) {
  return (
  <div className="productsContainer">
       <div className='product-wrapper'>
    <div className="imagebox">
        <img src={product.image} alt="product-img" />
        <span className="add-to-wish"><FavoriteBorder className='icon'/></span>
    </div>
    <div className="productDetails">
        
            <h3 className="title">{product.title}</h3>
      
        <div className="stars">
            <span><StarRate className='icon'/></span>
            <span><StarRate className='icon'/></span>
            <span><StarRate className='icon'/></span>
            <span><StarHalf className='icon'/></span>
            <span><StarOutline className='icon'/></span>

        </div>
        <div className="bottom">
            <span className='price'>{product.price}</span>
            <span className="add-to-cart"><AddShoppingCart className='icon'/></span>
        </div>
    </div>
</div>
 
           
        
    
  </div>
  )
}

export default Product




