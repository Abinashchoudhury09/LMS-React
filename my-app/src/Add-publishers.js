import React, { useState } from 'react';
import Navbar from './Component/Navbar';


const AddPublisher = () => {
  const [publisherName, setPublisherName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if publisherName is not null before submitting the form
    if (publisherName.trim() !== '') {
      // Add your logic for form submission here
      console.log('Form submitted:', publisherName);
      // You can send a request to save the publisher or perform other actions
    } else {
      // Handle the case where publisherName is null
      console.error('Publisher Name cannot be empty.');
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-8">
                  <label htmlFor="name" className="col-form-label">Publisher Name</label>
                  <input
                    type="text"
                    value={publisherName}
                    onChange={(e) => setPublisherName(e.target.value)}
                    className="form-control"
                    id="name"
                    placeholder="Publisher Name"
                    required
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

export default AddPublisher;
