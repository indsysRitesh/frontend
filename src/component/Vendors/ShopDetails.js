/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react'
import axios from 'axios'
// import { NavLink } from 'react-router-dom';
function ShopDetails() {

    const [ShopDetails, setShopDetails] = useState({
        shopName: '',
        shopEmail: '',
        mobileNumber: '',
        GstNumber: '',
        shopAddress: '',
        photo: '',
        agreeToTerms: false,
    });

    const {
        shopName,
        shopEmail,
        mobileNumber,
        GstNumber,
        shopAddress,
        photo,
        agreeToTerms,
    } = ShopDetails;

    const onInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setShopDetails({ ...ShopDetails, [name]: newValue});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!agreeToTerms) {
            alert('Please agree to the Terms and Conditions.');
            return;
          }
        // Replace 'YOUR_API_URL' with the actual URL of your API endpoint
        const apiUrl = 'http://localhost:9898/shop/add';

        try {
            // Make the API request with the shop details data
            const response = await axios.post(apiUrl, ShopDetails);
            console.log('API response:', response.data);
            // Handle success, show a success message, redirect, etc.
        } catch (error) {
            console.error('API error:', error);
            // Handle error, show an error message, etc.
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
                                    <h1> Shop Details Page</h1>
                                    <ul>
                                        <li><a href='/#'><i className="fa-regular fa-house"></i></a></li>
                                        <li>/</li>
                                        <li> Shop Details</li>
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
                                    <h2> Shop Details </h2>
                                    <p>There are no enrollment fees or shipping quotas. Simp vide your contact information, create a user ID and word.</p>
                                    <form className="login-form" id='shop-form' onSubmit={onSubmit}>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            required
                                            onChange={onInputChange}
                                            value={shopName}
                                        />
                                        <input type="email"
                                            placeholder="Email "
                                            name='email'
                                            required
                                            onChange={onInputChange}
                                            value={shopEmail} />
                                        {/* <input type="password" name="password" placeholder="Enter Password"/> */}
                                        <input type="number" 
                                            placeholder="Mobile Number"
                                            required
                                            name='mobile'
                                            onChange={onInputChange}
                                            value={mobileNumber} 
                                            pattern="[0-9]{5}[0-9]{5}"/>
                                        <input type="number" placeholder="GST Number"
                                            required
                                            name='gst'
                                            onChange={onInputChange}
                                            value={GstNumber} 
                                         pattern=' ^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$'  />
                                        <textarea placeholder='Address' type="text" rows='5'
                                            required
                                            name='address'
                                            onChange={onInputChange}
                                            value={shopAddress}></textarea>
                                      
                                            {/* <label className="inputfilenone">  
                                            <img src={photo || "/public/dashboad/assets/vendor/images/Addlogo.png"} alt='uploaded file'  /> */}
                                            <input type="file" placeholder='photo' required
                                            onChange={onInputChange}
                                            name='photo'
                                            value={photo} />
                                            {/* </label> */}
                                              <div className="form-check">
                                            <input
                                                className="form-check-input shipping-check"
                                                type="checkbox"
                                                name="agreeToTerms"
                                                id="agreeToTerm"
                                                checked={agreeToTerms}
                                                onChange={onInputChange}
                                            />
                                            <span className="sub-input"><i className="fa-regular fa-check"></i></span>
                                            <label className="form-check-label" for="agreeToTerm">
                                                Agree to the <a href="/#">Terms and Conditions</a>
                                            </label>
                                            </div>


                                        {/* <NavLink to="/venlogin"  >  */}
                                         <button className="def-btn btn-border" type='submit'>Save</button>
                                        {/* </NavLink> */}
                                        </form>
                                    {/* <span className="devider">or</span>
                        <div className="social-login-box">
                            <button className="def-btn btn-fb">Login with your facebook</button>
                            <button className="def-btn btn-gl">Login with your google+</button>
                        </div> */}
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

export default ShopDetails
