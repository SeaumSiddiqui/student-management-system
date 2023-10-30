import React from 'react';
import './Home.css';
import icon from './icon.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Welcome to the</h1>
        <h2>Student Management System</h2>
        <p>Development with Spring Boot-Java & ReactJs</p>
      </div>
      <div className="hero">
        <img src={icon} alt="Students" />
      </div>
    </div>
  );
};

export default Home;
