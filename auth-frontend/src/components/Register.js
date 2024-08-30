import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'; // Import custom CSS for animations

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/api/register/', {
        username,
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        setError(JSON.stringify(error.response.data));
      } else if (error.request) {
        setError('No response received from server. Please try again.');
      } else {
        setError('An error occurred. Please try again.');
      }
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container-fluid vh-100 p-0">
      <div className="row h-100 m-0">
        <div className="col-md-8 p-0 d-none d-md-block">
          <img 
            src="https://png.pngtree.com/png-clipart/20240210/original/pngtree-the-salesman-declared-a-massive-75-discount-on-online-photo-png-image_14272345.png"
            alt="Register Visual" 
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="register-container p-5">
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                      </svg>
                    </span>
                  </div>
                  <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    className="form-control" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 0h12a1 1 0 0 1 1 1v1.3L8 9.7 1 6.3V5a1 1 0 0 1 1-1zm0 2.5L8 8.2 14 6.5V12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6.5z"/>
                      </svg>
                    </span>
                  </div>
                  <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    className="form-control" 
                    required 
                  />
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white border-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-lock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a4 4 0 0 0-4 4v2a2 2 0 0 0-1 1.732V14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8.732A2 2 0 0 0 12 7V5a4 4 0 0 0-4-4zm2.5 6h-5v1h5V7z"/>
                      </svg>
                    </span>
                  </div>
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    className="form-control" 
                    required 
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
