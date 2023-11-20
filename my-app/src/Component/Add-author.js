import React, { useState } from 'react';
import Navbar from './Navbar';

const AuthorForm = () => {
  const [author, setAuthor] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor((prevAuthor) => ({ ...prevAuthor, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Author form submitted:', author);
    // You can make a fetch request or use a state management library like Redux to handle form submission
  };

  return (
    <div>
      <Home/>
      <Navbar/>
      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-8">
                  <label htmlFor="name" className="col-form-label">
                    Author Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={author.name}
                    onChange={handleChange}
                    className="form-control"
                    id="name"
                    placeholder="Author Name"
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="description" className="col-form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={author.description}
                    onChange={handleChange}
                    className="form-control"
                    id="description"
                    placeholder="Author Description"
                  />
                </div>

                <div className="col-md-6">
                  <input type="submit" className="btn btn-primary" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorForm;
