import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from "./userDatarows"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import axios from "axios"




function UserDatatable() {

const [category,setCategory] =useState([])
  



useEffect(()=>{
  

    
     const getAllcategory = async()=>{
      const res = await axios.get('/api/category/getCategories');

      setCategory(res.data.categoryList)
     }
     
     getAllcategory()
    
    
  
  
},[])


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
    const detailsRows = category.map((row) => {
      return {
        id: row._id,
        categoryImage: row.categoryImage,
        name: row.name,
        slug: row.slug,
      
      }})
  return (
    <div className="datatable">
      <div className="title">
        
      </div>
      <DataGrid
        rows={detailsRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
     

    </div>
  )
}

export default UserDatatable