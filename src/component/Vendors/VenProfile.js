
import VenFooter from './VenFooter'
import VenHeader from './VenHeader'
import { useState, useEffect } from 'react'
import axios from 'axios'
const VenProfile = () => {
    
    const [shopData, setShopData] = useState([]);
    const [bankData, setBankData] = useState([]);

   
    useEffect(() => {
        axios.get("http://localhost:9898/shop/getall")
            .then(response => response.data)
            .then(res => {
                console.log(res)
                setShopData(res)
            })
            .catch(error => console.error('Shop API error:', error));

        axios.get("http://localhost:9898/bank/getall")
            .then(response => response.data)
            .then(res => {
                console.log(res)
                setBankData(res)
            })
            .catch(error => console.error('Bank API error:', error));
    }, [])
    return (
        <div> <div>
            <div>
                <div id='dashboad'>

                    <body className="body-padding body-p-top light-theme">

                        <VenHeader />



                        {/* <!-- main content start --> */}
                        <div class="main-content">
                            <div class="dashboard-breadcrumb mb-30">
                                <h2>View Profile</h2>
                            </div>
                           
                            <div class="row g-4">
                                <div class="col-md-4">
                                    <div class="panel">
                                        <div class="panel-body">
                                            <div class="profile-sidebar">

                                                <div class="d-flex justify-content-between align-items-center">
                                                    <h5 class="profile-sidebar-title">kriti</h5>
                                                    <div class="dropdown">
                                                        <button class="btn btn-sm btn-icon btn-outline-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i class="fa-solid fa-ellipsis"></i>
                                                        </button>
                                                        <ul class="dropdown-menu dropdown-menu-sm dropdown-menu-sm-end">
                                                            <li><a class="dropdown-item" href="dashboard-edit-profile.html"><i class="fa-regular fa-pen-to-square"></i> Edit Information</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div class="top">
                                                    <div class="image-wrap">
                                                        <div class="part-img rounded-circle overflow-hidden">
                                                            <img src="/dashboad/assets/images/admin.png" alt="admin" />
                                                        </div>
                                                        <button class="image-change"><i class="fa-light fa-camera"></i></button>
                                                    </div>
                                                    <div class="part-txt">
                                                        <h4 class="admin-name">Mitchell C. Shay</h4>
                                                        <span class="admin-role">Graphic Designer</span>
                                                        <div class="admin-social">
                                                            <a href="/#"><i class="fa-brands fa-facebook-f"></i></a>
                                                            <a href="/#"><i class="fa-brands fa-twitter"></i></a>
                                                            <a href="/#"><i class="fa-brands fa-google"></i></a>
                                                            <a href="/#"><i class="fa-brands fa-instagram"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="bottom">
                                                    <h6 class="profile-sidebar-subtitle">Communication Info</h6>
                                                    <ul>
                                                        <li><span>Full Name:</span>Anna Adame</li>
                                                        <li><span>Mobile:</span>+(1) 987 65433</li>
                                                        <li><span>Mail:</span>example@mail.com</li>
                                                        <li><span>Address:</span>California, United States</li>
                                                        <li><span>Joining Date:</span>24 Nov 2022</li>
                                                    </ul>
                                                    <h6 class="profile-sidebar-subtitle">About Me</h6>
                                                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row mb-30">
                                        <div class="col-lg-4">
                                            <div class="dashboard-top-box rounded-bottom panel-bg">
                                                <div class="left">
                                                    <h3>$34,152</h3>
                                                    <p>Shipping fees are not</p>
                                                    <a href="/#">View net earnings</a>
                                                </div>
                                                <div class="right">
                                                    <span class="text-primary">+16.24%</span>
                                                    <div class="part-icon rounded">
                                                        <span><i class="fa-light fa-dollar-sign"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-6 col-xs-12">
                                            <div class="dashboard-top-box rounded-bottom panel-bg">
                                                <div class="left">
                                                    <h3>36,894</h3>
                                                    <p>Orders</p>
                                                    <a href="/#">Excluding orders in transit</a>
                                                </div>
                                                <div class="right">
                                                    <span class="text-primary">+16.24%</span>
                                                    <div class="part-icon rounded">
                                                        <span><i class="fa-light fa-bag-shopping"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-6 col-xs-12">
                                            <div class="dashboard-top-box rounded-bottom panel-bg">
                                                <div class="left">
                                                    <h3>$34,152</h3>
                                                    <p>Customers</p>
                                                    <a href="/#">See details</a>
                                                </div>
                                                <div class="right">
                                                    <span class="text-primary">+16.24%</span>
                                                    <div class="part-icon rounded">
                                                        <span><i class="fa-light fa-user"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <table className="table table-dashed table-hover digi-dataTable all-product-table table-striped" id="allProductTable">
                                            <thead>
                                                <tr>
                                                    <th className="no-sort">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="markAllProduct" />
                                                        </div>
                                                    </th>
                                                    <th>Shop Name</th>
                                                    <th>Mobile Number</th>
                                                    <th>Bank Name</th>
                                                    <th>Account Number</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            {shopData.map((shop, index) => (
                                                <tbody>
                                                    <tr key={index}>
                                                        <td>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" />
                                                            </div>
                                                        </td>
                                                       
                                                        <td>{shop.shopName}</td>
                                                        <td>{shop.mobileNumber}</td>
                                                        <td>{bankData.find(bank => bank.id === shop.id)?.bankName}</td>
                                                        <td>{bankData.find(bank => bank.id === shop.id)?.accountNumber}</td>

                                                        <td>
                                                            <div className="btn-box">
                                                                {/* <button onClick={() => handleUpdateProduct(display)}>
                                                            <i className="fa-light fa-pen"></i>
                                                        </button>
                                                        <button onClick={() => handleDeleteProduct(display.id)}>
                                                            <i className="fa-light fa-trash"></i>
                                                        </button> */}
                                                                {/* <button><i className="fa-light fa-pen"></i></button> */}
                                                                {/* <button><i className="fa-light fa-trash"></i></button> */}
                                                            </div>
                                                        </td>

                                                    </tr>

                                                </tbody>
                                            ))}
                                        </table>

                                    </div>
                                </div>
                            </div>





                            {/* <!-- footer start --> */}
                            <VenFooter />
                            {/* <!-- footer end --> */}
                        </div>
                        {/* <!-- main content end --> */}

                    </body>
                </div>
            </div>
        </div></div>
    )
}

export default VenProfile