
import Home from "./Component/Home"
import Login from "./Component/Login/Login"
import Register from "./Component/Register/Register"

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App(){ 
   return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home/>}></Route> 
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}>
    </Route>
    </Routes>
  </BrowserRouter>
)} 
export default App 