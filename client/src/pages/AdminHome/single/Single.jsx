import React from 'react'
import Navbar from '../../../components/adminComponents/Navbar/Navbar'
import Sidebar from '../../../components/adminComponents/Sidebar/Sidebar'
import Chart from '../../../components/adminComponents/chart/Chart'
import "./single.scss"
import List from '../../../components/adminComponents/table/Table'
function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="" className="itemImg" />
            <div className="details">
                <h1 className="itemTitle">Jhon</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jhon@gmail.com:</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Mobile:</span>
                  <span className="itemValue">9874563214</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Second Street, No254, Kozhikkode, Kerala</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
            </div>
            </div>
          </div>
          <div className="right">
         
            <Chart aspect={3/1} title="User Transactions (Last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single