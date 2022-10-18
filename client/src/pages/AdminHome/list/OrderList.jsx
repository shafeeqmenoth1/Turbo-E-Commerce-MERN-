import React,{useState} from 'react'
import './list.scss'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Navbar from '../../../components/adminComponents/Navbar/Navbar'
import Sidebar from '../../../components/adminComponents/Sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import OrderDatatable from '../../../components/adminComponents/dataTable/OrderDatatable';

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



function OrderList({title,Newtitle,inputs}) {
  const [file,setFile] = useState("")
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values,setValues] = useState(inputs.map(input =>{
    return input.value
  }))

  const onChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }   

  const handleSubmit = (e)=>{
    
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
        <OrderDatatable/>
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
            <form action="" onSubmit={handleSubmit}>
            <div className="formInput">
                <label htmlFor="file">
                 Image: <DriveFolderUploadIcon className='icon'/>
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0]) } style={{display:"none"}}/>
              </div>
              {inputs.map((input)=>(
                <div className="formInput" key={input.id}>
                <label htmlFor="username">{input.label}</label>
                <input type={input.text} placeholder={input.placeholder} value={values[input.name]}
                onChange={onChange} />
              </div>
              ))}
            
       
              <button>Add</button>
            </form>
          </div>
        </div>
        </div>
        </Box>
      </Modal>
    </div>

  )
}

export default OrderList