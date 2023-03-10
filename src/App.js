
import Home from "./Component/Home"
import Login from "./Component/Login/Login"
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App(){ 
   return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      <Route path="/login" element={<Login/>}>
    </Route>
    </Routes>
  </BrowserRouter>
)} 
export default App 