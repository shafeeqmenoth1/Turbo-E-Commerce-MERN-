import './feature.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
function Featured() {
  return (
    <div className='feature'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} />
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$155</p>
            <p className="desc">Previous transition processing. Last payment may not be included.</p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownOutlinedIcon fontSize='small'/>
                       <div className="resultAmount"> $12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last week</div>
                    <div className="itemResult postive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                       <div className="resultAmount"> $12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last month</div>
                    <div className="itemResult postive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                       <div className="resultAmount"> $12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured