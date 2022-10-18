import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widgets({type}) {

  let data;
  const amount = 100
  const diff = 20

  switch (type) {
    case "user":
      data = {
        title:"USERS",
        isMoney: false,
        link: "See all users",
        icon:  <PeopleOutlineOutlinedIcon className="icon"
         style={{color:"#295fcc",backgroundColor:"#c7d9fc"}}/>
      };
      break;
      case "order":
        data = {
          title:"ORDERS",
          isMoney: false,
          link: "View all orders",
          icon:  <ShoppingCartOutlinedIcon className="icon"
          style={{color:"#48991d",backgroundColor:"#beff9c"}}
          />
        };
        break;
        case "earning":
          data = {
            title:"EARNINGS",
            isMoney: true,
            link: "See all net earnings",
            icon:  <MonitorHeartOutlinedIcon className="icon"
            style={{color:"#bfa600",backgroundColor:"#ffea5e"}}
            />
          };
          break;
          case "balance":
            data = {
              title:"BALANCE",
              isMoney: true,
              link: "See details",
              icon:  <AccountBalanceWalletOutlinedIcon className="icon"
              style={{color:"#f03e58",backgroundColor:"#fcb6c0"}}
              />
            };
            break;
      default:
        break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}{amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage postive">
          <KeyboardArrowUpOutlinedIcon/>
          {diff}%
          </div>
       {data.icon}
      </div>
    </div>
  )
}

export default Widgets