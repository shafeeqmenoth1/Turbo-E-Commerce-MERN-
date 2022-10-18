import React,{useState} from 'react'
import './list.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Navbar from '../../../components/adminComponents/Navbar/Navbar'
import Sidebar from '../../../components/adminComponents/Sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import CategoryDatatable from '../../../components/adminComponents/dataTable/CategoryDatatable';
import axios from '../../../http/axios';

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function CategoryList({title,Newtitle,inputs}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [categories,setCategories] =useState([])
  const [categoryName,setcategoryName] = useState("")
  const [file,setFile] = useState("")
  const [categoryParentId,setcategoryParentId] = useState("")

  

  const createCategoryList = (categories, options= [])=>{
    for(let category of categories){
      options.push(
        {
          value: category._id, name: category.name
        });
        if(category.children.length > 0){
          createCategoryList(category.children, options);
        }
    
    }
    return options
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      const form = new FormData()

      form.append('name',categoryName);
      form.append('categoryImage',file);
      form.append('parentId',categoryParentId);
   
      const res = await axios.post('/api/category/create',form)
   console.log(res);
      setOpen(false)
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="list">
      <Sidebar/>

      <div className="listContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
       
          <button className='addnewBtn' onClick={handleOpen}>Add new</button>
          
         
        </div>
        <CategoryDatatable categories={categories} setCategories={setCategories} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-content">
        <div className="top">
          <h1>{Newtitle}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img className="avatar" src={file ? URL.createObjectURL(file) : "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="} alt="" />
          </div>
          <div className="right">
            <form >
            <div className="formInput">
                <label htmlFor="file">
                 Image: <DriveFolderUploadIcon className='icon'/>
                </label>
                <input type="file" id="file" name='categoryImage' onChange={e=>setFile(e.target.files[0]) } style={{display:"none"}}/>
              </div>
           
                <div className="formInput" >
                <label htmlFor="username">Category Name</label>
                <input type='text' placeholder="Category name" 
                onChange={e=>setcategoryName(e.target.value)} value={categoryName}
                />
              </div>
              <div className="formInput" >
              <select onChange={e=>setcategoryParentId(e.target.value)} value={categoryParentId} name='parentId'>
                <option value="">select category</option>
                {createCategoryList(categories).map(option=>
                  <option key={option.value} value={option.value} >{option.name}</option>
                )
              }
              </select>
            </div>
       
              <button onClick={handleSubmit}>Add</button>
            </form>
          </div>
        </div>
        </div>
        </Box>
      </Modal>
    </div>

  )
}

export default CategoryList