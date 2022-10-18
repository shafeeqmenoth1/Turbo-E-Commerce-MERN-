import React,{useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import axios from "axios"
import logos from "../../assets/img/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ActivationEmail() {

 const {activation_token} = useParams()



 useEffect(() =>{
    if(activation_token){
        const activationEmail = async ()=>{
            try {

                const res = await axios.post('/user/activate',{activation_token})
            
                toast.success(res.data.message)
                
            } catch (error) {
                error.response.data.message &&toast.error(error.response.data.message )
            }
        }
        activationEmail()
   
    }
 },[activation_token])
 
  return (
    <div className='active-page'>
        <div className="activepageContainer">
            <div className="Active-header">
                <img src={logos} alt="" />
            </div>
            <div className="activeContainer">
            <div className="active-details">
            <Link to = '/'>

            <button className='back-btn'>GO to Home</button>
            </Link>
            </div>
            </div>
        </div>

             <ToastContainer 
        theme ="dark"
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    </div>
  )
}

export default ActivationEmail