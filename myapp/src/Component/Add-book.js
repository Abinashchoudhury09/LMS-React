import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    isbn: '',
    name: '',
    description: '',
    category: '',
    author: '',
    publisher: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dr={...formData}
    const isbn=dr.isbn
    const name=dr.name
    const description=dr.description
    const category=dr.category
    const author=dr.author
    const publisher=dr.publisher
    const data={isbn,name,description,category,author,publisher}


    try {
      fetch('http://localhost:8080/save-book',{
        method:"post",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    }).then(()=>{
        console.log(data)
        navigate("/Book")
    }).catch((e)=>{
        console.log(e)
    })


      
    } catch (error) {
      console.error('Error:', error);
      // Handle network or other errors
    }
  };

  const cardStyle = {
    width: '45rem',
  };

  return (
    <div>
      <Navbar />
      <div style={cardStyle} className="container my-2">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-8">
                  <div className="col-form-label">ISBN</div>
                  <input
                    type="text"
                    value={formData.isbn}
                    onChange={handleChange}
                    name="isbn"
                    className="form-control"
                    id="isbn"
                    placeholder="ISBN"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group col-md-8">
                  <div className="col-form-label">Book Name</div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Book Name"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group col-md-8">
                  <div className="col-form-label">Book Description</div>
                  <input
                    type="text"
                    value={formData.description}
                    onChange={handleChange}
                    name="description"
                    className="form-control"
                    id="description"
                    placeholder="Book Description"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group col-md-8">
                  <div className="col-form-label">category</div>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={handleChange}
                    name="category"
                    className="form-control"
                    id="category"
                    placeholder="Enter category"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group col-md-8">
                  <div className="col-form-label">Author</div>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={handleChange}
                    name="author"
                    className="form-control"
                    id="author"
                    placeholder="Enter author"
                    autoComplete="off"
                  />
                </div>

                <div className="form-group col-md-8">
                  <div className="col-form-label">Publisher</div>
                  <input
                    type="text"
                    value={formData.publisher}
                    onChange={handleChange}
                    name="publisher"
                    className="form-control"
                    id="publisher"
                    placeholder="Enter publisher"
                    autoComplete="off"
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
