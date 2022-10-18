import {TextField } from '@mui/material'
import React from 'react'
//import loading from "../../assets/img/loading.gif"
import {Formik,Form,Field, ErrorMessage} from "formik"
import { Button, FormLink} from './auth.styled'
import * as Yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Forgot({handleChange,closeModal}) {

  const initialValues = {
    email:""

  }




const validationSchema = Yup.object().shape({
 email: Yup.string().email("Please enter valid email").required("Required")
})


  const onSubmit= async (values,props)=>{
   
    setTimeout(async()=>{
    try {
     
    
   const response = await axios.post('/user/forgotPassword',values)

    await toast.success(response.data.message)
   
   
  
    
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

      

                <h4>Password assistance</h4>
                <p>Enter the email address associated with your Turbo account.</p>
              <Formik onSubmit={onSubmit} initialValues={initialValues}  validationSchema={validationSchema}>
                  {(props)=>(
                    <Form>
                        <Field as={TextField} helperText={<ErrorMessage name='email'/>} sx={{margin:"8px 0"}} size="small" name="email"  className='input-field' fullWidth label="Email" required/>
                        
                        <Button type='submit'  className='submit-btn' disabled={props.isSubmitting}>
                          {!props.isSubmitting ? "Continue" : "Loading"}</Button>
                        
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

export default Forgot