import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if categoryName is not null before submitting the form
    if (categoryName.trim() !== '') {
      // Add your logic for form submission here
      console.log('Form submitted:', categoryName);
      // You can send a request to save the category or perform other actions
    } else {
      // Handle the case where categoryName is null
      console.error('Category Name cannot be empty.');
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
                  <label htmlFor="name" className="col-form-label">Category Name</label>
                  <input
                    type="text"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Category Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <Link to='/categories'><input type="submit" className="btn btn-primary" value="Submit" /></Link>
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
