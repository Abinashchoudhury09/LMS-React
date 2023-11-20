import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';

const AuthorForm = () => {
  const navigate=useNavigate();
  const [author, setAuthor] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    const name=e.target.name
    const value=e.target.value
    setAuthor({ ...author, [name]: value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    const dr={...author}
    const name=dr.name
    const description=dr.description
    const data={name,description}

    try {
      fetch('http://localhost:8080/save-author',{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(()=>{
        console.log(data)
        navigate("/Author")
    }).catch((e)=>{
        console.log(e)
    })


      
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-8">
                  <label htmlFor="name" className="col-form-label">
                    Author Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={author.name}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    placeholder="Author Name"
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="description" className="col-form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={author.description}
                    onChange={handleChange}
                    className="form-control"
                    id="description"
                    placeholder="Author Description"
                  />
                </div>

                <div className="col-md-6">
                <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorForm;
