import React from 'react'
import { useSelector } from 'react-redux'
import {Routes,Route} from "react-router-dom"
import { productInputs, userInputs } from '../../formSource'
import AdminHome from '../../pages/AdminHome/Home/AdminHome'
import List from '../../pages/AdminHome/list/CategoryList'
import New from '../../pages/AdminHome/new/New'
import Single from '../../pages/AdminHome/single/Single'
import Home from '../../pages/UserHome/Home'
import ActivationEmail from '../Auth/ActivationEmail'
import Reset from '../Auth/Reset'
import Navbar from '../Navbar/Navbar'
import Notfound from '../Notfound/Notfound'


function Body() {
const auth = useSelector((state => state.auth))
console.log(auth);
const {isLogged,isAdmin} = auth
  return (
    <div>
      
          <Routes>
             
              <Route path="/admin">
              <Route index element={isAdmin ? <AdminHome /> : <Notfound/>} />
              </Route>
              <Route path="admin/users">
                  <Route index element={isAdmin ? <List /> : <Notfound/>}/>
                  <Route path=':userId' element={isAdmin ? <Single /> : <Notfound/>}/>
                  <Route path='new' element={isAdmin ? <New inputs={userInputs} title="Add new User"/> : <Notfound/>}/>
              </Route>
              <Route path="admin/products">
                  <Route index element={isAdmin ? <List /> : <Notfound/>}/>
                  <Route path=':prductId' element={isAdmin ? <Single /> : <Notfound/>}/>
                  <Route path='new' element={ isAdmin ? <New inputs={productInputs} title="Add new product"/> : <Notfound/>}/>
              </Route>
              
          </Routes>
   
    </div>
  )
}

export default Body