import React from 'react';
import CustomCarousel from './carousel'

const Home = () => {
  return (
    <div>
       <CustomCarousel />
      <div className="container mt-4">
        <h2>Welcome to Springdale Public School</h2>
        <p>Welcome to Springdale Public School where we nurture young minds for a brighter future.</p>
        <div className="row">
          <div className="col-md-4">
            <h4>Annual Sports Day</h4>
            <p>Celebrating Excellence in Sports</p>
          </div>
          <div className="col-md-4">
            <h4>Science Exhibition</h4>
            <p>Showcasing Student Innovations</p>
          </div>
          <div className="col-md-4">
            <h4>Cultural Fest</h4>
            <p>Embracing Diversity and Creativity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
