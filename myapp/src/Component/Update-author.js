import React, { useState ,useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const UpdateAuthor = () => {
  const navigate=useNavigate();
  // Check if author is not defined, and set default values
  const [author, setAuthor] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    const name=e.target.name
    const value=e.target.value
    setAuthor({ ...author, [name]: value });
  };
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    const dr={...author}
    const name=dr.name
    const description=dr.description
    const data={name,description}

    try {
      fetch(`http://localhost:8080//update-author/${author.id}`,{
        method:"Get",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        console.log(data);
        navigate("/authors"); // Redirect to the list of authors after update
      }).catch((error) => {
        console.error('Error updating author:', error);
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  useEffect(() => {
    // Fetch the author details when the component mounts
    const fetchAuthorDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/author/${author.id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAuthor(data); // Set the author details in the state
      } catch (error) {
        console.error('Error fetching author details:', error);
      }
    };

    fetchAuthorDetails();
  }, [author.id]);


  return (
    <div>
      <Navbar />
      <div className="container my-2">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-8">
                  <div className="col-form-label">Author Name</div>
                  <input
                    type="text"
                    value={author.name}
                    onChange={handleChange}
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Author Name"
                    
                  />
                </div>

                <div className="form-group col-md-8">
                  <div className="col-form-label">Description</div>
                  <input
                    type="text"
                    value={author.description}
                    onChange={handleChange}
                    name="description"
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

export default UpdateAuthor;
