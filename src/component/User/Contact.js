/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import axios from 'axios';
import Footer from './Footer';
import Header from './Header';

function Contact() {


  const Msglist={
    name:'',
    email:'',
    message:'',
   }
const[Contact,setContact]=React.useState(Msglist)

const handleChange=(e)=>{
    setContact({...Contact,[e.target.name]:e.target.value})
}

const submitContact=()=>{
    axios.post("http://localhost:2423/addcontact", Contact)
    .then(response => response.data)
    .then(res => {
      console.log(res)
      alert("data saved")
    })  
  }



  return (
    <div id='user'>
    <Header/>
    <div classNameName='header rev-6-header'>
      
    {/* <!--------------------------------- BANNER SECTION START ---------------------------------> */}
    <div className="banner banner-inner">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-md-9 col-8">
                    <div className="breadcrumb-txt">
                        <h1>Contact Page</h1>
                        <ul>
                            <li><a href="index.html"><i className="fa-regular fa-house"></i></a></li>
                            <li>/</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-md-3 col-4">
                    <div className="part-img">
                        <img src="assets/images/breadcrumb-img.png" alt="Image"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!--------------------------------- BANNER SECTION END --------------------------------->



    <!--------------------------------- CONTACT START ---------------------------------> */}
    <div className="contact py-120">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="contact-info">
                        <h2 className="title">Contact info</h2>
                        <ul>
                            <li>
                                <div className="part-icon">
                                    <span><i className="fa-solid fa-phone-flip"></i></span>
                                </div>
                                <div className="part-txt">
                                    <a href="mailto:Support@gmail.com">query@Kirti.today</a>
                                    <a href="tel:+1212-683-9756">+1 212-683-9756</a>
                                </div>
                            </li>
                            <li>
                                <div className="part-icon">
                                    <span><i className="fa-solid fa-location-dot"></i></span>
                                </div>
                                <div className="part-txt">
                                    <span>799 W 6th St Hoisington, Kansas 121 Sparrow Hawk, Alberta</span>
                                </div>
                            </li>
                            <li>
                                <div className="part-icon">
                                    <span><i className="fa-solid fa-clock"></i></span>
                                </div>
                                <div className="part-txt">
                                    <span>Mon - Sat : 8:00am - 5:00pm</span>
                                    <span>Sunday: Closed</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xxl-7 col-lg-7 col-md-6">
                    <div className="contact-form">
                        <h2 className="title">Leave a Message</h2>
                        <form className="row g-lg-4 g-3">
                            <div className="col-lg-6 col-md-12 col-sm-6">
                                <input onChange={handleChange} name='name' type="text" placeholder="Name"/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-6">
                                <input onChange={handleChange} name='email' type="email" placeholder="Email"/>
                            </div>
                            <div className="col-12">
                                <textarea onChange={handleChange} name='message' placeholder="Your message"></textarea>
                            </div>
                            <div className="col-12">
                                <button onClick={submitContact} className="def-btn btn-border w-100">Find an agent</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14594.426811590003!2d90.40170455!3d23.8680958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1661416116390!5m2!1sen!2sbd" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    {/* <!--------------------------------- CONTACT END --------------------------------->



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
    {/* <!--------------------------------- FEATURES SECTION END ---------------------------------> */}
    </div>

<Footer/>
    </div>
  )
}

export default Contact
