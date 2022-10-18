
import 'intl-tel-input/build/css/intlTelInput.css'
import "./auth.css"
import React from 'react'
import {Formik,Form,Field, ErrorMessage} from "formik"
import {FormHelperText }from '@mui/material'
import {  Checkbox, FormControlLabel, TextField } from '@mui/material'
import { Button, FormLink } from './auth.styled'
import axios from 'axios'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Signup({handleChange}) {

  const initialValues = {
    name:"",
    mobile:"",
    email:"",
    password: "",
    confirmPassword:"",
    // termAndCondtion:false
    
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object().shape({
  name:Yup.string().min(3,"It is too short").required("Required"),
  mobile:Yup.string().min(10).matches(phoneRegExp, 'Phone number is not valid').required("Required"),
 email: Yup.string().email("Please enter valid email").required("Required"),
  password: Yup.string().min(6,"Password minimum length should be 6").required("Required"),
  confirmPassword: Yup.string().oneOf([Yup.ref('password')],"Password not matched").required("Required"),
  // termAndCondtion: Yup.string().oneOf(["true"],"Accept terms and Conditions")
})

  const onSubmit=(values,props)=>{

    setTimeout(async()=>{
    try {
      const res = await axios.post('/user/register',values)
      toast.success(res.data.message)
  
    } catch (error) {
      error &&toast.error(error.response.data.message)
    }
    props.resetForm()
    props.isSubmitting = false
    },2000)
    
  }
  return (
    <div>
        <>
        <div className="form-container">

            <Formik onSubmit={onSubmit} initialValues={initialValues}
             validationSchema={validationSchema}>
              {(props)=>(
                <Form>
                <Field as ={TextField} name="name" size="small"  sx={{margin:"10px 0"} } 
                className='input-field' fullWidth label="Name" helperText={<ErrorMessage name='name'/>} />
              
                <Field as ={TextField} name="mobile" size="small" sx={{margin:"10px 0"}} 
                id="phone"  className='input-field' fullWidth label="Mobile" helperText={<ErrorMessage name='mobile'/>} />
               
                <Field as ={TextField} name="email" size="small" sx={{margin:"10px 0"}} 
                 className='input-field' fullWidth label="Email" helperText={<ErrorMessage name='email'/>}/>
                <Field as ={TextField} name="password" size="small" sx={{margin:"10px 0"}} 
                 type="password" className='input-field' fullWidth label="Password" helperText={<ErrorMessage name='password'/>}/>
                  <Field as ={TextField} name="confirmPassword" size="small" sx={{margin:"10px 0"}} 
                type="password" className='input-field' fullWidth label="Confirm Password" helperText={<ErrorMessage name='confirmPassword'/>}/>
       

                <FormControlLabel
                  control={
                    <Checkbox name="termAndCondtion"/>
                  }
                  label="I accept the terms and conditions."
                 
                />
               
          <FormHelperText><ErrorMessage name='termAndCondtion'/></FormHelperText>
          <Button type='submit'  className='submit-btn' disabled={props.isSubmitting}>
                          {!props.isSubmitting ? "SIGN UP" : "Loading"}</Button>
                          
                </Form>
              )}
            </Formik>
            <FormLink className='alter-link'>Signup with Mobile number <span onClick={()=>handleChange("event","4")}>Mobile no</span></FormLink>
                <FormLink className='alter-link'>Already you have an account? <span onClick={()=>handleChange("event","1")}>LOGIN</span></FormLink>

         
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
    </div>
  )
}

export default Signup