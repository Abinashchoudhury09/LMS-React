// Authors.js
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Authors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/authors'); // Update the URL accordingly
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setAuthors(data);
                console.log(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"></link>
            <Navbar />
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
                                {authors.length === 0 ? (
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
                                            {authors.map((author) => (
                                                <tr key={author.id}>
                                                    <td>{author.id}</td>
                                                    <td>{author.name}</td>
                                                    <td>
                                                        <Link to='/Update-author'>
                                                        <button className='btn btn-primary'>
                                                            <i className="fas fa-user-edit ml-2"></i>
                                                        </button>
                                                        </Link>
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
