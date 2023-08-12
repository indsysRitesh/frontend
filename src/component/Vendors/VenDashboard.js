/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import VenHeader from './VenHeader'
import VenFooter from './VenFooter'



function VenDashboad() {
    return (
        <div id='dashboad'>

            <body className="body-padding body-p-top light-theme">

                <VenHeader />

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
                    <VenFooter/>
                    {/* <!-- footer end --> */}
                </div>

            </body>
        </div>
    )
}

export default VenDashboad

