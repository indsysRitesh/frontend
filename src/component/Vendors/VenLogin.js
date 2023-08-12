
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'

function VenLogin() {
    const initialFormData = {
        vendorEmail: '',
        password: '',
    };
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialFormData);
    const [validationErrors, setValidationErrors] = useState({});
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [databaseDataMatch, setDatabaseDataMatch] = useState(true);
    const onInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        // Perform your validation logic here
        const errors = {};
        if (formData.vendorEmail.trim() === '') {
            errors.vendorEmail = 'Username or Email is required';
        }

        // Password validation
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordPattern.test(formData.password)) {
            errors.password =
                'password: Abcd@12345';
        }

        if (Object.keys(errors).length > 0) {
            // If there are errors, update the state with the error messages

            setValidationErrors(errors);
            setLoginSuccess(false);
        } else {
            // If no errors, submit the form (you can handle API call or other login logic here)
            setValidationErrors({});
            setLoginSuccess(true);

            // Replace 'YOUR_API_URL' with the actual URL of your API endpoint
            const apiUrl = 'http://localhost:9898/vendor/login';

            try {
                // Make the API request with the shop details data
                const response = await axios.post(apiUrl, formData);

                // Check the registration status and database data validity from the API response

                const databaseDataMatch = response.data.databaseDataMatch;


                if (databaseDataMatch) {
                    // Database value matches
                    setDatabaseDataMatch(true);
                } else {
                    // Database value does not match
                    setDatabaseDataMatch(false);
                }
                navigate(`/vendashboard`);
                // Handle success, show a success message, redirect, etc.
            } catch (error) {
                console.error('API error:', error);

                // Show an alert or error message to the user for AxiosError
                if (axios.isAxiosError(error)) {
                    // AxiosError occurred
                    alert('An error occurred while processing your request. Please try again later.');
                    // You can also set a state to display an error message in the UI
                }

                // Handle other errors as needed
            }
        }
    };
    return (
        <div id="user">

            <div className='inner'>



                {/* <!--------------------------------- BANNER SECTION START ---------------------------------> */}
                <div className="banner banner-inner">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 col-md-9 col-8">
                                <div className="breadcrumb-txt">
                                    <h1>Vendor Login Page</h1>
                                    <ul>
                                        <li><a href='/#'><i className="fa-regular fa-house"></i></a></li>
                                        <li>/</li>
                                        <li>Vendor Login</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-3 col-4">
                                <div className="part-img">
                                    {/* <img src="/assets/images/breadcrumb-img.png" alt="Image"/> */}
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
                                    <form className="login-form" id="login-form" onSubmit={onSubmit}>

                                        <input
                                            type="email"

                                            name="vendorEmail"
                                            onChange={onInputChange}
                                            value={formData.vendorEmail}
                                            placeholder="Username or Email Address"
                                        />
                                        {validationErrors.vendorEmail && <p className="error-message text-danger">{validationErrors.vendorEmail}</p>}

                                        <input
                                            type="password"

                                            onChange={onInputChange}
                                            name="password"
                                            value={formData.password}
                                            placeholder="Enter Password"
                                        />
                                        {validationErrors.password && <p className="error-message text-danger">{validationErrors.password}</p>}

                                        <div className="row login-form">
                                            <div className="col-xl-6 col-md-6 col-sm-12">
                                                <button type="submit" className="def-btn btn-border ">Login</button>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-sm-12">
                                                <NavLink className="w-100" to="/venregistration">
                                                    <button className="def-btn btn-border ">Register</button>
                                                </NavLink>
                                            </div>

                                        </div>
                                    </form>

                                    {databaseDataMatch === false && (
                                        <div className="alert alert-danger">
                                            Database value does not match. Please check your data.
                                            {loginSuccess && <p className="success-message text-success">Login successful!</p>}

                                        </div>
                                    )}
                                    <span className="devider">or</span>
                                    <div className="social-login-box">
                                        {/* <button className="def-btn btn-fb">Login with your facebook</button> */}
                                        <button className="def-btn btn-gl">Login with your google+</button>
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

export default VenLogin
