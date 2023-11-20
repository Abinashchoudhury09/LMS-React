import React, { useState } from 'react';
import Navbar from './Navbar';

const AddBook = ({ categories, authors, publishers }) => {
  // Initialize state variables for form data
  const [formData, setFormData] = useState({
    isbn: '',
    name: '',
    description: '',
    selectedCategory: '',
    selectedAuthor: '',
    selectedPublisher: '',
  });

  // Destructure form data for easier access
  const { isbn, name, description, selectedCategory, selectedAuthor, selectedPublisher } = formData;

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your logic for form submission here
    console.log('Form submitted:', formData);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const cardStyle = {
    width: '45rem',
  }

  return (
    <div>
      <Navbar/>
      <div style={cardStyle} className="container my-2">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-8">
                  <label htmlFor="isbn" className="col-form-label">ISBN</label>
                  <input
                    type="text"
                    value={isbn}
                    onChange={handleInputChange}
                    name="isbn"
                    className="form-control"
                    id="isbn"
                    placeholder="ISBN"
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="name" className="col-form-label">Book Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleInputChange}
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Book Name"
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="description" className="col-form-label">Book Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={handleInputChange}
                    name="description"
                    className="form-control"
                    id="description"
                    placeholder="Book Description"
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="categories" className="col-form-label">Category</label>
                  <input
                    type="text"
                    value={categories}
                    onChange={handleInputChange}
                    name="categories"
                    className="form-control"
                    id="categories"
                    placeholder="Enter category"
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="authors" className="col-form-label">Author</label>
                  <input
                    type="text"
                    value={authors}
                    onChange={handleInputChange}
                    name="authors"
                    className="form-control"
                    id="authors"
                    placeholder="Enter author"
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="publishers" className="col-form-label">Publisher</label>
                  <input
                    type="text"
                    value={publishers}
                    onChange={handleInputChange}
                    name="publishers"
                    className="form-control"
                    id="publishers"
                    placeholder="Enter publisher"
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

export default AddBook;
