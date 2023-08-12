/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

function VenHeader() {
  return (
    <div>
      <div id='dashboad'>

        <div className="body-padding body-p-top light-theme">

          {/* <!-- header start --> */}
          <div className="header">
            <div className="row g-0 align-items-center">
              <div className="col-xxl-6 col-xl-5 col-4 d-flex align-items-center gap-20">
                <div className="main-logo d-lg-block d-none">
                  <div className="logo-big w-50">
                    <a href="/venallcustomer">
                      <img src="/assets/images/kirti.today/Kirti Logo 1.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="logo-small w-25">
                    <a href="/venallcustomer">
                      <img src="/assets/images/kirti.today/Kirti Logo 1.png" alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="nav-close-btn">
                  <button id="navClose"><i className="fa-light fa-bars-sort"></i></button>
                </div>
                <a href="/" target="_blank" className="btn btn-sm btn-primary site-view-btn">
                  <i className="fa-light fa-globe me-1"></i> <span>View Website</span></a>
              </div>
              <div className="col-4 d-lg-none">
                <div className="mobile-logo">
                <a href="/venallcustomer">
                      <img src="/assets/images/kirti.today/Kirti Logo 1.png" alt="Logo" />
                    </a>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-7 col-lg-8 col-4">
                <div className="header-right-btns d-flex justify-content-end align-items-center">
                  <div className="header-collapse-group">
                    <div className="header-right-btns d-flex justify-content-end align-items-center p-0">
                      <form className="header-form">
                        <input type="search" name="search" placeholder="Search..." required />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                      </form>
                      <div className="header-right-btns d-flex justify-content-end align-items-center p-0">
                        <div className="lang-select">
                          <span>Language:</span>
                          <select>
                            <option value="">EN</option>
                            <option value="">BN</option>
                            <option value="">FR</option>
                          </select>
                        </div>
                        <div className="header-btn-box">
                          <button className="header-btn" id="messageDropdown" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="fa-light fa-comment-dots"></i>
                            <span className="badge bg-danger">3</span>
                          </button>
                          <ul className="message-dropdown dropdown-menu" aria-labelledby="messageDropdown">
                            <li>
                              <a href="/#" className="d-flex">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar.png" alt="image" />
                                </div>
                                <div className="msg-txt">
                                  <span className="name">Archer Cowie</span>
                                  <span className="msg-short">There are many variations of passages of
                                    Lorem Ipsum.</span>
                                  <span className="time">2 Hours ago</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="d-flex">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar-2.png" alt="image" />
                                </div>
                                <div className="msg-txt">
                                  <span className="name">Cody Rodway</span>
                                  <span className="msg-short">There are many variations of passages of
                                    Lorem Ipsum.</span>
                                  <span className="time">2 Hours ago</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="d-flex">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar-3.png" alt="image" />
                                </div>
                                <div className="msg-txt">
                                  <span className="name">Zane Bain</span>
                                  <span className="msg-short">There are many variations of passages of
                                    Lorem Ipsum.</span>
                                  <span className="time">2 Hours ago</span>
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="show-all-btn">Show all message</a>
                            </li>
                          </ul>
                        </div>
                        <div className="header-btn-box">
                          <button className="header-btn" id="notificationDropdown" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i className="fa-light fa-bell"></i>
                            <span className="badge bg-danger">9+</span>
                          </button>
                          <ul className="notification-dropdown dropdown-menu"
                            aria-labelledby="notificationDropdown">
                            <li>
                              <a href="/#" className="d-flex align-items-center">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar.png" alt="image" />
                                </div>
                                <div className="notification-txt">
                                  <span className="notification-icon text-primary"><i
                                    className="fa-solid fa-thumbs-up"></i></span> <span
                                      className="fw-bold">Archer</span> Likes your post
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="d-flex align-items-center">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar-2.png" alt="image" />
                                </div>
                                <div className="notification-txt">
                                  <span className="notification-icon text-success"><i
                                    className="fa-solid fa-comment-dots"></i></span> <span
                                      className="fw-bold">Cody</span> Commented on your post
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="d-flex align-items-center">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar-3.png" alt="image" />
                                </div>
                                <div className="notification-txt">
                                  <span className="notification-icon"><i
                                    className="fa-solid fa-share"></i></span> <span
                                      className="fw-bold">Zane</span> Shared your post
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="d-flex align-items-center">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar-4.png" alt="image" />
                                </div>
                                <div className="notification-txt">
                                  <span className="notification-icon text-primary"><i
                                    className="fa-solid fa-thumbs-up"></i></span> <span
                                      className="fw-bold">Christopher</span> Likes your post
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="d-flex align-items-center">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar-5.png" alt="image" />
                                </div>
                                <div className="notification-txt">
                                  <span className="notification-icon text-success"><i
                                    className="fa-solid fa-comment-dots"></i></span> <span
                                      className="fw-bold">Charlie</span> Commented on your post
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="d-flex align-items-center">
                                <div className="avatar">
                                  <img src="/dashboad/assets/images/avatar-6.png" alt="image" />
                                </div>
                                <div className="notification-txt">
                                  <span className="notification-icon"><i
                                    className="fa-solid fa-share"></i></span> <span
                                      className="fw-bold">Jayden</span> Shared your post
                                </div>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="show-all-btn">Show all message</a>
                            </li>
                          </ul>
                        </div>
                        <button className="header-btn fullscreen-btn" id="btnFullscreen"><i
                          className="fa-light fa-expand"></i></button>
                      </div>
                    </div>
                  </div>
                  <button className="header-btn header-collapse-group-btn d-lg-none"><i
                    className="fa-light fa-ellipsis-vertical"></i></button>
                  <div className="header-btn-box">
                    <button className="profile-btn" id="profileDropdown" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src="/dashboad/assets/images/ven.png" alt="image" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                      <li>
                        <div className="dropdown-txt text-center">
                          <p className="mb-0">Shaikh Abu Dardah</p>
                          <span className="d-block">CEO & Founder</span>
                        </div>
                      </li>
                      <li><a className="dropdown-item" href="dashboard-view-profile.html"><span
                        className="dropdown-icon"><i className="fa-regular fa-circle-user"></i></span>
                        Profile</a></li>
                      <li><a className="dropdown-item" href="/#"><span className="dropdown-icon"><i
                        className="fa-regular fa-circle-question"></i></span> Help</a></li>
                      <li><a className="dropdown-item" href="dashboard-edit-profile.html"><span
                        className="dropdown-icon"><i className="fa-regular fa-gear"></i></span> Settings</a>
                      </li>
                      <li><a className="dropdown-item" href="dashboard-login.html"><span className="dropdown-icon"><i
                        className="fa-regular fa-arrow-right-from-bracket"></i></span> Logout</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- header end --> */}

          {/* <!-- main sidebar start --> */}
          <div className="main-sidebar flush-menu">
            <div className="main-menu">
              <ul className="sidebar-menu scrollable">
                <li className="sidebar-item open ">
                  <ul className="sidebar-link-group">
                 <li className="sidebar-dropdown-item"> 
                      <a href="/vendashboard" className="sidebar-link  "><span className="nav-icon"><i
                        className="fa-light fa-grid-2"></i></span> <span
                          className="sidebar-txt"> Dashboard</span></a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a role="button" className="sidebar-link-group-title has-sub">Apps</a>
                  <ul className="sidebar-link-group">
                
                     <li className="sidebar-dropdown-item">
                      <a href="/venaddproduct" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-plus-square"></i></span> <span className="sidebar-txt">Add
                          Product</span></a>
                    </li>
                   <li className="sidebar-dropdown-item">
                      <a href="/venallproduct" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-boxes"></i></span> <span className="sidebar-txt">All
                          Product</span></a>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <a href="/vencategory" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-tag"></i></span> <span
                          className="sidebar-txt">Category</span></a>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <a href="/venorder" className="sidebar-link"><span className="nav-icon"><i class="fa-light fa-cart-shopping-fast"></i></span> <span
                          className="sidebar-txt">Order</span></a>
                    </li>
                   <li className="sidebar-dropdown-item">
                      <a href="/vencalendar" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-calendar"></i></span> <span
                          className="sidebar-txt">Calendar</span></a>
                    </li>
                 
                  </ul>
                </li> 
                <li className="sidebar-item">
                  <a role="button" className="sidebar-link-group-title has-sub">Personal Information</a>
                  <ul className="sidebar-link-group">
                
                     <li className="sidebar-dropdown-item">
                      <a href="/venprofile" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-plus-square"></i></span> <span className="sidebar-txt">Profile</span></a>
                    </li>
                   <li className="sidebar-dropdown-item">
                      <a href="/venshopdetails" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-boxes"></i></span> <span className="sidebar-txt">Shop Details</span></a>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <a href="/venbankdetails" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-tag"></i></span> <span
                          className="sidebar-txt">Bank Details</span></a>
                    </li>
                
                  </ul>
                </li> 
                <li className="help-center">
                  <h3>Help Center</h3>
                  <p>We're an award-winning, forward thinking</p>
                  <a href="/#" className="btn btn-sm btn-light">Go to Help Center</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- main sidebar end --> */}



        </div>
      </div>
    </div>
  )
}

export default VenHeader
