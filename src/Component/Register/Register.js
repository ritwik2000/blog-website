import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
}
from 'mdb-react-ui-kit';
import './Register.css'
import { useNavigate } from "react-router-dom"

const Register=()=> {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[name,setName]=useState("")
  const[errorEmail,setErrorEmail]=useState('')
  const[errorpassword,setErrorPassword]=useState('')
  const navigate = useNavigate()
  

  console.log(email,password)
  const  emailValidation=()=>{
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email || regex.test(email) === false){
      setErrorEmail("Email its not valid")
       
        return false;
    }
    return true;
}
const passwordValidation=()=>{
  const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  if(!password || strongRegex.test(password)===false){
    
    setErrorPassword("password its not valid")

    return false
  }
  return true
}

const handleChangeEmail = event => {
  if (!emailValidation(event.target.value)) {
    setErrorEmail('Email is invalid');
  } else {
    setErrorEmail(null);
  }

  setEmail(event.target.value);
};
const handleChangePassword = event => {
  if (!passwordValidation(event.target.value)) {
    setErrorPassword('password is invalid');
  } else {
    setErrorPassword(null);
  }

  setPassword(event.target.value);
};
  const HandleSubmit=()=>{
   if(email.length>0 && password.length>0 && name.length>0)
    navigate('/Home')
      
    
  }

  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>


        <div className="login">
      <span className="loginTitle">Register</span>
      <form className="loginForm">
      <label>Name</label>
        <input className="loginInput" type="text" placeholder="Enter your Name..." onChange={(e)=>setName(e.target.value)} />
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." onChange={handleChangeEmail} />
        {errorEmail? <p className='errorMesssage'>{errorEmail}</p>:<></>}
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..."  onChange={handleChangePassword} />
        {errorpassword? <p className='errorMesssage'>{errorpassword}</p>:<></>}
    
     <button className="loginButton" onClick={HandleSubmit}>SignUp</button>
      </form>
       
    </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;