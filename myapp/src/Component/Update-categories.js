import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const UpdateCategory = ({ category }) => {
  // Set initial state to an empty string if category is undefined
  const initialCategoryName = category ? category.name || '' : '';

  // Initialize state variable for form data
  const [categoryName, setCategoryName] = useState(initialCategoryName);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if categoryName is not null before submitting the form
    if (categoryName.trim() !== '') {
      // Add your logic for form submission here
      console.log('Form submitted:', { categoryName });
      // You can send a request to update the category or perform other actions
    } else {
      // Handle the case where categoryName is null
      console.error('Category Name cannot be empty.');
    }
  };

  // Render the component as before
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
                  <Link to='/Categories'><input type="submit" className="btn btn-primary" value="Submit" /></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
