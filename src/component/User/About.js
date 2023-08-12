/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function About() {
  return (
    <div id='user'>
      <Header />
<div className='inner'>
      <div className="banner banner-inner">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-9 col-8">
              <div className="breadcrumb-txt">
                <h1>About Us</h1>
                <ul>
                  <li><a href="index.html"><i className="fa-regular fa-house"></i></a></li>
                  <li>/</li>
                  <li>About Us</li>
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



      {/* <!--------------------------------- ABOUT SECTION START ---------------------------------> */}
      <div className="about pt-120 pb-60">
        <div className="container">
          <div className="main-img">
            <img src="assets/images/about-img.jpg" alt="Image"/>
          </div>
          <div className="main-txt">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-7">
                <h2 className="about-page-title text-center">BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION​</h2>
            </div>
            <div className="main-img">
            <h5 style={{color:'#52595D'}} ><i>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Kirti.today is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Kirti.today from the comfort of your home and get your favourites delivered right to your doorstep.</i></h5></div>
          </div>
            <div className="why-choose">
              <div className="row g-4 justify-content-between">
                <div className="col-xl-6 col-lg-7">
                  <div className="part-txt">
                    <h2 className="part-title">Why Choose Us?</h2>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          AFFORDABLE FASHION AT YOUR FINGERTIPS
                            <span><i className="fa-regular fa-minus"></i></span>
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Kirti.today is one of the unique online shopping sites in India where fashion is accessible to all. Check out our new arrivals to view the latest designer clothing, footwear and accessories in the market. You can get your hands on the trendiest style every season in western wear. You can also avail the best of ethnic fashion during all Indian festive occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts, backpacks and more. The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable. </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Quick Fashion Tip And Tricks
                            <span><i className="fa-regular fa-plus"></i></span>
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Kirti.today  Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe. </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Celebrity Confessions And A Look Into Their Lives
                            <span><i className="fa-regular fa-plus"></i></span>
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>A bonus feature that Kirti.today  Studio has in store for you is celebrity confessions and a peek into their lives. So, Kirti.today  helps you stay connected to your most beloved celebrities in a matter of clicks.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Explicit Step-By-Step Beauty Routines From Experts
                            <span><i className="fa-regular fa-plus"></i></span>
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Just like fashion, the beauty community keeps on growing, and with brands such as Huda Beauty, MAC and the latest Kay Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it is creating a no-makeup look, different winged eyeliners, do-it-yourself facial masks and other personal care beauty routines, Kirti.today Studio is here for you. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                  <div className="video-area">
                    <a href="/#" className="js-modal-btn" data-video-id="uoIW4M_MeU8"><i className="flaticon-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--------------------------------- ABOUT SECTION END ---------------------------------> */}


      <div className="about pt-120 pb-60">
        <div className="container">
      <div className="why-choose">
              <div className="row g-4 justify-content-between">
              <div className="col-xl-6 col-lg-5">
                  <div className="video-area">
                    <a href="/#" className="js-modal-btn" data-video-id="uoIW4M_MeU8"><i className="flaticon-play"></i></a>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-7">
                  <div className="part-txt">
                    <h2 className="part-title">Why Choose Us?</h2>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Stylish accessories
                            <span><i className="fa-regular fa-minus"></i></span>
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Kirti.today is one of the best online shopping sites for classy accessories that perfectly complement your outfits. You can select smart analogue or digital watches and match them up with belts and ties. Pick up spacious bags, backpacks, and wallets to store your essentials in style. Whether you prefer minimal jewellery or grand and sparkling pieces, our online jewellery collection offers you many impressive options. </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Quick Fashion Tip And Tricks
                            <span><i className="fa-regular fa-plus"></i></span>
                          </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Whether it is draping a saree into a dhoti style, wearing the right lingerie under certain dresses or discovering multiple uses out of heavy ethnic wear, Kirti.today  Studio will help you acquire some unique and useful fashion hacks. Each hack is designed with the intention to help you get the best wear out of everything in your wardrobe. </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Keep Up With What Your Favourite Fashion Icons Are Upto
                            <span><i className="fa-regular fa-plus"></i></span>
                          </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and stylists. The whole concept of building an outfit from scratch and showcasing it to a huge community of enthusiasts using the hashtag has helped individuals with understanding trends and making suitable for daily wear.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                          Updates on What Is Trending and New Product Launches                            <span><i className="fa-regular fa-plus"></i></span>
                          </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <p>Since fast fashion seems to be extremely hard to keep up with these days, a quick update on what is trending in accessories, clothing and footwear would certainly be of great help. Kirti.today  Studio helps you stay connected to the most beloved and sought after brands such as Puma, Coverstory, The Label Life and so many more.</p>
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



    



      {/* <!--------------------------------- TEAM SECTION START ---------------------------------> */}
      <div className="team pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <h2 className="about-page-title text-center">Meet Our Team</h2>
            </div>
          </div>
          <div className="row g-lg-4 g-3">
            <div className="col-md-3 col-6">
              <div className="single-card">
                <div className="part-img">
                  <img src="assets/images/team-1.jpg" alt="Image"/>
                </div>
                <div className="part-txt">
                  <h3>Md Saidul</h3>
                  <p>Executive</p>
                </div>
                <div className="social">
                  <a href="/#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="/#"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="/#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-card">
                <div className="part-img">
                  <img src="assets/images/team-2.jpg" alt="Image"/>
                </div>
                <div className="part-txt">
                  <h3>Mike Dooley</h3>
                  <p>Chief Executive</p>
                </div>
                <div className="social">
                  <a href="/#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="/#"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="/#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-card">
                <div className="part-img">
                  <img src="assets/images/team-3.jpg" alt="Image"/>
                </div>
                <div className="part-txt">
                  <h3>Alextina Jimiey</h3>
                  <p>Manager</p>
                </div>
                <div className="social">
                  <a href="/#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="/#"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="/#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-card">
                <div className="part-img">
                  <img src="assets/images/team-4.jpg" alt="Image"/>
                </div>
                <div className="part-txt">
                  <h3>Caitlin Murphy</h3>
                  <p>Executive</p>
                </div>
                <div className="social">
                  <a href="/#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="/#"><i className="fa-brands fa-whatsapp"></i></a>
                  <a href="/#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/#"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--------------------------------- TEAM SECTION END ---------------------------------> */}



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





      <Footer />
    </div>
    </div>
  )
}

export default About
