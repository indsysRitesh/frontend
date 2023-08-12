/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function RegistrationPage() {

    const userregister = {
        userName: '',
        password: '',
        mobileNumber: '',
        address: ''
    }
    
    const navigate = useNavigate()
    const [validationErrors, setValidationErrors] = useState({});
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [userRegi, SetUserRegi] = React.useState(userregister)
  
    const saveUser = (e) => {
        SetUserRegi({ ...userRegi, [e.target.name]: e.target.value })
    }
    const validateForm = () => {
        const errors = {};
      
        // Validate userName field
        if (!userRegi.userName.trim()) {
          errors.userName = "User Name is required";
        }
      
        // Validate password field
        if (!userRegi.password.trim()) {
          errors.password = "Password is required";
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(userRegi.password)) {
          errors.password =
            "Password must contain at least 8 characters, one uppercase letter, and one number";
        }
      
        // Validate mobileNumber field
        if (!userRegi.mobileNumber.trim()) {
          errors.mobileNumber = "Mobile number is required";
        }
      
        // Validate address field
        if (!userRegi.address.trim()) {
          errors.address = "Address is required";
        }
      
        return errors;
      };


      const submitUser = (e) => {
        e.preventDefault();
        const errors = validateForm();
      
        if (Object.keys(errors).length === 0) {
          // If there are no errors, proceed with the form submission
          axios
            .post('http://localhost:9898/user/add', userRegi)
            .then((response) => response.data)
           
            .then((res) => {
              console.log(res);
             
              setRegistrationSuccess(true); // Show success message if needed
              navigate(`/`);
            })
            .catch((error) => {
              console.error('Registration error:', error);
              // Handle registration error, show an error message, etc.
            });
        } else {
          // If there are errors, set the validationErrors state with the error messages
          setValidationErrors(errors);
        }
      };

    return (
        <div id='user'>
            <div className='inner'>
                {/* <!--------------------------------- BANNER SECTION START ---------------------------------> */}
                <div className="banner banner-inner">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 col-md-9 col-8">
                                <div className="breadcrumb-txt">
                                    <h1>Register Page</h1>
                                    <ul>
                                        <li><a href='/#'><i className="fa-regular fa-house"></i></a></li>
                                        <li>/</li>
                                        <li>Register</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-3 col-4">
                                <div className="part-img">
                                    <img src="assets/images/breadcrumb-img.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--------------------------------- BANNER SECTION END --------------------------------->



    <!--------------------------------- REGISTER SECTION START ---------------------------------> */}
                <div className="register py-120">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-xl-5 col-md-6">
                                <div className="login-area">
                                    <h2>Log in your Account</h2>
                                    <p>There are no enrollment fees or shipping quotas. Simp vide your contact information, create a user ID and word.</p>
                                    <form className='login-form' onSubmit={submitUser}>
                                        <input
                                            onChange={saveUser}
                                            type='text'
                                            name='userName'
                                            placeholder='User Name'
                                            
                                        />
                                        {validationErrors.userName && (
                                            <p className=' text-danger error-message'>{validationErrors.userName}</p>
                                        )}

                                        <input
                                            onChange={saveUser}
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            
                                            // pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                                        />
                                        {validationErrors.password && (
                                            <p className=' text-danger error-message'>{validationErrors.password}</p>
                                        )}

                                        <input
                                            onChange={saveUser}
                                            type='number'
                                            name='mobileNumber'
                                            placeholder='Mobile Number'
                                            
                                        />
                                        {validationErrors.mobileNumber && (
                                            <p className=' text-danger error-message'>{validationErrors.mobileNumber}</p>
                                        )}

                                        <input
                                            onChange={saveUser}
                                            type='text'
                                            name='address'
                                            placeholder='Address'
                                            
                                        />
                                        {validationErrors.address && (
                                            <p className=' text-danger error-message'>{validationErrors.address}</p>
                                        )}
                                      
                                        <button type='submit' className='def-btn btn-border'>
                                            Submit
                                        </button>
                                    </form>
                                    {registrationSuccess && (
                                            <p className='success-message text-success'>Registration successful!</p>
                                        )}
                                    <span className="devider">or</span>
                                    <div className="social-login-box">
                                        {/* <button className="def-btn btn-fb">Sign Up with your facebook</button> */}
                                        <button className="def-btn btn-gl">Sign Up with your google+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--------------------------------- REGISTER SECTION END --------------------------------->



    <!--------------------------------- FEATURES SECTION START ---------------------------------> */}
                <div className="features" id="feature">
                    <div className="container">
                        <div className="panel panel-shadow px-0">
                            <div className="custom-row">
                                <div className="custom-col">
                                    <div className="single-feature">
                                        <div className="part-icon">
                                            <span><i className="flaticon-money-saving"></i></span>
                                        </div>
                                        <div className="part-txt">
                                            <h4>Free Delivery</h4>
                                            <p>For all order over $99</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col">
                                    <div className="single-feature">
                                        <div className="part-icon">
                                            <span><i className="flaticon-dollar"></i></span>
                                        </div>
                                        <div className="part-txt">
                                            <h4>30 Days Return</h4>
                                            <p>If goods have Problems</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col">
                                    <div className="single-feature">
                                        <div className="part-icon">
                                            <span><i className="flaticon-credit-card"></i></span>
                                        </div>
                                        <div className="part-txt">
                                            <h4>Secure Payment</h4>
                                            <p>100% secure payment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom-col">
                                    <div className="single-feature">
                                        <div className="part-icon">
                                            <span><i className="flaticon-call-center"></i></span>
                                        </div>
                                        <div className="part-txt">
                                            <h4>24/7 Support</h4>
                                            <p>Dedicated support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default RegistrationPage
