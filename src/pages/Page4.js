import React, { useState } from 'react';
import axios from 'axios';
import './Page4.css'; // Link to the external CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

import topImagePage4 from '../assets/images/Page4_upper_layer@.png';
import bottomImagePage4 from '../assets/images/Page4_Bottom_Bit@.png';
import signupMessagePage4 from '../assets/images/Page4_Signup_Invite@.png';
import Sean from  '../assets/images/Page4_Sean@.png'
import Margarita from  '../assets/images/Page4_Margarita@.png'
import Phil from  '../assets/images/Page4_Phil@.png'
import Itzamna from  '../assets/images/Page4_Itzamna@.png'
import Icon from '../assets/images/Page4_Spurpunk_icon@.png'
import Page4DottedLine from '../assets/images/Page4_Dotted_Line@.png'
import ArrowHead from '../assets/images/Page4_Arrowhead@.png'
import AppStore from '../assets/images/AppleStore_BTN@.png'
import PlayStore from '../assets/images/GooglePlay_BTN@.png'
import Cactus from '../assets/images/map-cactus2-icon_COPY@.png'
import Grass from '../assets/images/Map-grass-icon2@.png'
import Landmass from '../assets/images/Page4_Landmass_COPY@.png'

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
    <div className='container-fluid g-0 d-flex flex-column'>
      {/* Header */}
      <img
                src={topImagePage4}
                alt="Top Section"
                className="img-fluid testimony-image w-100"
     />
      
         {/* Main Content with Bootstrap Form */}
        <section className="signup-form text-center d-flex flex-column justify-content-center align-items-center">
            <img
                src={Landmass}
                alt="Landmass background"
                className="img-fluid landmass"
            />
            <img
                src={Cactus}
                alt="Cactus"
                className="img-fluid cactus"
            />
            <img
                src={Grass}
                alt="Grass"
                className="img-fluid grass"
            />
            <img
                src={signupMessagePage4}
                alt="Top Section"
                className="img-fluid sign-up-text p-2"
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
            <img
                src={Page4DottedLine}
                alt="Page4 Dotted Line"
                className="img-fluid page4-dotted-line"
            />
            <img
                src={Icon}
                alt="Spurpunk icon"
                className="img-fluid icon"
            />
            <img
                src={ArrowHead}
                alt="Arrow-head"
                className="img-fluid arrow-head"
            />
            <img
                src={Sean}
                alt="Hero Sean"
                className="img-fluid sean"
            />
            <img
                src={Margarita}
                alt="Hero Margarita"
                className="img-fluid margarita"
            />
            <img
                src={Phil}
                alt="Hero Phil"
                className="img-fluid phil"
            />
        </section>

      {/* Footer */}
      <img
          src={bottomImagePage4}
          alt="Bottom Section"
          className="img-fluid bottom-bit w-100"
     />
     <img
          src={AppStore}
          alt="App Store"
          className="img-fluid appstore"
      />
      <img
          src={PlayStore}
          alt="Play Store"
          className="img-fluid playstore"
      />
     <img
          src={Itzamna}
          alt="Itzamna"
          className="img-fluid itzamna"
      />
    </div>
  );
};

export default Page4;
