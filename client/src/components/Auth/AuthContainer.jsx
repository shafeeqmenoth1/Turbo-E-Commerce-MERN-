
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab } from '@mui/material'
import { Box } from '@mui/system'
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react'
import "./auth.css"
import Login from './Login';
import Signup from './Signup';
import Otp from './Otp';
import Forgot from './Forgot';
import VerifyOtp from './VerifyOtp';

function AuthContainer({closeModal}) {
  const [value, setValue] = useState('1');
  const [mob,setMob] = useState("")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (

    
    <div>
        <div className="authBackground">
            <div className="modalContainer">
              <button onClick={()=>closeModal(false)} className='close-btn'><IoClose/></button>
            <Box sx={{ width: '100%'}}>
      <TabContext value={value}>
        <Box >
        <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab  label="Login" value="1" sx={{width:"50%",height: '45px'}}/>
            <Tab  label="Signup" value="2" sx={{width:"50%",height: '45px'}}/>
            
          </TabList>
        </Box>
        <TabPanel value="1">
          <Login handleChange={handleChange} closeModal={closeModal}/>
        </TabPanel>
        <TabPanel value="2">
          <Signup handleChange={handleChange}/>
        </TabPanel>
        <TabPanel value="3">
          <Forgot handleChange={handleChange} closeModal={closeModal}/>
        </TabPanel>
        <TabPanel value="4">
          <Otp handleChange={handleChange} setMob={setMob} closeModal={closeModal}/>
        </TabPanel>
        <TabPanel value="5">
          <VerifyOtp handleChange={handleChange} mob={mob} closeModal={closeModal}/>
        </TabPanel>
      
      </TabContext>
    </Box>
            </div>
        </div>
  
    </div>
  )
}

export default AuthContainer