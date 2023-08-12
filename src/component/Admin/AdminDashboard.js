/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import AdminFooter from './AdminFooter'
// import AdminHeader from './AdminHeader'

function AdminDashboard() {
    return (
        <div id='dashboad'>

            <body className="body-padding body-p-top light-theme">

          {/* <!-- header start --> */}
          <div className="header">
            <div className="row g-0 align-items-center">
              <div className="col-xxl-6 col-xl-5 col-4 d-flex align-items-center gap-20">
                <div className="main-logo d-lg-block d-none">
                  <div className="logo-big w-50">
                    <a href="/adminallcustomer">
                      <img src="/assets/images/kirti.today/Kirti Logo 1.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="logo-small w-25">
                    <a href="/adminallcustomer">
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
                <a href="/adminallcustomer">
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
                      <img src="/dashboad/assets/images/admin.png" alt="image" />
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
                      <a href="/admindashboard" className="sidebar-link  "><span className="nav-icon"><i
                        className="fa-light fa-grid-2"></i></span> <span
                          className="sidebar-txt"> Dashboard</span></a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a role="button" className="sidebar-link-group-title has-sub">Apps</a>
                  <ul className="sidebar-link-group">
                 <li className="sidebar-dropdown-item">
                    <a href="/adminallcustomer" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-user-group"></i></span> <span className="sidebar-txt">
                           All Customer</span></a>
                    </li>
                     <li className="sidebar-dropdown-item">
                      <a href="/adminaddproduct" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-plus-square"></i></span> <span className="sidebar-txt">Add
                          Product</span></a>
                    </li>
                   <li className="sidebar-dropdown-item">
                      <a href="/adminallproduct" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-boxes"></i></span> <span className="sidebar-txt">All
                          Product</span></a>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <a href="/admincategory" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-tag"></i></span> <span
                          className="sidebar-txt">Category</span></a>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <a href="/adminorder" className="sidebar-link"><span className="nav-icon"><i class="fa-light fa-cart-shopping-fast"></i></span> <span
                          className="sidebar-txt">Order</span></a>
                    </li>
                   <li className="sidebar-dropdown-item">
                      <a href="/admincalendar" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-calendar"></i></span> <span
                          className="sidebar-txt">Calendar</span></a>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <a href="/admininvoices" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-file-invoice"></i></span> <span
                          className="sidebar-txt">Invoices</span></a>
                    </li>
                     <li className="sidebar-dropdown-item">
                      <a href="/admincontacts" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-user-plus"></i></span> <span
                          className="sidebar-txt">Contacts</span></a>
                    </li>
                  </ul>
                </li> 
                <li className="sidebar-item">
                  <a role="button" className="sidebar-link-group-title has-sub">Pages</a>
                  <ul className="sidebar-link-group">
                    <li className="sidebar-dropdown-item">
                      <a role="button" className="sidebar-link has-sub" data-dropdown="authDropdown"><span
                        className="nav-icon"><i className="fa-light fa-user-cog"></i></span> <span
                          className="sidebar-txt">Authentication</span></a>
                      <ul className="sidebar-dropdown-menu" id="authDropdown">
                        <li className="sidebar-dropdown-item"><a href="dashboard-login.html"
                          className="sidebar-link">Login</a></li>
                        <li className="sidebar-dropdown-item"><a href="dashboard-registration.html"
                          className="sidebar-link">Registration</a></li>
                        <li className="sidebar-dropdown-item"><a href="dashboard-reset-password.html"
                          className="sidebar-link">Reset Password</a></li>
                        <li className="sidebar-dropdown-item"><a href="dashboard-update-password.html"
                          className="sidebar-link">Update Password</a></li>
                        <li className="sidebar-dropdown-item"><a href="dashboard-login-status.html"
                          className="sidebar-link">Login Status</a></li>
                      </ul>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <a role="button" className="sidebar-link has-sub" data-dropdown="userDropdown"><span
                        className="nav-icon"><i className="fa-light fa-user"></i></span> <span
                          className="sidebar-txt">User</span></a>
                      <ul className="sidebar-dropdown-menu" id="userDropdown">
                        <li className="sidebar-dropdown-item"><a href="dashboard-view-profile.html"
                          className="sidebar-link">View Profile</a></li>
                        <li className="sidebar-dropdown-item"><a href="dashboard-edit-profile.html"
                          className="sidebar-link">Edit Profile</a></li>
                      </ul>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <a href="/adminuitiliy" className="sidebar-link"><span className="nav-icon"><i
                        className="fa-light fa-layer-group"></i></span> <span
                          className="sidebar-txt">Utility</span></a>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-item">
                  {/* <a role="button" className="sidebar-link-group-title has-sub">Components</a> */}
                  
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
                {/* <AdminHeader /> */}

                <div className="main-content">
                    <div className="dashboard-breadcrumb mb-30">
                        <h2>Dashboard</h2>
                        <div className="input-group dashboard-filter">
                            <input type="text" className="form-control" name="basic" id="dashboardFilter" readonly />
                            <label for="dashboardFilter" className="input-group-text"><i className="fa-light fa-calendar-days"></i></label>
                        </div>
                    </div>
                    <div className="row mb-30">
                        <div className="col-lg-3 col-6 col-xs-12">
                            <div className="dashboard-top-box rounded-bottom panel-bg">
                                <div className="left">
                                    <h3>$34,152</h3>
                                    <p>Shipping fees are not</p>
                                    <a href="#">View net earnings</a>
                                </div>
                                <div className="right">
                                    <span className="text-primary">+16.24%</span>
                                    <div className="part-icon rounded">
                                        <span><i className="fa-light fa-dollar-sign"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-xs-12">
                            <div className="dashboard-top-box rounded-bottom panel-bg">
                                <div className="left">
                                    <h3>36,894</h3>
                                    <p>Orders</p>
                                    <a href="#">Excluding orders in transit</a>
                                </div>
                                <div className="right">
                                    <span className="text-primary">+16.24%</span>
                                    <div className="part-icon rounded">
                                        <span><i className="fa-light fa-bag-shopping"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-xs-12">
                            <div className="dashboard-top-box rounded-bottom panel-bg">
                                <div className="left">
                                    <h3>$34,152</h3>
                                    <p>Customers</p>
                                    <a href="#">See details</a>
                                </div>
                                <div className="right">
                                    <span className="text-primary">+16.24%</span>
                                    <div className="part-icon rounded">
                                        <span><i className="fa-light fa-user"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 col-xs-12">
                            <div className="dashboard-top-box rounded-bottom panel-bg">
                                <div className="left">
                                    <h3>$724,152</h3>
                                    <p>My Balance</p>
                                    <a href="#">Withdraw</a>
                                </div>
                                <div className="right">
                                    <span className="text-primary">+16.24%</span>
                                    <div className="part-icon rounded">
                                        <span><i className="fa-light fa-credit-card"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-8">
                            <div className="panel chart-panel-1">
                                <div className="panel-header">
                                    <h5>Sales Analytics</h5>
                                    <div className="btn-box">
                                        <button className="btn btn-sm btn-outline-primary">Week</button>
                                        <button className="btn btn-sm btn-outline-primary">Month</button>
                                        <button className="btn btn-sm btn-outline-primary">Year</button>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div id="saleAnalytics" className="chart-dark"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <div className="panel">
                                <div className="panel-header">
                                    <h5>Social Media Visitor</h5>
                                    <div className="btn-box d-sm-block d-none">
                                        <button className="btn btn-sm btn-outline-primary">Week</button>
                                        <button className="btn btn-sm btn-outline-primary">Month</button>
                                        <button className="btn btn-sm btn-outline-primary">Year</button>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-borderless visitor-table">
                                        <thead>
                                            <tr>
                                                <th>Sources</th>
                                                <th>Visitor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="text-fb"><i className="fa-brands fa-facebook-f"></i></span> Facebook</td>
                                                <td>153,100</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-behance"><i className="fa-brands fa-behance"></i></span> Behance</td>
                                                <td>234,200</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-comb"><i className="fa-brands fa-y-combinator"></i></span> Combinator</td>
                                                <td>326,012</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-insta"><i className="fa-brands fa-instagram"></i></span> Instagram</td>
                                                <td>124,420</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-dribble"><i className="fa-brands fa-dribbble"></i></span> Dribble</td>
                                                <td>554,220</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-pinterest"><i className="fa-brands fa-pinterest-p"></i></span> Pinterest</td>
                                                <td>134,800</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-linkedin"><i className="fa-brands fa-linkedin-in"></i></span> Linkedin</td>
                                                <td>254,812</td>
                                            </tr>
                                            <tr>
                                                <td><span className="text-twitter"><i className="fa-brands fa-twitter"></i></span> Twitter</td>
                                                <td>124,250</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-md-6">
                            <div className="panel">
                                <div className="panel-header">
                                    <h5>New Customers</h5>
                                    <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-borderless new-customer-table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="new-customer">
                                                        <div className="part-img">
                                                            <img src="dashboad/assets/images/avatar.png" alt="Image" />
                                                        </div>
                                                        <div className="part-txt">
                                                            <p className="customer-name">Iftikar Ammed</p>
                                                            <span>@iftikarahmed</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2 Orders</td>
                                                <td>$179</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="new-customer">
                                                        <div className="part-img">
                                                            <img src="dashboad/assets/images/avatar-2.png" alt="Image" />
                                                        </div>
                                                        <div className="part-txt">
                                                            <p className="customer-name">Sadab Khan</p>
                                                            <span>@sadabkhan</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2 Orders</td>
                                                <td>$179</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="new-customer">
                                                        <div className="part-img">
                                                            <img src="dashboad/assets/images/avatar-3.png" alt="Image" />
                                                        </div>
                                                        <div className="part-txt">
                                                            <p className="customer-name">Hoyder Ali</p>
                                                            <span>@hoyderali</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2 Orders</td>
                                                <td>$179</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="new-customer">
                                                        <div className="part-img">
                                                            <img src="dashboad/assets/images/avatar-4.png" alt="Image" />
                                                        </div>
                                                        <div className="part-txt">
                                                            <p className="customer-name">Hardik Ali</p>
                                                            <span>@hardikali</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2 Orders</td>
                                                <td>$179</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="new-customer">
                                                        <div className="part-img">
                                                            <img src="dashboad/assets/images/avatar-5.png" alt="Image" />
                                                        </div>
                                                        <div className="part-txt">
                                                            <p className="customer-name">Alaysa Haly</p>
                                                            <span>@alaysahaly</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2 Orders</td>
                                                <td>$179</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="new-customer">
                                                        <div className="part-img">
                                                            <img src="dashboad/assets/images/avatar-6.png" alt="Image" />
                                                        </div>
                                                        <div className="part-txt">
                                                            <p className="customer-name">Natalush Khan</p>
                                                            <span>@natalushkhan</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>2 Orders</td>
                                                <td>$179</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8">
                            <div className="panel">
                                <div className="panel-header">
                                    <h5>Recent Orders</h5>
                                    <div id="tableSearch"></div>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-dashed recent-order-table" id="myTable">
                                        <thead>
                                            <tr>
                                                <th>Order ID</th>
                                                <th>Customer</th>
                                                <th>Order Date</th>
                                                <th>Payment Method</th>
                                                <th>Delivery Date</th>
                                                <th>Total Amount</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>855212</td>
                                                <td>Soward</td>
                                                <td>28/10/22</td>
                                                <td>Cash</td>
                                                <td>02/11/22</td>
                                                <td>$05.22</td>
                                                <td><span className="badge bg-success">Paid</span></td>
                                                <td>
                                                    <div className="btn-box">
                                                        <button><i className="fa-light fa-eye"></i></button>
                                                        <button><i className="fa-light fa-pen"></i></button>
                                                        <button><i className="fa-light fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>855213</td>
                                                <td>Kian</td>
                                                <td>29/10/22</td>
                                                <td>Card</td>
                                                <td>03/11/22</td>
                                                <td>$17.00</td>
                                                <td><span className="badge bg-primary">Delivered</span></td>
                                                <td>
                                                    <div className="btn-box">
                                                        <button><i className="fa-light fa-eye"></i></button>
                                                        <button><i className="fa-light fa-pen"></i></button>
                                                        <button><i className="fa-light fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>855214</td>
                                                <td>Jennifer</td>
                                                <td>29/10/22</td>
                                                <td>Card</td>
                                                <td>03/11/22</td>
                                                <td>$15.22</td>
                                                <td><span className="badge bg-info">Pending</span></td>
                                                <td>
                                                    <div className="btn-box">
                                                        <button><i className="fa-light fa-eye"></i></button>
                                                        <button><i className="fa-light fa-pen"></i></button>
                                                        <button><i className="fa-light fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>855215</td>
                                                <td>Benjamin</td>
                                                <td>30/10/22</td>
                                                <td>Cash</td>
                                                <td>03/11/22</td>
                                                <td>$12.15</td>
                                                <td><span className="badge bg-secondary">Unpaid</span></td>
                                                <td>
                                                    <div className="btn-box">
                                                        <button><i className="fa-light fa-eye"></i></button>
                                                        <button><i className="fa-light fa-pen"></i></button>
                                                        <button><i className="fa-light fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>855216</td>
                                                <td>Anna</td>
                                                <td>31/10/22</td>
                                                <td>Cheque</td>
                                                <td>04/11/22</td>
                                                <td>$05.35</td>
                                                <td><span className="badge bg-danger">Canceled</span></td>
                                                <td>
                                                    <div className="btn-box">
                                                        <button><i className="fa-light fa-eye"></i></button>
                                                        <button><i className="fa-light fa-pen"></i></button>
                                                        <button><i className="fa-light fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>855217</td>
                                                <td>Bradley</td>
                                                <td>01/11/22</td>
                                                <td>Cash</td>
                                                <td>05/11/22</td>
                                                <td>$25.28</td>
                                                <td><span className="badge bg-info">Pending</span></td>
                                                <td>
                                                    <div className="btn-box">
                                                        <button><i className="fa-light fa-eye"></i></button>
                                                        <button><i className="fa-light fa-pen"></i></button>
                                                        <button><i className="fa-light fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>855218</td>
                                                <td>Parkinson</td>
                                                <td>03/11/22</td>
                                                <td>Cheque</td>
                                                <td>06/11/22</td>
                                                <td>$32.32</td>
                                                <td><span className="badge bg-info">Pending</span></td>
                                                <td>
                                                    <div className="btn-box">
                                                        <button><i className="fa-light fa-eye"></i></button>
                                                        <button><i className="fa-light fa-pen"></i></button>
                                                        <button><i className="fa-light fa-trash"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="table-bottom-control"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- footer start --> */}
                    <AdminFooter/>
                    {/* <!-- footer end --> */}
                </div>

            </body>
        </div>
    )
}

export default AdminDashboard
