
import React, { useState, useEffect } from 'react';
import Navbarhome from './Navbarhome'


const Userpanel = () => {
  
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
  return(
     <>
     <Navbarhome title="USER PANEL" showRegisterButton={false} loginLink="/" button="Logout" />
     <div className="fluid-container ">
        <div className="card">
          <div className="card-body">
            <div className="container my-5">
              <p className="my-5">
              Books offered
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
                              <button className='btn btn-primary' >
                                ISSUE
                              </button> 
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
     </>
  );
};
export default Userpanel;