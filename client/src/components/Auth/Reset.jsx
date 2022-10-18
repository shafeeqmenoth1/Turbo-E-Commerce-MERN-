import {TextField } from '@mui/material'
import React from 'react'
//import loading from "../../assets/img/loading.gif"
import {Formik,Form,Field, ErrorMessage} from "formik"
import { Button} from './auth.styled'
import * as Yup from 'yup'
import axios from 'axios'
import {useParams,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Reset({handleChange,closeModal}) {
    const navigate = useNavigate()
   const {token} =useParams()
  

  const initialValues = {
    password:""
  }




const validationSchema = Yup.object().shape({
    password: Yup.string().min(6,"Password minimum length should be 6").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')],"Password not matched").required("Required"),
})


  const onSubmit= async (values,props)=>{
   const {password} = values
  
    setTimeout(async()=>{
    try {
     
    
   const response = await axios.post('/user/resetPassword',{password},{
    headers:{Authorization:token}
   })

    toast.success(response.data.message)
       
   
  
  
     } catch (error) {
     
      error && toast.error(error.response.data.message)
   
      }
      props.resetForm()
      props.isSubmitting = false
    },2000)
    
    
  }

  return (
    <>
        
    <div className="authBackground">
      <div className="modalContainer">
            <div className="form-wraper">
                <h4>Reset your Password</h4>
               
              <Formik onSubmit={onSubmit} initialValues={initialValues}  validationSchema={validationSchema}>
                  {(props)=>(
                    <Form>
                        <Field as ={TextField} name="password" size="small" sx={{margin:"10px 0"}} 
                 type="password" className='input-field' fullWidth label="Password" helperText={<ErrorMessage name='password'/>}/>
                  <Field as ={TextField} name="confirmPassword" size="small" sx={{margin:"10px 0"}} 
                type="password" className='input-field' fullWidth label="Confirm Password" helperText={<ErrorMessage name='confirmPassword'/>}/>
                        
                        <Button type='submit'  className='submit-btn' disabled={props.isSubmitting}>
                          {!props.isSubmitting ? "Reset Password" : "Loading"}</Button>
                        
                    </Form>
                  )}
              </Formik>
              

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
    </>
  )
}

export default Reset