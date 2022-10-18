import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from "./userDatarows"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"




function CategoryDatatable({categories,setCategories}) {


  



useEffect(()=>{
  

    
     const getAllcategory = async()=>{
      const res = await axios.get('/api/category/getCategories');

      setCategories(res.data.categoryList)
     }
     
     getAllcategory()
    
    
  
  
},[])

console.log(categories);
    const actionColumn = [{
        field:"action", headername:"Action", width:200,renderCell:(params)=>{
            return <div className="cellAction">
              <Link to = '/admin/users/single' style={{textDecoration: 'none'}}>
                <div className="viewButton">View</div>
                </Link>
                <div className="deleteButton">Delete</div>
            </div>
        }
    }]

    const renderCategories = (categories) =>{
      let newCategories = [];
      for(let category of categories){
        newCategories.push(
         
          <li key={category.id}>
            {/* id: category._id,
            categoryImage: category.categoryImage,
            name: category.name,
            slug: category.slug,
            children:renderCategories(category.children) */}
          {category.name}
          {category.children.length > 0 && <ul>{renderCategories(category.children)}</ul>}
            </li>
        )
      }
      console.log("CHILDREN",newCategories.children);
      return newCategories
    }
    // const detailsRows = categories.map((category) => {
      
    //   return {
    //     id: category._id,
    //     categoryImage: category.categoryImage,
    //     name: category.name,
    //     slug: category.slug,
      
    //   }})


  return (
    <div className="datatable">
      <div className="title">
        
      </div>
      {/* <DataGrid
        rows={renderCategories(categories)}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
     
<ul>

  {renderCategories(categories)}
 
</ul>

    </div>
  )
}

export default CategoryDatatable