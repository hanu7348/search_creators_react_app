import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactTyped as Typed } from 'react-typed';
import './Dashboard.css'; // Import custom CSS for additional styling

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle login button click
  const handleLoginClick = () => {
    navigate('/login'); // Redirect to login page
  };

  // Function to handle contact button click
  const handleContactClick = () => {
    navigate('/contact'); // Redirect to contact page
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#"> 
              <img 
                src="https://www.luxefinalyzer.com/storage/images/service/1579850492One-Person-Company-1024x512.png" 
                alt="Dashboard Logo" 
                className="navbar-logo"
              />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#study-materials">Study Materials</a>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={handleContactClick}>Contact</button>
                </li>
              </ul>
              <div className="ml-auto">
                <button className="btn btn-outline-light" onClick={handleLoginClick}>Login</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      
      <main className="dashboard-content">
        <div className="container text-center">
          <h2>
            <Typed
              strings={['Welcome to Your Dashboard!', 'Explore Study Materials and More']}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>
          <p>Here are some important study materials and resources:</p>
          <ul className="resources-list list-unstyled">
            <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Example Study Material 1</a></li>
            <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Example Study Material 2</a></li>
            <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Example Study Material 3</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
        
        <div className="container text-center my-5">
          <div className="card animated-border">
            <div className="card-body">
              <div className="card-icon">
                <i className="fas fa-book"></i>
              </div>
              <h5 className="card-title">
                <Typed
                  strings={['Why Study Material is Important']}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </h5>
              <p className="card-text">
                Study materials are essential for comprehensive learning and understanding. They provide the necessary resources to grasp key concepts, solve problems, and prepare for exams. With well-curated study materials, you can enhance your knowledge, gain insights, and stay ahead in your academic or professional journey.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="dashboard-footer">
        <div className="container text-center">
          <p>&copy; 2024 Your Study Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
