import {TextField } from '@mui/material'
import React from 'react'
//import loading from "../../assets/img/loading.gif"
import {Formik,Form,Field, ErrorMessage} from "formik"
import { Button, FormLink} from './auth.styled'
import * as Yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Otp({handleChange,closeModal,setMob}) {

  const initialValues = {
    mobile:""

  }


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
    mobile:Yup.string().min(10).matches(phoneRegExp, 'Phone number is not valid').required("Required"),
})


  const onSubmit= async (values,props)=>{
   
    setTimeout(async()=>{
    try {
     
        setMob(values)
   const response = await axios.post('/user/otp_send',values)

        console.log(response.data.to);
    toast.success(response.data.message)
  
    handleChange("event","5")
  
        
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

      

                <h4>Enter your Mobile number</h4>
             
              <Formik onSubmit={onSubmit} initialValues={initialValues}  validationSchema={validationSchema}>
                  {(props)=>(
                    <Form>
                       <Field as ={TextField} name="mobile" size="small" sx={{margin:"10px 0"}} 
                        id="phone"  className='input-field' fullWidth label="Mobile" helperText={<ErrorMessage name='mobile'/>} />
                        
                        <Button type='submit'  className='submit-btn' disabled={props.isSubmitting}>
                          {!props.isSubmitting ? "SEND OTP" : "Loading"}</Button>
                       
                    </Form>
                  )}
              </Formik>
              

                <FormLink className='alter-link'>Don't you have an account? <span onClick={()=>handleChange("event","2")}>SignUp</span></FormLink>
          

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

export default Otp