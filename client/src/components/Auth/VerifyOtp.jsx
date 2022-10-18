import {TextField } from '@mui/material'
import React from 'react'
//import loading from "../../assets/img/loading.gif"
import {Formik,Form,Field, ErrorMessage} from "formik"
import { Button, FormLink} from './auth.styled'
import * as Yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function VerifyOtp({handleChange,closeModal,mob}) {

  const initialValues = {
    otp:"",
    password:"",
    mobile:mob.mobile
  }


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
    otp:Yup.string().min(6).required("Required"),
    password: Yup.string().min(6,"Password minimum length should be 6").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')],"Password not matched").required("Required"),
})


  const onSubmit= async (values,props)=>{
   
    setTimeout(async()=>{
    try {
     
    console.log("Values",values);
   const response = await axios.post('/user/verify_otp',values)

       console.log(response);
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
        <div className="form-container">

      

                <h4>Enter your OTP</h4>
             
              <Formik onSubmit={onSubmit} initialValues={initialValues}  validationSchema={validationSchema}>
                  {(props)=>(
                    <Form>
                       <Field as ={TextField} name="otp" size="small" sx={{margin:"10px 0"}} 
                        id="phone"  className='input-field' fullWidth label="Enter OTP" helperText={<ErrorMessage name='otp'/>} />
                        
                        
                        
                            <Field as ={TextField} name="password" size="small" sx={{margin:"10px 0"}} 
                 type="password" className='input-field' fullWidth label="Password" helperText={<ErrorMessage name='password'/>}/>
                  <Field as ={TextField} name="confirmPassword" size="small" sx={{margin:"10px 0"}} 
                type="password" className='input-field' fullWidth label="Confirm Password" helperText={<ErrorMessage name='confirmPassword'/>}/>
                        <Button type='submit'  className='submit-btn' disabled={props.isSubmitting}>
                          {!props.isSubmitting ? "SEND OTP" : "Loading"}</Button>
                    </Form>
                  )}
              </Formik>
              

                
          

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

export default VerifyOtp