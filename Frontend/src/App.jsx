import Home from "./Components/Home"
import Login from "./Components/Login"
import {Routes,Route} from "react-router-dom"
import Services from "./Components/Services"
import Paid from "./Components/Paid"
import Signup from "./Components/Signup"
import { useAuth } from "./Context/authProvider"





function App() {
  const [authUser,]=useAuth()
  return (
    <div>

     <Routes>

      <Route path="/" element={<Home/>}/>
      
      <Route path="/service" element={<Services/>}/>
      
      <Route path="/paid" element={ authUser ?<Paid/>:<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </div>
  )
}

export default App