import React,{useState} from 'react'
import Navbar from '../../../components/adminComponents/Navbar/Navbar'
import Sidebar from '../../../components/adminComponents/Sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./new.scss"

function New({inputs,title}) {
  const [file,setFile] = useState("")
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img className="avatar" src={file ? URL.createObjectURL(file) : "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="} alt="" />
          </div>
          <div className="right">
            <form action="">
            <div className="formInput">
                <label htmlFor="file">
                 Image: <DriveFolderUploadIcon className='icon'/>
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0]) } style={{display:"none"}}/>
              </div>
              {inputs.map((input)=>(
                <div className="formInput" key={input.id}>
                <label htmlFor="username">{input.label}</label>
                <input type={input.text} placeholder={input.placeholder} />
              </div>
              ))}
            
       
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New