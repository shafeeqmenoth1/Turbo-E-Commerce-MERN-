import {TextField } from '@mui/material'
import React from 'react'

import {Formik,Form,Field, ErrorMessage} from "formik"
import { Button, FormLink,GoogleLoginContainer} from './auth.styled'
import * as Yup from 'yup'
//import axios from '../../utils/http/http'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {dispatchLogin} from "../../redux/actions/authAction"
import {useDispatch, useSelector} from "react-redux"
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
function Login({handleChange,closeModal}) {

const auth = useSelector(state=>state.auth)

const {isAdmin} = auth

  const dispatch = useDispatch()
  let navigate = useNavigate();
  const initialValues = {
    email:"",
    password: "",

  }


const validationSchema = Yup.object().shape({
  email: Yup.string().when("isEmail", {
  is: '1',
  then: Yup.string()
      .email("Please enter valid email")
      .required("email cannot be empty"),
  otherwise: Yup.string()
      .required("phonenumber cannot be empty")
      .min(6, 'phonenumber must be at least 6 char'),
}),
  password: Yup.string().required("Required"),
})


const responseGoogle = async (response)=>{
  console.log(response.credential);
  try {
     
    
    await axios.post('/user/google_login',{tokenId: response.credential})
      
      localStorage.setItem('firstLogin',true)
      dispatch(dispatchLogin())
      
       closeModal(false)
     
      } catch (error) {
      
       error && toast.error(error.response.data.message)
    
       }
}
  const onSubmit= async (values,props)=>{
    setTimeout(async()=>{
    try {
     
    console.log(values);
   await axios.post('/user/login',values)
     
     localStorage.setItem('firstLogin',true)
     dispatch(dispatchLogin())
      closeModal(false)
      
    
    
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

   
              <Formik onSubmit={onSubmit} initialValues={initialValues}  validationSchema={validationSchema}>
                  {(props)=>(
                    <Form>
                        <Field as={TextField} helperText={<ErrorMessage name='text'/>} sx={{margin:"8px 0"}} size="small" name="email"  className='input-field' fullWidth label="Email or mobile" required/>
                        <Field as={TextField} type="password" helperText={<ErrorMessage name='password'/>} size="small" sx={{margin:"8px 0"}} name="password" className='input-field' fullWidth label="Password"  required/>
                        <Button type='submit'  className='submit-btn' disabled={props.isSubmitting}>
                          {!props.isSubmitting ? "LOGIN" : "LOADING"}</Button>
                        
                    </Form>
                  )}
              </Formik>
              <FormLink  className='forgot-password-link'onClick={()=>handleChange("event","3")} >Forgot Password?  </FormLink>
              {/* <GoogleLoginContainer id="googleLogin" style={{textAlign:"center"}}>
                    <p>OR</p>
        <GoogleLogin
          onSuccess={responseGoogle}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        </GoogleLoginContainer> */}
                <FormLink className='alter-link'>Don't you have an account? <span onClick={()=>handleChange("event","2")}>SIGN UP</span></FormLink>
          

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

export default Login