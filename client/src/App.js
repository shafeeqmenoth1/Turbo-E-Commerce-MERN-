import GlobalStyle from "./assets/Global";

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import {useDispatch,useSelector} from 'react-redux'
import {dispatchLogin,fetchUser,dispatchGetUser} from "./redux/actions/authAction"
import { useEffect } from "react";
import axios from "axios"

import Home from "./pages/UserHome/Home";
import Notfound from "./components/Notfound/Notfound";
import Reset from "./components/Auth/Reset";
import ActivationEmail from "./components/Auth/ActivationEmail";
import AdminHome from "./pages/AdminHome/Home/AdminHome";
import New from "./pages/AdminHome/new/New";
import Single from "./pages/AdminHome/single/Single";

import { productInputs, userInputs,categoryInputs } from "./formSource";

import ProductList from "./pages/AdminHome/list/ProductList";
import UserList from "./pages/AdminHome/list/UserList";
import OrderList from "./pages/AdminHome/list/OrderList";
import CategoryList from "./pages/AdminHome/list/CategoryList";
function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  const {isLogged,isAdmin} = auth


  useEffect(()=>{
     const firstLogin = localStorage.getItem('firstLogin');
     console.log(firstLogin);
     if(firstLogin) {
      const getToken = async()=>{
     
       const res = await axios.post('/user/refresh_token',null)
      dispatch({type:'GET_TOKEN',payload:res.data.access_token})
   
      }
      getToken()
     }
    
  },[auth.isLogged,dispatch])

  useEffect(()=>{
    if(token){
      const getUser = ()=>{
        dispatch(dispatchLogin())
        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token,dispatch])
  return (
    <BrowserRouter>
    <div >
    <GlobalStyle/>
    <Routes>
          <Route path="/" element={<Home />} />
            
          <Route path="/admin">
              <Route index element={isAdmin ? <AdminHome /> : <Notfound/>} />
              </Route>
              <Route path="admin/users">
                  <Route index element={isAdmin ? <UserList inputs={userInputs} title= "All Users List"/> : <Notfound/>}/>
                  <Route path=':userId' element={isAdmin ? <Single /> : <Notfound/>}/>
                  <Route path='new' element={isAdmin ? <New  title="Add new User"/> : <Notfound/>}/>
              </Route>
              <Route path="admin/products">
                  <Route index element={isAdmin ? <ProductList inputs={productInputs}  title= "All Products List" /> : <Notfound/>}/>
                  <Route path=':prductId' element={isAdmin ? <Single /> : <Notfound/>}/>
                  <Route path='new' element={ isAdmin ? <New  title="Add new product"/> : <Notfound/>}/>
              </Route>
              <Route path="admin/orders">
                  <Route index element={isAdmin ? <OrderList title= "All Orders List"/> : <Notfound/>}/>
                  <Route path=':prductId' element={isAdmin ? <Single /> : <Notfound/>}/>
                  {/* <Route path='new' element={ isAdmin ? <New inputs={productInputs} title="Add new product"/> : <Notfound/>}/> */}
              </Route>
              <Route path="admin/categories">
                  <Route index element={isAdmin && <CategoryList inputs={categoryInputs} Newtitle= "Add new Category"  title= "All Categories List"/> }/>
                  <Route path=':prductId' element={isAdmin ? <Single /> : <Notfound/>}/>
                 
              </Route>
          <Route path="/user/activate/:activation_token" element={isLogged ? <Notfound /> : <ActivationEmail />} />
          <Route path="/user/reset/:token" element={isLogged ? <Notfound /> : <Reset />} />
          <Route path="*"  element={<Notfound/>}/>
      </Routes>
      
  
    </div>
    </BrowserRouter>
  );
}

export default App;
