import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Signup= () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate that the passwords match before submitting the form
      if (password !== confirmPassword) {
        // Handle password mismatch error
        console.error('Password and Confirm Password must match');
        return;
      }

      // Prepare the data to be sent to the API
      const dataToSend = {
        name,
        username,
        password,
        email,
        phone,
        address,
        role: 'user', // Assuming the default role is 'user'
      };

      // Send the data to the API endpoint using axios
      const response = await axios.post('http://localhost:8080/saveStudents', dataToSend);

      // Handle the API response as needed
      console.log('API Response:', response.data);
      navigate('/Userpanel');
    } catch (error) {
      // Handle any errors that occurred during the API request
      console.error('Error:', error.message);
    }
  };

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit} className='justify-content-center container border border-primary p-3 m-3'>
        <h4 align='center'>Sign Up</h4>
        <label htmlFor='name'>Full Name: </label>
        <input type='text' placeholder='Full Name' required id='name' className='form-control' onChange={(e) => setName(e.target.value)} />
        <label htmlFor='username'>Username: </label>
        <input type='text' placeholder='Username' required id='username' className='form-control' onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor='password'>Password: </label>
        <input type='password' placeholder='Password' required id='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
        <label htmlFor='confirmPassword'>Confirm Password: </label>
        <input type='password' placeholder='Confirm Password' required id='confirmPassword' className='form-control' onChange={(e) => setConfirmPassword(e.target.value)} />
        <label htmlFor='email'>Email: </label>
        <input type='email' placeholder='Email' required id='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor='phone'>Phone: </label>
        <input type='tel' placeholder='Phone' id='phone' className='form-control' onChange={(e) => setPhone(e.target.value)} />
        <label htmlFor='address'>Address: </label>
        <input type='text' placeholder='Address' required id='address' className='form-control' onChange={(e) => setAddress(e.target.value)} />
        <input type='reset' className='btn btn-outline-danger btn-sm' />
        <input type='submit' className='btn btn-outline-success btn-sm m-2' /><br />
        <Link to='/Login'>Already have an account</Link>
      </form>
    </div>
  );
};

export default Signup;