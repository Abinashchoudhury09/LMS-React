import React from 'react';
import Navbar from './Navbar';

const BookList = ({ books }) => {
  return (
    <div>
      <div>
         <Navbar/> 
      </div>
      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <div className="container my-5">
              <p className="my-5">
                <a href="/add-book" className="btn btn-primary">
                  <i className="fas fa-user-plus ml-2"> Add Book </i>
                </a>
              </p>
              <div className="col-md-12">
                {books ? (
                  <table className="table table-striped table-responsive-md">
                    <thead>
                      <tr>
                        <th scope="col">ISBN</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {books.map((book) => (
                        <tr key={book.id}>
                          <td>{book.isbn}</td>
                          <td>{book.name}</td>
                          <td>{book.description}</td>
                          <td>
                            <a href={`/book/${book.id}`} className="btn btn-primary">
                              <i className="fas fa-eye ml-2"></i>
                            </a>
                          </td>
                          <td>
                            <a href={`/update-book/${book.id}`} className="btn btn-primary">
                              <i className="fas fa-edit ml-2"></i>
                            </a>
                          </td>
                          <td>
                            <a href={`/remove-book/${book.id}`} className="btn btn-primary">
                              <i className="fas fa-user-times ml-2"></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <h2>No record found !!</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
