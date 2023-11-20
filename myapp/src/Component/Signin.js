import React, { useState } from 'react'
import './Signin.css'

import user_icon from './person.png'
import email_icon from './email.png'
import password_icon from './password.png'
import { Link } from 'react-router-dom'

const Signin = () => {

  const[action,setAction]=useState("Login");
  const [userSignin,SetUserSignin]=useState({
    Username:"",
    Email:"",
    Password:""
    
  })

  const schange=(()=>{
    
  })
  return (
    <div className="container">
     <div className='header'>
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:
        <div className="input">
          <img src={user_icon} alt=""/>
          <input type="text" placeholder="Name"value={userSignin.Name} onChange={schange} name='Name' required/>
        </div>}
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Email " value={userSignin.Email} onChange={schange} name='Email' required/>
        </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password" value={userSignin.Password} onChange={schange} name='Password' required/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:
      <div className="forgot-password">Lost password?<span>Click Here!</span></div>}
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <Link to='/Book'><div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div></Link>
      </div>
              
    </div>
  )
}

export default Signin
