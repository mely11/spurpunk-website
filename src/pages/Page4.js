import React from 'react';
import './Page4.css'; // Link to the external CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css';

import topImagePage4 from '../assets/images/Page4_upper_layer@.png';
import bottomImagePage4 from '../assets/images/Page4_Bottom_Bit@.png';
import signupMessagePage4 from '../assets/images/Page4_Signup_Invite@.png';

const Page4 = () => {
  return (
    <div>
      
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
                className="img-fluid games-image"
            />
            <form className="container form justify-content-center align-items-center">
              {/* Bootstrap Form Group */}
              <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" />
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
