import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []); // Empty dependency array to ensure the effect runs once when the component mounts

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8080/books');
      if (response.ok) {
        const booksData = await response.json();
        setBooks(booksData);
      } else {
        console.error('Failed to fetch books');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
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
              <Link to='/Add-book' className="btn btn-primary">
                <i className="fas fa-user-plus ml-2"> Add Book </i>
              </Link>

              </p>
              <div className="col-md-12">
                {books.length > 0 ? (
                  <table className="table table-striped table-responsive-md">
                    <thead>
                      <tr>
                        <th scope="col">ISBN</th>
                        <th scope="col">Book </th>
                        <th scope="col">Description</th>
                        <th scope="col">Publisher</th>
                        <th scope="col">Category</th>
                        <th scope="col">author</th>
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
                          <td>{book.publisher}</td>
                          <td>{book.category}</td>
                          <td>{book.author}</td>
                          <td>
                            {/* <Link to={`/update-book/${book.id}`}>
                              <button className='btn btn-primary'>
                                <i className="fas fa-user-edit ml-2"></i>
                              </button>
                            </Link> */}
                          </td>
                          <td>
                            {/* <Link to={`/remove-book/${book.id}`} className="btn btn-primary">
                              <i className="fas fa-user-times ml-2"></i>
                            </Link> */}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <h2>No records found!!</h2>
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
