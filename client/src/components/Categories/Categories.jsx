import "./categories.scss"




function Categories({category}) {
  return (
    <div className="category-container">
  <div className="wrapper">
    <div className="category-img">
        <img src={category.img} alt="" />
    </div>
    <h4 className="title">{category.name}</h4>
</div>
        
    
    </div>
  )
}

export default Categories