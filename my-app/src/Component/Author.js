import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Authors = ({ authors }) => {
  // Initialize state variable as an empty array
  const [authorsState, setAuthorsState] = useState([]);

  // Update state when authors prop changes
  useEffect(() => {
    if (authors) {
      setAuthorsState(authors);
    }
  }, [authors]);

  return (
    <div>
        <Navbar/>
      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <div className="container my-5">
              <p className="my-5">
                <a href="/add-author" className="btn btn-primary">
                  <i className="fas fa-user-plus ml-2"> Add Author </i>
                </a>
              </p>
              <div className="col-md-12">
                {authorsState.length === 0 ? (
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
                      {authorsState.map((author) => (
                        <tr key={author.id}>
                          <td>{author.id}</td>
                          <td>{author.name}</td>
                          <td>
                            <a href={`/update-author/${author.id}`} className="btn btn-primary">
                              <i className="fas fa-user-edit ml-2"></i>
                            </a>
                          </td>
                          <td>
                            <a href={`/remove-author/${author.id}`} className="btn btn-primary">
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

export default Authors;
