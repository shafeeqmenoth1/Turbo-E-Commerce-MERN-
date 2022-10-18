import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './notfound.scss'

function Notfound() {

  const auth = useSelector(state => state.auth)

  const {isLogged,isAdmin} = auth
  return (
  
      <div className="notfoundContainer">
        <h1>404</h1>
        <h2>Sorry,this page not found!</h2>
        <Link to={isAdmin ? "/admin" : "/"} style={{textDecoration: 'none',color: 'white'}}>
        <button className='back-btn'>BACK</button></Link>
      </div>
  
  )
}

export default Notfound