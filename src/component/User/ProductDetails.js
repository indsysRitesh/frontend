/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



function ProductDetails() {
    const {id} = useParams();
    const [display, setDisplay] = useState({});

    
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.data)
            .then(res => {
                console.log(res)
                setDisplay(res);
             
            })
    }, [id])

   


    return (
        <div id='user'>
            <body className="inner">
<Header/>
                {/* <!--------------------------------- BANNER SECTION START ---------------------------------> */}
                <div className="banner banner-inner">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-6 col-md-9 col-8">
                                <div className="breadcrumb-txt">
                                    <h1>Shop Details</h1>
                                    <ul>
                                        <li><a href="index-2.html"><i className="fa-regular fa-house"></i></a></li>
                                        <li>/</li>
                                        <li>Shop Details</li>
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
                {/* <!--------------------------------- BANNER SECTION END ---------------------------------> */}

                {/* <!--------------------------------- SHOP SECTION START ---------------------------------> */}
                <div className="shop-details py-120">
                    <div className="container">
                        {/* {allProduct.map((display, ind) => ( */}

                            <div className="product-view-area">

                                <div className="row">

                                    <div className="col-xl-6 col-lg-5 col-md-6">
                                        <div className="part-img mr-30">
                                            <div className="img-box" id="bigPreview">
                                                <img src={display.image} alt="Image" />
                                                <button className="quick-view"><i className="fa-thin fa-arrows-maximize"></i></button>
                                            </div>
                                            <div className="btn-box">
                                                <button className="small-thumb active">
                                                    <img src={display.image} alt="image" />
                                                </button>
                                                <button className="small-thumb">
                                                    <img src={display.image} alt="image" />
                                                </button>
                                                <button className="small-thumb">
                                                    <img src={display.image} alt="image" />
                                                </button>
                                                <button className="small-thumb">
                                                    <img src={display.image} alt="image" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-7 col-md-6">
                                        <div className="part-txt">
                                        <h2 className="main-product-title">{display.title}</h2>

                                         
                                            <div className="review">
                                                <span className="star">
                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                    <i className="fa-solid fa-star-sharp"></i>
                                                </span>
                                                <span className="rating-amount">3 Reviews</span>
                                            </div>
                                            <p className="price"><span>{display.price}</span> {display.price}</p>
                                            <ul className="short-details">
                                                <li>Availability: <span>In stock</span></li>
                                                <li>Product Code: <span>#4657</span></li>
                                                <li>Tags: <span>Fashion, Hood, Classic</span></li>
                                            </ul>
                                            <p className="dscr">{display.description}</p>
                                            <form>
                                                <div className="row g-xl-4 g-3">
                                                    <div className="col-lg-4 col-md-6 col-sm-4 col-6">
                                                        <div className="color-select-wrap">
                                                            <label>Color</label>
                                                            <select name="color" className="select wide color-select">
                                                                <option value="*" selected disabled>Select Color</option>
                                                                <option value="1">Green</option>
                                                                <option value="2">Red</option>
                                                                <option value="3">Yellow</option>
                                                                <option value="4">Blue</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-4 col-6">
                                                        <label>Size</label>
                                                        <select name="size" className="select wide">
                                                            <option value="*" selected disabled>Select Size</option>
                                                            <option value="1">SM</option>
                                                            <option value="2">M</option>
                                                            <option value="3">L</option>
                                                            <option value="4">XL</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-4 col-md-12 col-sm-4">
                                                        <div className="quantity-wrap">
                                                            <label>QTY</label>
                                                            <div className="product-count">
                                                                <div className="quantity rapper-quantity">
                                                                    <input type="number" min="1" max="100" step="1" value="1" readonly />
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
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="btn-box">
                                                <button  id="addToCart"><span><i className="fa-light fa-cart-shopping"></i></span> add to cart</button>
                                                <button  id="addToWishList"><span><i className="fa-light fa-heart"></i></span> add to wishlist</button>
                                            </div>
                                            <div className="product-share">
                                                <span>Share Link:</span>
                                                <div className="social">
                                                    <a href="/#"><i className="fa-brands fa-facebook-f"></i></a>
                                                    <a href="/#"><i className="fa-brands fa-twitter"></i></a>
                                                    <a href="/#"><i className="fa-brands fa-google-plus-g"></i></a>
                                                    <a href="/#"><i className="fa-solid fa-rss"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="details-area">
                                    <nav>
                                        <div className="nav" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-dscr-tab" data-bs-toggle="tab" data-bs-target="#nav-dscr" type="button" role="tab" aria-controls="nav-dscr" aria-selected="true">Description</button>
                                            <button className="nav-link" id="nav-info-tab" data-bs-toggle="tab" data-bs-target="#nav-info" type="button" role="tab" aria-controls="nav-info" aria-selected="false">Information</button>
                                            <button className="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Reviews</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane fade show active" id="nav-dscr" role="tabpanel" aria-labelledby="nav-dscr-tab" tabindex="0">
                                            <div className="product-dscr">
                                                <p>Shank porchetta anim ham in esse. Duis swine mollit incididunt, quis pork belly rump ut ball tip venison strip steak pancetta proident. Ground roun duis beef, eu sunt non dolor esse capicola shoulder strip steak. Ut fatback chuck minim exercitation kielbasa. Cupidatat nostrud prosciutto corned beefdgf meatball sausage lorem.Ground round jowl pig, short ribs turducken cillum labore aliqua bacon ea doner anim esse. Jerky laboris id, fatback ut gfjb Filet mignon corned beef laboris ipsum porchetta beef irure dolor fatback. Pariatur cupim occaecat short ribs</p>
                                                <p>consectetur, venison ipsum flank hamburger bacon tri-tip. Eu duis est cupidatat prosciutto alcatra, consectetur aute velit shoulder shankle ham ho Cillum deserunt velit dolor, beef ribs excepteur hamburger flank occaecat. Qui dolor flank picanha t-bone lorem</p>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="part-img">
                                                            <img src="/assets/images/product-dscr-img.jpg" alt="Image" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-8 col-md-6">
                                                        <p className="mt-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodt tempor incididunt ut labore et dolore magna aliqua. Quis ipsum vcdisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                                                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                                    </div>
                                                </div>
                                                <p>Shank porchetta anim ham in esse. Duis swine mollit incididunt, quis pork belly rump ut ball tip venison strip steak pancetta proident. Ground roun duis beef, eu sunt non dolor esse capicola shoulder strip steak. Ut fatback chuck minim exercitation kielbasa. Cupidatat nostrud prosciutto corned beefdgf meatball sausage lorem.Ground round jowl pig, short ribs turducken cillum labore aliqua bacon ea doner anim esse. Jerky laboris id, fatback ut gfjb Filet mignon corned beef laboris ipsum porchetta beef irure dolor fatback. Pariatur cupim occaecat short ribs</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab" tabindex="0">
                                            <div className="product-information">
                                                <ul>
                                                    <li><span>Brand Name:</span>KLGH</li>
                                                    <li><span>Vocalism Principle:</span>Dynamic</li>
                                                    <li><span>Style:</span>Over the Ear</li>
                                                    <li><span>Origin:</span>Mainland China</li>
                                                    <li><span>Control Button:</span>Yes</li>
                                                    <li><span>Volume Control:</span>Yes</li>
                                                    <li><span>Certification:</span>CE</li>
                                                    <li><span>Number Of Drivers:</span>2</li>
                                                    <li><span>Plug Type:</span>Line Type</li>
                                                    <li><span>Range:</span>up to 32 Ω</li>
                                                    <li><span>Material:</span>Fabric</li>
                                                    <li><span>Memory Card:</span>Yes</li>
                                                    <li><span>Waterproof:</span>No</li>
                                                    <li><span>Magnet Type:</span>Other</li>
                                                    <li><span>Wireless Type:</span>Bluetooth</li>
                                                    <li><span>Codecs:</span>AAC</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab" tabindex="0">
                                            <div className="product-review">
                                                <div className="review-overview">
                                                    <div className="left">
                                                        <h2>4.2 <span>/5</span></h2>
                                                        <p>251 Ratings</p>
                                                    </div>
                                                    <div className="right">
                                                        <ul>
                                                            <li>
                                                                <div className="stars">
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                </div>
                                                                <div className="review-line">
                                                                    <div className="progress">
                                                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: 41 }} aria-valuenow="41" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="percentage">
                                                                    <span>103</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="stars">
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                </div>
                                                                <div className="review-line">
                                                                    <div className="progress">
                                                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: 29 }} aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="percentage">
                                                                    <span>73</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="stars">
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                </div>
                                                                <div className="review-line">
                                                                    <div className="progress">
                                                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: 16 }} aria-valuenow="16" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="percentage">
                                                                    <span>39</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="stars">
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                </div>
                                                                <div className="review-line">
                                                                    <div className="progress">
                                                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: 11 }} aria-valuenow="11" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="percentage">
                                                                    <span>27</span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="stars">
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                </div>
                                                                <div className="review-line">
                                                                    <div className="progress">
                                                                        <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: 3 }} aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                                                                    </div>
                                                                </div>
                                                                <div className="percentage">
                                                                    <span>09</span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="review-title">
                                                    <h3>Reviews</h3>
                                                </div>
                                                <div className="review-wrap">
                                                    <div className="single-review">
                                                        <div className="user">
                                                            <div className="part-img">
                                                                <img src="/assets/images/avatar.png" alt="User" />
                                                            </div>
                                                            <div className="txt">
                                                                <span className="name">Shaikh Dardah</span>
                                                                <span className="date">17/08/2022</span>
                                                                <span className="star">
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos veniam aperiam autem sint beatae eveniet minima impedit, deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident.</p>
                                                            <div className="bottom-wrap">
                                                                <div className="gallery-wrap">
                                                                    <div className="img-gallery">
                                                                        <button className="client-img"><img src="assets/images/review-img-1.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-2.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-3.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-4.jpg" alt="image" /></button>
                                                                    </div>
                                                                    <div className="view-panel">
                                                                        <img className="client-product" src="assets/images/index.html" alt="image" />
                                                                        <button className="clt-view-panel-close"><i className="fa-light fa-circle-xmark"></i></button>
                                                                    </div>
                                                                </div>
                                                                <div className="reaction">
                                                                    <div className="like">
                                                                        <button><i className="fa-duotone fa-thumbs-up"></i></button>
                                                                        <span>(2)</span>
                                                                    </div>
                                                                    <div className="dislike">
                                                                        <button><i className="fa-duotone fa-thumbs-down"></i></button>
                                                                        <span>(0)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-review">
                                                        <div className="user">
                                                            <div className="part-img">
                                                                <img src="/assets/images/avatar.png" alt="User" />
                                                            </div>
                                                            <div className="txt">
                                                                <span className="name">Shaikh Dardah</span>
                                                                <span className="date">17/08/2022</span>
                                                                <span className="star">
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos veniam aperiam autem sint beatae eveniet minima impedit, deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident.</p>
                                                            <div className="bottom-wrap">
                                                                <div className="gallery-wrap">
                                                                    <div className="img-gallery">
                                                                        <button className="client-img"><img src="assets/images/review-img-1.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-2.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-3.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-4.jpg" alt="image" /></button>
                                                                    </div>
                                                                    <div className="view-panel">
                                                                        <img className="client-product" src="assets/images/index.html" alt="image" />
                                                                        <button className="clt-view-panel-close"><i className="fa-light fa-circle-xmark"></i></button>
                                                                    </div>
                                                                </div>
                                                                <div className="reaction">
                                                                    <div className="like">
                                                                        <button><i className="fa-duotone fa-thumbs-up"></i></button>
                                                                        <span>(2)</span>
                                                                    </div>
                                                                    <div className="dislike">
                                                                        <button><i className="fa-duotone fa-thumbs-down"></i></button>
                                                                        <span>(0)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-review">
                                                        <div className="user">
                                                            <div className="part-img">
                                                                <img src="/assets/images/avatar.png" alt="User" />
                                                            </div>
                                                            <div className="txt">
                                                                <span className="name">Shaikh Dardah</span>
                                                                <span className="date">17/08/2022</span>
                                                                <span className="star">
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp rated"></i>
                                                                    <i className="fa-solid fa-star-sharp"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eos veniam aperiam autem sint beatae eveniet minima impedit, deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident deserunt magni harum aut ducimus explicabo, consectetur natus nulla repellendus quos provident.</p>
                                                            <div className="bottom-wrap">
                                                                <div className="gallery-wrap">
                                                                    <div className="img-gallery">
                                                                        <button className="client-img"><img src="assets/images/review-img-1.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-2.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-3.jpg" alt="image" /></button>
                                                                        <button className="client-img"><img src="assets/images/review-img-4.jpg" alt="image" /></button>
                                                                    </div>
                                                                    <div className="view-panel">
                                                                        <img className="client-product" src="assets/images/index.html" alt="image" />
                                                                        <button className="clt-view-panel-close"><i className="fa-light fa-circle-xmark"></i></button>
                                                                    </div>
                                                                </div>
                                                                <div className="reaction">
                                                                    <div className="like">
                                                                        <button><i className="fa-duotone fa-thumbs-up"></i></button>
                                                                        <span>(2)</span>
                                                                    </div>
                                                                    <div className="dislike">
                                                                        <button><i className="fa-duotone fa-thumbs-down"></i></button>
                                                                        <span>(0)</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* ))} */}
                    </div>
                    {/* <!--------------------------------- SHOP SECTION END ---------------------------------> */}

                </div>
                 {/* <!--------------------------------- SHOP SECTION end ---------------------------------> */}
            </body>

            <Footer/>
        </div>
    )
}

export default ProductDetails
