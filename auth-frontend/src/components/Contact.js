import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactTyped as Typed } from 'react-typed';
import './Contact.css'; // Import the CSS file for additional styling

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [borderColor, setBorderColor] = useState('#ced4da'); // Default border color

  useEffect(() => {
    const colors = ['#ced4da', '#007bff', '#28a745', '#dc3545'];
    let index = 0;
    const interval = setInterval(() => {
      setBorderColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 1000); // Change color every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      await axios.post('http://localhost:8000/api/contact/', {
        name,
        email,
        message
      });
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error('Contact submission failed:', error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box" style={{ borderColor: borderColor }}>
        <h2 className="text-center mb-4">
          <Typed
            strings={['Get in Touch with Us!', 'We Value Your Feedback']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
        {status && <p className="status-message">{status}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
