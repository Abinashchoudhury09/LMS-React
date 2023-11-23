import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Publishers = () => {
  // Initialize state variable as an empty array
  const [publishers, setPublishers] = useState([]);

  // Update state with publishers from the backend
  useEffect(() => {
    fetchPublishers();
  }, []); // Empty dependency array to ensure the effect runs once when the component mounts

  const fetchPublishers = async () => {
    try {
      const response = await fetch('http://localhost:8080/publishers');
      if (response.ok) {
        const publishersData = await response.json();
        setPublishers(publishersData);
      } else {
        console.error('Failed to fetch publishers');
      }
    } catch (error) {
      console.error('Error fetching publishers:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"></link>

      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <div className="container my-5">
              <p className="my-5">
                <Link to='/Add-publishers'>
                  <button className="btn btn-primary"> Add Publisher </button>
                </Link>
              </p>
              <div className="col-md-12">
                {publishers.length === 0 ? (
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
                      {publishers.map((publisher) => (
                        <tr key={publisher.id}>
                          <td>{publisher.id}</td>
                          <td>{publisher.name}</td>
                          <td>
                            <Link to={`/update-publisher/${publisher.id}`}>
                              <button className="btn btn-primary">
                                <i className="fas fa-user-edit ml-2"></i>
                              </button>
                            </Link>
                          </td>
                          <td>
                            <Link to={`/remove-publisher/${publisher.id}`} className="btn btn-primary">
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

export default Publishers;
