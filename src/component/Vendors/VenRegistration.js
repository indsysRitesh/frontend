/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function VenRegistration() {
    const navigate = useNavigate()
    const [validationErrors, setValidationErrors] = useState({});
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [Registration, setRegistration] = useState({
        vendorName: '',
        vendorEmail: '',
        password: '',
        mobileNumber: '',
        adharCard: '',
        vendorAddress: '',
        photo: '',
        agreeToTerms: false,
    });
    // Destructure the values from the Registration state object
    const {
        vendorName,
        vendorEmail,
        password,
        mobileNumber,
        adharCard,
        vendorAddress,
        photo,
        agreeToTerms,
    } = Registration;

    const onInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setRegistration({ ...Registration,  [name]: newValue});
    };

    const validateForm = () => {
        const errors = {};
      
        // Validate vendorName field
        if (!vendorName.trim()) {
          errors.vendorName = "Vendor name is required";
        }
      
        // Validate vendorEmail field
        if (!vendorEmail.trim()) {
          errors.vendorEmail = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(vendorEmail)) {
          errors.vendorEmail = "Invalid email address";
        }
      
        // Validate password field
        if (!password.trim()) {
          errors.password = "Password is required";
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
          errors.password = "Password must contain at least 8 characters, one uppercase letter, and one number";
        }
      
        // Validate mobileNumber field
        if (!mobileNumber.trim()) {
          errors.mobileNumber = "Mobile number is required";
        } else if (!/^[0-9]{10}$/.test(mobileNumber)) {
          errors.mobileNumber = "Invalid mobile number";
        }
      
        // Validate adharCard field
        if (!adharCard.trim()) {
          errors.adharCard = "Adhar ID is required";
        } else if (!/^[0-9]{12}$/.test(adharCard)) {
          errors.adharCard = "Invalid Adhar ID";
        }
      
        // Validate vendorAddress field
        if (!vendorAddress.trim()) {
          errors.vendorAddress = "Address is required";
        }
      
        // Validate photo field
        if (!photo.trim()) {
          errors.photo = "Photo is required";
        }
      
        // Validate agreeToTerms field
        if (!agreeToTerms) {
          errors.agreeToTerms = "You must agree to the terms and conditions";
        }
      
        return errors;
      };


    const onSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
      
        if (Object.keys(errors).length === 0) {
          // If there are no errors, proceed with the form submission
          axios.post('http://localhost:9898/vendor/add', Registration)
            .then((response) => response.data)
            .then((res) => {
              console.log(res);
              setRegistrationSuccess(true); // Show success message if needed
              navigate(`/venlogin`);
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
        <div>
           <div className='inner' id='user'>
                {/* <!--------------------------------- BANNER SECTION START ---------------------------------> */}
                <div className="banner banner-inner">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 col-md-9 col-8">
                                <div className="breadcrumb-txt">
                                    <h1>Vendor Register Page</h1>
                                    <ul>
                                        <li><a href='/#'><i className="fa-regular fa-house"></i></a></li>
                                        <li>/</li>
                                        <li>Vendor Register</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-3 col-4">
                                <div className="part-img">
                                    <img src="/assets/images/breadcrumb-img.png" alt="Image" />

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
                                <div className="login-area author-area">
                                    <h2>Become an Author</h2>
                                    <p>There are no enrollment fees or shipping quotas. Simp vide your contact information, create a user ID and word.</p>
                                    <form className="login-form" id='regi-form' onSubmit={onSubmit}>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="vendorName"
                                            
                                            onChange={onInputChange}
                                            value={vendorName}
                                        />
                                           {validationErrors.vendorName && (
                                            <p className=' text-danger error-message'>{validationErrors.vendorName}</p>
                                        )}
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="vendorEmail"
                                            
                                            onChange={onInputChange}
                                            value={vendorEmail}
                                        />
                                           {validationErrors.vendorEmail && (
                                            <p className=' text-danger error-message'>{validationErrors.vendorEmail}</p>
                                        )}
                                        <input
                                            type="password"
                                            placeholder="Enter Password"
                                            name="password"
                                            
                                            onChange={onInputChange}
                                            value={password}
                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        />
                                           {validationErrors.password && (
                                            <p className=' text-danger error-message'>{validationErrors.password}</p>
                                        )}
                                        <input
                                            type="number"
                                            placeholder="Mobile Number"
                                            name="mobileNumber"
                                            
                                            onChange={onInputChange}
                                            value={mobileNumber}
                                            pattern="[0-9]{5}[0-9]{5}"
                                        />
                                           {validationErrors.mobileNumber && (
                                            <p className=' text-danger error-message'>{validationErrors.mobileNumber}</p>
                                        )}
                                        <input
                                            type="number"
                                            placeholder="Adhar ID"
                                            name="adharCard"
                                            
                                            onChange={onInputChange}
                                            value={adharCard}
                                            // pattern="[0-9]{4}[0-9]{4}[0-9]{4}"
                                        />
                                           {validationErrors.adharCard && (
                                            <p className=' text-danger error-message'>{validationErrors.adharCard}</p>
                                        )}
                                        {/* <p>formate:1234-1234-1234</p> */}
                                        <textarea
                                            placeholder="Address"
                                            rows="5"
                                            name="vendorAddress"
                                            
                                            onChange={onInputChange}
                                            value={vendorAddress}
                                        ></textarea>
                                           {validationErrors.vendorAddress && (
                                            <p className=' text-danger error-message'>{validationErrors.vendorAddress}</p>
                                        )}
                                        <input
                                            type="file"
                                            placeholder="photo"
                                            name="photo"
                                            
                                            onChange={onInputChange}
                                            value={photo}
                                        />
                                           {validationErrors.photo && (
                                            <p className=' text-danger error-message'>{validationErrors.photo}</p>
                                        )}
                                        <div className="form-check">
                                            <input
                                                className="form-check-input shipping-check"
                                                type="checkbox"
                                                name="agreeToTerms"
                                                id="agreeToTerm"
                                                checked={agreeToTerms}
                                                onChange={onInputChange}
                                            />
                                            {registrationSuccess && (
                                            <p className='success-message  text-success'>Registration successful!</p>
                                        )}
                                            <span className="sub-input"><i className="fa-regular fa-check"></i></span>
                                            <label className="form-check-label" for="agreeToTerm">
                                                Agree to the <a href="/#">Terms and Conditions</a>
                                            </label>
                                            </div>
                                        {/* <NavLink to="/shopdetails">  */}
                                        <button className="def-btn btn-border" type ='submit' >Submit</button>
                                        {/* </NavLink>  */}
                                    </form>
                                   
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

export default VenRegistration
