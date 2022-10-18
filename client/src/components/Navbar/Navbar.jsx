import React, { useState } from 'react'
import "./Navbar.css"
import logos from "../../assets/img/logo.png"
import {Button,Header, Center, Container, Input, Left, Logo, Right, SearchBar, Wrapper, MenuIcon,} from "./Navbar.styled"
//import {BiSearch} from "react-icons/bi";
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import axios from "axios"
import {Link} from "react-router-dom"
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Auth from '../Auth/AuthContainer';
import {useSelector} from "react-redux"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Navbar() {
const auth = useSelector(state => state.auth)
const {user, isLogged,isAdmin} = auth
const [openModal, setOpenModal] = useState(false)

const handleOpen = () => setOpenModal(true);
const handlemodalClose = () => setOpenModal(false);


 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = async() => {
    try {
      await axios.get('/user/logout')
      localStorage.removeItem('firstLogin');
      setAnchorEl(null);
      window.location.href = '/'
      
    } catch (error) {
      window.location.href = '/'
    }
  }
const logLink = ()=>{
  return (
   <div className='user-btn'>
  <Button
  id="basic-button"
  aria-controls={open ? 'basic-menu' : undefined}
  aria-haspopup="true"
  aria-expanded={open ? 'true' : undefined}
  onClick={handleClick}
  color='#032250' padding="10px 15px"
  borderRadius="30px"
 
  
  >{user.name ? user.name : "My Account"}<KeyboardArrowDownIcon/>
  
  </Button>
  <Menu
  id="basic-menu"
  anchorEl={anchorEl}
  open={open}
  onClose={handleClose}
  MenuListProps={{
    'aria-labelledby': 'basic-button',
  }}
>{isAdmin ? <span ><Link style={{textDecoration:"none",color:"#000"}} to="/admin"> <MenuItem onClick={handleClose}>Dashboard</MenuItem> </Link>
<MenuItem onClick={handleLogout}>Logout</MenuItem></span>:
 <span><MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>Orders</MenuItem>
  <MenuItem onClick={handleClose}>Whishlist</MenuItem>
  <MenuItem onClick={handleClose}>Notifications</MenuItem>
  <MenuItem onClick={handleLogout}>Logout</MenuItem></span>}
</Menu>
</div>)
}
  return (
    <div className='header'>
    <Header>
    <Container>
        <Wrapper>
            <Left>
            <Logo src={logos}/>
            </Left>
            <Center>
                
            <SearchBar>
            <Input placeholder='Search for Proudcts'/>
                <Button  color='#ffff' hover="none"
                bordercolor="#000" padding="13px 20px" borderRadius="30px" > SEARCH</Button>
             
            </SearchBar>
              
               
            </Center>
            <Right>
              <MenuIcon>
               
              <div className="item">
            <ShoppingCartOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
                
            
              {isLogged ? logLink(): <div className="item" onClick={handleOpen} 
              ><Person2OutlinedIcon className='btn-icon' />
               </div>}
               </MenuIcon>
            </Right>
        </Wrapper>

    </Container>



    </Header> 
    <Modal
        open={openModal}
        onClose={handlemodalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
         <Auth closeModal={setOpenModal}  sx={style}/>
     
      </Modal>
    </div>
  )
}

export default Navbar