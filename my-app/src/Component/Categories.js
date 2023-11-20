import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

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
                <a href="/add-category" className="btn btn-primary">
                  <i className="fas fa-user-plus ml-2"> Add Category </i>
                </a>
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
                            <a href={`/update-category/${category.id}`} className="btn btn-primary">
                              <i className="fas fa-user-edit ml-2"></i>
                            </a>
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
