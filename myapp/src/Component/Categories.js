import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Categories = () => {
  // Initialize state variable as an empty array
  const [categories, setCategories] = useState([]);

  // Update state with categories from the backend
  useEffect(() => {
    fetchCategories();
  }, []); // Empty dependency array to ensure the effect runs once when the component mounts

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:8080/categories');
      if (response.ok) {
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div>
      {/* Assuming a Header component is imported */}
      <Navbar />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"></link>

      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <div className="container my-5">
              <p className="my-5">
                <Link to='/Add-category'>
                  <button className="btn btn-primary">Add Category</button>
                </Link>
              </p>
              <div className="col-md-12">
                {categories.length === 0 ? (
                  <h2>No record found !!</h2>
                ) : (
                  <table className="table table-striped table-responsive-md">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col"> category Name</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((category) => (
                        <tr key={category.id}>
                          <td>{category.id}</td>
                          <td>{category.name}</td>
                          <td>
                            <Link to={`/update-category/${category.id}`}>
                              <button className="btn btn-primary">
                                <i className="fas fa-user-edit ml-2"></i>
                              </button>
                            </Link>
                          </td>
                          <td>
                            <Link to={`/remove-category/${category.id}`} className="btn btn-primary">
                              <i className="fas fa-user-times ml-2"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
