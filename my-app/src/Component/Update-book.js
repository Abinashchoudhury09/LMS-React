import React, { useState } from 'react';
import Navbar from './Navbar';

const UpdateBook = ({ book, categories, authors, publishers }) => {
  // Initialize state variables for form data
  const [formData, setFormData] = useState({
    isbn: book?.isbn || '',
    name: book?.name || '',
    description: book?.description || '',
    selectedCategory: book?.categories[0]?.id || '', // Assuming categories is an array
    selectedAuthor: book?.authors[0]?.id || '', // Assuming authors is an array
    selectedPublisher: book?.publishers[0]?.id || '', // Assuming publishers is an array
  });

  // Destructure form data for easier access
  const { isbn, name, description, selectedCategory, selectedAuthor, selectedPublisher } = formData;

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if required fields are not null before submitting the form
    if (isbn.trim() !== '' && name.trim() !== '') {
      // Add your logic for form submission here
      console.log('Form submitted:', formData);
      // You can send a request to update the book or perform other actions
    } else {
      // Handle the case where required fields are null
      console.error('ISBN and Book Name cannot be empty.');
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <div className="container my-2">
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
                    required
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
                    required
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
                  <select
                    value={selectedCategory}
                    onChange={handleInputChange}
                    name="selectedCategory"
                    className="form-control"
                  >
                    {categories && categories.map((category) => (
                      <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="authors" className="col-form-label">Author</label>
                  <select
                    value={selectedAuthor}
                    onChange={handleInputChange}
                    name="selectedAuthor"
                    className="form-control"
                  >
                    {authors && authors.map((author) => (
                      <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="publishers" className="col-form-label">Publisher</label>
                  <select
                    value={selectedPublisher}
                    onChange={handleInputChange}
                    name="selectedPublisher"
                    className="form-control"
                  >
                    {publishers && publishers.map((publisher) => (
                      <option key={publisher.id} value={publisher.id}>{publisher.name}</option>
                    ))}
                  </select>
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

export default UpdateBook;
