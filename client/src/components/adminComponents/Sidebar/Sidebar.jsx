import React from 'react'
import './sidebar.scss'
import Dashboard from '@mui/icons-material/Dashboard';
import PaymentIcon from '@mui/icons-material/Payment';
import PeopleIcon from '@mui/icons-material/People';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryIcon from '@mui/icons-material/Category';
import axios from "axios"
import { Link } from 'react-router-dom';
function Sidebar() {

    const handleLogout = async() => {
        try {
          await axios.get('/user/logout')
          localStorage.removeItem('firstLogin');
     
          window.location.href = '/'
          
        } catch (error) {
          window.location.href = '/'
        }
      }

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to='/admin' style={{textDecoration: 'none'}}>
            <span className='logo'>Turbo admin</span>
            </Link>
            
        </div>
        <hr/>
        <div className="center">
            <ul>
                <p className='title'>Main</p>
                <li>
                    <Dashboard className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>LIsts</p>
                <Link to='/admin/users' style={{textDecoration: 'none'}}>
                <li>
                    <PeopleIcon className="icon"/>
                    <span>Users</span>
                </li>
                </Link>
                <Link to='/admin/products' style={{textDecoration: 'none'}}>
                <li>
                    <StoreIcon className="icon"/>
                    <span>Products</span>
                </li>
                </Link>
                <Link to='/admin/orders' style={{textDecoration: 'none'}}>

                <li>
                <PaymentIcon className="icon"/>
                    <span>Orders</span>
                </li>
                </Link>

                  <Link to='/admin/categories' style={{textDecoration: 'none'}}>

                <li>
                <CategoryIcon className="icon"/>
                    <span>Categories</span>
                </li>
                </Link>

               
                <p className='title'>Usefull Links</p>
                <Link to='/stats' style={{textDecoration: 'none'}}>

                <li><QueryStatsIcon className="icon"/>
                    <span>Stats</span>
                </li>
                </Link>
                <li>
                    <NotificationsIcon className="icon"/>
                    <span>Notifications</span>
                </li>
                <p className='title'>USER</p>
                <li>
              
                    <AccountCircleIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li onClick={handleLogout}>
                    <LogoutIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOptions"></div>
            <div className="colorOptions"></div>
        </div>
    </div>
  )
}

export default Sidebar