import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const navigate=useNavigate();
  const [categoryName, setcategoryName] = useState({
    name:'',
    book:'',
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    const name=e.target.name
    const value=e.target.value
    setcategoryName({ ...categoryName, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dr={...categoryName}
    const name=dr.name
    const book=dr.book
    const data={name,book}

    try {
      fetch('http://localhost:8080/save-category',{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(()=>{
        console.log(data)
        navigate("/Categories")
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
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={categoryName.name}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    placeholder="Category Name"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group col-md-8">
                  <div className="col-form-label">Description</div>
                  <input
                    type="text"
                    value={categoryName.book}
                    onChange={handleChange}
                    name="book"
                    className="form-control"
                    id="book"
                    placeholder="Description"
                    autoComplete="off"
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

export default AddCategory;
