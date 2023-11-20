import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Publishers = ({ publishers }) => {
  // Initialize state variable as an empty array
  const [publishersState, setPublishersState] = useState([]);

  // Update state when publishers prop changes
  useEffect(() => {
    if (publishers) {
      setPublishersState(publishers);
    }
  }, [publishers]);

  return (
    <div>
      {/* Assuming a Header component is imported */}
      <Navbar />

      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <div className="container my-5">
              <p className="my-5">
                <a href="/add-publisher" className="btn btn-primary">
                  <i className="fas fa-user-plus ml-2"> Add Publisher </i>
                </a>
              </p>
              <div className="col-md-12">
                {publishersState.length === 0 ? (
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
                      {publishersState.map((publisher) => (
                        <tr key={publisher.id}>
                          <td>{publisher.id}</td>
                          <td>{publisher.name}</td>
                          <td>
                            <a href={`/update-publisher/${publisher.id}`} className="btn btn-primary">
                              <i className="fas fa-user-edit ml-2"></i>
                            </a>
                          </td>
                          <td>
                            <a href={`/remove-publisher/${publisher.id}`} className="btn btn-primary">
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

export default Publishers;
