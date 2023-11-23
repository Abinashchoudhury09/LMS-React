import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  // State to manage form data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8080/getUser/${username}/${password}`, {
      method: 'get',
    });
    const rawdetails = await response.json();
    const role = rawdetails.role;
    
    if (role === "admin") {
      navigate("/Book");
    }
    if (role === "user") {
      navigate("/Userpanel");
    }
    
  };

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit} className=' justify-content-center container border border-primary p-3 m-3' >
        <h4 align="center">Login</h4>
        <label htmlFor="name">Enter Username: </label>
        <input type="text" placeholder='Username' required id='name' className='form-control' onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="email">Enter Password: </label>
        <input type="password" placeholder='Password' required id='email' className='form-control' onChange={(e) => setPassword(e.target.value)} />
        <input type="reset" className='btn btn-outline-danger btn-sm' />
        <input type="submit" className='btn btn-outline-success btn-sm m-2' /><br />
        <Link to="/Signup">Don't have an account</Link>
      </form>

      {/* Add an image to the right of the form */}
      
    </div>
  );
};

export default Login;