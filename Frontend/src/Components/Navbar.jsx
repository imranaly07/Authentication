import { Link } from "react-router-dom"
import { useAuth } from "../Context/authProvider"
import Logout from "./Logout"


function Navbar() {

  const [authUser,]=useAuth()
  console.log(authUser)

 

  
  return (
    <div>


<div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to={'/'} className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="flex-none list-none ">
    <div className="flex text-center gap-x-4 justify-center ">
    <li ><Link to={'/'}>Home</Link></li>
    <li><Link to={'/service'}>service</Link></li>
    <li><Link to={'/paid'}>paid</Link></li>
    </div>
    <button className="btn border-t-cyan-500 btn-ghost bg-red-600">
      {authUser ? <Logout/> :  <Link to={'/login'}>Login</Link>}
    
    </button>
  </div>
</div>
    </div>
  )
}

export default Navbar