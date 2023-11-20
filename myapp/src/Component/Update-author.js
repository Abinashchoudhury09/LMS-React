import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const UpdateAuthor = ({ author }) => {
  // Check if author is not defined, and set default values
  const [authorName, setAuthorName] = useState(author?.name || '');
  const [authorDescription, setAuthorDescription] = useState(author?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if authorName is not null before submitting the form
    if (authorName.trim() !== '') {
      // Add your logic for form submission here
      console.log('Form submitted:', { authorName, authorDescription });
      // You can send a request to update the author or perform other actions
    } else {
      // Handle the case where authorName is null
      console.error('Author Name cannot be empty.');
    }
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
                  <label htmlFor="name" className="col-form-label">Author Name</label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Author Name"
                    required
                  />
                </div>

                <div className="form-group col-md-8">
                  <label htmlFor="description" className="col-form-label">Description</label>
                  <input
                    type="text"
                    value={authorDescription}
                    onChange={(e) => setAuthorDescription(e.target.value)}
                    className="form-control"
                    id="description"
                    placeholder="Author Description"
                  />
                </div>

                <div className="col-md-6">
                  <Link to='/Author'><input type="submit" className="btn btn-primary" value="Submit" /></Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAuthor;
