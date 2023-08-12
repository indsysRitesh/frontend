/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Header from './Header'
import Footer from './Footer'


const WishList = () => {

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
                        <h1>Wishlist Page</h1>
                        <ul>
                            <li><a href="index-2.html"><i className="fa-regular fa-house"></i></a></li>
                            <li>/</li>
                            <li>Wishlist</li>
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
    {/* <!--------------------------------- BANNER SECTION END ---------------------------------> */}



    {/* <!--------------------------------- WISHLIST SECTION START ---------------------------------> */}
    <div className="wishlist py-120">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="revel-table">
                        <div className="table-responsive">
                              <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                              
                                <tbody>
                                    <tr >
                                        <td>
                                            <div className="product-img">
                                                <img src="assets/images/feat-product-1.jpg" alt="Image"/>
                                            </div>
                                        </td>
                                        <td><a href="shop-details.html" className="product-name">White short Checkered </a></td>
                                        <td><span className="price-txt">$<span className="main-price"></span></span></td>
                                        <td>
                                            <div className="product-count cart-product-count">
                                                <div className="quantity rapper-quantity">
                                                    <input type="number" min="1" max="100" step="1" value="1" readonly/>
                                                    <div className="quantity-nav">
                                                        <div className="quantity-button quantity-down">
                                                            <i className="fa-solid fa-minus"></i>
                                                        </div>
                                                        <div className="quantity-button quantity-up">
                                                            <i className="fa-solid fa-plus"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="price-txt">$<span className="total-price">460.00</span></span></td>
                                        <td><button className="cart-delete" ><i className="fa-light fa-trash-can"></i></button></td>
                                    </tr>
                                    
                                </tbody>
                                
                            </table>  
   

                       </div>
                    </div>
                    <a href="shop.html" className="def-btn btn-border">CONTINUE SHOPPING</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!--------------------------------- WISHLIST SECTION END ---------------------------------> */}



    {/* <!--------------------------------- FEATURES SECTION START ---------------------------------> */}
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

export default WishList
