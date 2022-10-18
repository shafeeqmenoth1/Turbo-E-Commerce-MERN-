import React from 'react'
import Chart from '../../../components/adminComponents/chart/Chart'
import Featured from '../../../components/adminComponents/featured/Featured'
import Navbar from '../../../components/adminComponents/Navbar/Navbar'
import Sidebar from '../../../components/adminComponents/Sidebar/Sidebar'
import Table from '../../../components/adminComponents/table/Table'
import Widgets from '../../../components/adminComponents/widgets/Widget'
import "./adminHome.scss"


function AdminHome() {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            {/* <div className="widgets">
              <Widgets type="user"/>
              <Widgets type="order"/>
              <Widgets type="earning"/>
              <Widgets type="balance"/>
            </div>
            <div className="charts">
              <Featured/>
              <Chart aspect={2/1} title="Last 6 months (Revenue)"/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <Table/>
            </div> */}
        </div>
    </div>
  )
}

export default AdminHome