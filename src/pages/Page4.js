import React, { useState } from 'react';
import axios from 'axios';
import './Page4.css'; // Link to the external CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

import topImagePage4 from '../assets/images/Page4_upper_layer@.png';
import bottomImagePage4 from '../assets/images/Page4_Bottom_Bit@.png';
import signupMessagePage4 from '../assets/images/Page4_Signup_Invite@.png';

const Page4 = () => {
  
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

   // State for handling response message
   const [message, setMessage] = useState('');

   const submission = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
  
      console.log("Updated Form Data:", formData); 
  
      // Basic validation
      if (!formData.name || !formData.email) {
        setMessage('Please fill in both fields.');
        return;
      }
  
      // Email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setMessage('Please enter a valid email address.');
        return;
      }
  
      setMessage(''); // Clear any previous messages
  
      // Send data to backend
      try {
        const response = await axios.post('/newsletter-endpoint', formData);
        if (response.status === 200) {
          setMessage('Thank you for subscribing!');
          setFormData({ name: '', email: '' }); // Clear the form after successful submission
        }
      } catch (error) {
        setMessage('Oops, something went wrong. Please try again later.');
      }
    }
  };
  
  return (
    <div>
      {/* Header */}
      <img
                src={topImagePage4}
                alt="Top Section"
                className="img-fluid games-image w-100"
     />
      
         {/* Main Content with Bootstrap Form */}
        <section className="signup-form text-center d-flex flex-column justify-content-center align-items-center">
            <img
                src={signupMessagePage4}
                alt="Top Section"
                className="img-fluid games-image p-2"
            />
            <form className="container form justify-content-center align-items-center d-flex flex-column">
              {/* Bootstrap Form Group */}
              <div>{message}</div>
              <div className='form-img justify-content-center align-items-center '>
                <div className="mb-5 d-flex">
                    <label htmlFor="name" className="form-label p-1"></label>
                    <input type="text" className="form-control transparent-input" name="name" value={formData.name} onChange={handleChange} onKeyDown={submission} />
                </div>

                <div className="mb-2 d-flex">
                    <label htmlFor="email" className="form-label p-1"></label>
                    <input type="email" className="form-control transparent-input" name="email"  value={formData.email} onChange={handleChange} onKeyDown={submission} />
                </div>
              </div>
            </form>
        </section>

      {/* Footer */}
      <img
                src={bottomImagePage4}
                alt="Bottom Section"
                className="img-fluid games-image w-100"
     />
    </div>
  );
};

export default Page4;
