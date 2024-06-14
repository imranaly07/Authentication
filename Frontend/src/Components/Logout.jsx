import { useAuth } from "../Context/authProvider"


function Logout() {

    const [,setAuthUser]=useAuth()

    const logoutHandler=()=>{

        setAuthUser(null)
        localStorage.removeItem("User")


    }
  return (
   <button onClick={logoutHandler}>Logout</button>
  )
}

export default Logout