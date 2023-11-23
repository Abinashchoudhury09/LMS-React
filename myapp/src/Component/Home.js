import React from 'react';
import Navbar from './Navbar';
import Navbarhome from './Navbarhome';

 const Home=()=> {
  const maskStyle = {
    height: '600px',
    width: '100vw',
    background: 'black',
    overflow: 'hidden',
    background: 'linear-gradient(rgba(19, 28, 11, 0.3), rgba(19, 55, 100, 0.9)), url("https://bit.ly/38szWHt")',
    backgroundAttachment: 'fixed',
  };

  return (
    <>
   
   
      <Navbarhome title="Library Management System" registerLink="/Signup" loginLink="/login" button="Login" />


      <div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"></link>
        <div>

          <div style={maskStyle} className="rgba-black-strong">
            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-md-10">
                  <h2 className="display-4 font-weight-bold text-white pt-5 mb-2">Learning never stops</h2>
                  <hr className="hr-light"></hr>
                  <h4 className="text-white my-4">Library management involves organizing, maintaining, and providing access to a collection of books and other materials in a library.</h4>
                  <button type="button" className="btn btn-outline-white text-white">Read more
                    <i className="fa fa-book ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <main className="mt-5">
          <div className="container-lg">
            <section id="best-features" className="text-center">
              <h2 className="mb-5 font-weight-bold">Best Features</h2>
              <div className="row d-flex justify-content-center mb-4">
                <div className="col-lg">
                  <p className="grey-text">Libraries use reports and analytics to assess the usage of materials, track circulation patterns, and make informed collection development decisions.
LMS systems often provide reporting tools for librarians.</p>

                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-5">
                  <i className="fa fa-camera-retro fa-4x orange-text"></i>
                  <h4 className="my-4 font-weight-bold">Experience</h4>
                  <p className="grey-text">Experienced staff with years of experience</p>
                </div>
                <div className="col-md-4 mb-1">
                  <i className="fa fa-heart fa-4x orange-text"></i>
                  <h4 className="my-4 font-weight-bold">Quality</h4>
                  <p className="grey-text">High-quality books to serve your purpose</p>
                </div>
                <div className="col-md-4 mb-1">
                  <i className="fa fa-bicycle fa-4x orange-text"></i>
                  <h4 className="my-4 font-weight-bold">Seamless</h4>
                  <p className="grey-text">Seamless and hassle-free process to help you with ease</p>
                </div>
              </div>

            </section>
          </div>
        </main>
      </div>
    </>
  );
}
export default Home

