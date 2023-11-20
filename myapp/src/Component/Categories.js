import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Categories = ({ categories }) => {
  // Initialize state variable as an empty array
  const [categoriesState, setCategoriesState] = useState([]);

  // Update state when categories prop changes
  useEffect(() => {
    if (categories) {
      setCategoriesState(categories);
    }
  }, [categories]);

  return (
    <div>
      {/* Assuming a Header component is imported */}
      <Navbar />

      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <div className="container my-5">
              <p className="my-5">
                 
                <Link to='/Add-category' > <button className="btn btn-primary"> Add Category </button></Link>
                
              </p>
              <div className="col-md-12">
                {categoriesState.length === 0 ? (
                  <h2>No record found !!</h2>
                ) : (
                  <table className="table table-striped table-responsive-md">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoriesState.map((category) => (
                        <tr key={category.id}>
                          <td>{category.id}</td>
                          <td>{category.name}</td>
                          <td>
                            <Link to='/Update-categories'>
                              <button className="btn btn-primary">
                                <i className="fas fa-user-edit ml-2"></i>
                              </button>
                            </Link>
                          </td>
                          <td>
                            <a href={`/remove-category/${category.id}`} className="btn btn-primary">
                              <i className="fas fa-user-times ml-2"></i>
                            </a>
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
