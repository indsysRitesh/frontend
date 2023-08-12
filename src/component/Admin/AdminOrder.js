import { useState,useEffect } from 'react'
import axios from 'axios'


import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'

const AdminOrder = () => {
  const [Order, SetTableOrder] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:9898/category/getall")
          .then(response => response.data)
          .then(res => {
              console.log(res)
              SetTableOrder(res)
          })
  }, [])



  const [rowsToShow, setRowsToShow] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleRowsToShowChange = (e) => {
    setRowsToShow(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing the number of rows
  };

  const totalPages = Math.ceil(Order.length / rowsToShow);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsToShow;
  const endIndex = startIndex + rowsToShow;
  const slicedOrder = Order.slice(startIndex, endIndex);

  return (
    <div>
      <div id='dashboad'>

        <body className="body-padding body-p-top light-theme">

          <AdminHeader />

          {/* <!-- main content start --> */}
          <div className="main-content">
            <div className="row g-4">
              <div className="col-12">
                <div className="panel">
                  <div className="panel-header">
                    <h5>All Order</h5>
                    <div className="btn-box d-flex gap-2">
                      <div id="tableSearch"></div>
                      <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                      <div className="digi-dropdown dropdown">
                        <button className="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="fa-regular fa-ellipsis-vertical"></i></button>
                        <ul className="digi-dropdown-menu dropdown-menu">
                          <li className="dropdown-title">Show Table Title</li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showOrderId" checked />
                              <label className="form-check-label" for="showOrderId">
                                Order ID
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showCustomer" checked />
                              <label className="form-check-label" for="showCustomer">
                                Customer
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showStatus" checked />
                              <label className="form-check-label" for="showStatus">
                                Status
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showProduct" checked />
                              <label className="form-check-label" for="showProduct">
                                Product
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showPrice" checked />
                              <label className="form-check-label" for="showPrice">
                                Price
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showPaymentMethod" checked />
                              <label className="form-check-label" for="showPaymentMethod">
                                Payment Method
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showDeliveryStatus" checked />
                              <label className="form-check-label" for="showDeliveryStatus">
                                Delivery Status
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showOrderDate" checked />
                              <label className="form-check-label" for="showOrderDate">
                                Order Date
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="showAction" checked />
                              <label className="form-check-label" for="showAction">
                                Action
                              </label>
                            </div>
                          </li>
                          <li className="dropdown-title pb-1">Showing</li>
                          <li>
                            <div className="input-group">
                              <input type="number" className="form-control form-control-sm w-50" value="10" />
                              <button className="btn btn-sm btn-primary w-50">Apply</button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <div className="product-table-quantity d-flex justify-content-between align-items-center mb-20">
                      <ul className="mb-0">
                        <li className="text-white">All (23)</li>
                        <li>Pending (19)</li>
                        <li>Draft (05)</li>
                        <li>Trush (05)</li>
                      </ul>
                      <div className="btn-box d-lg-flex d-none gap-2">
                        <button className="btn btn-sm btn-icon btn-outline-primary" title="Download Excel" id="downloadExcel"><i className="fa-light fa-file-spreadsheet"></i></button>
                        <button className="btn btn-sm btn-icon btn-outline-primary" title="Download PDF" id="downloadPdf"><i className="fa-light fa-file-pdf"></i></button>
                      </div>
                    
                    </div>
                    <div className="table-filter-option">
                      <div className="row g-3">
                        <div className="col-xl-10 col-9 col-xs-12">
                          <div className="row g-3">
                            <div className="col">
                              <form className="row g-2">
                                <div className="col">
                                  <select className="form-control form-control-sm">
                                    <option value="0">Bulk action</option>
                                    <option value="1">Move to trash</option>
                                    <option value="2">Change Status to processing</option>
                                    <option value="3">Change Status to on-hold</option>
                                    <option value="4">Change Status to completed</option>
                                    <option value="5">Change Status to cancelled</option>
                                  </select>
                                </div>
                                <div className="col">
                                  <button className="btn btn-sm btn-primary w-100">Apply</button>
                                </div>
                              </form>
                            </div>
                            <div className="col">
                              <select className="form-control form-control-sm">
                                <option value="0">All Orders</option>
                                <option value="1">Pending</option>
                                <option value="2">Delivered</option>
                                <option value="3">Cancel</option>
                                <option value="4">Return</option>
                              </select>
                            </div>
                            <div className="col">
                              <input type="text" className="form-control form-control-sm" name="basic" id="orderTableFilter" readonly />
                            </div>
                            <div className="col">
                              <button className="btn btn-sm btn-primary"><i className="fa-light fa-filter"></i> Filter</button>
                            </div>
                            <div className="col">
                              <div className="digi-dropdown dropdown">
                                <button className="btn btn-sm btn-icon btn-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="fa-regular fa-plus"></i></button>
                                <ul className="digi-dropdown-menu dropdown-menu">
                                  <li className="dropdown-title">Filter Options</li>
                                  <li>
                                    <div className="form-check">
                                      <input className="form-check-input" type="checkbox" id="filterDeliveryStatus" checked />
                                      <label className="form-check-label" for="filterDeliveryStatus">
                                        Delivery Status
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div className="form-check">
                                      <input className="form-check-input" type="checkbox" id="filterDateRange" checked />
                                      <label className="form-check-label" for="filterDateRange">
                                        Date Range
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2 col-3 col-xs-12 d-flex justify-content-end">
                        <div >
                                                            <label >Show :</label>
                                                            <select value={rowsToShow} onChange={handleRowsToShowChange}className="orm-control form-control-sm ">
                                                            <option value={10}>10</option>
                                                            <option value={20}>20</option>
                                                            <option value={25}>25</option>
                                                            </select>
                                                        </div>
                                                </div>
                        </div>
                      </div>
                    </div>
                    <table className="table table-dashed table-hover digi-dataTable all-product-table table-striped" id="allProductTable">
                      <thead>
                        <tr>
                          <th className="no-sort">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="markAllProduct" />
                            </div>
                          </th>
                          <th>Order ID</th>
                          <th>Customer</th>
                          <th>Status</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Payment Method</th>
                          <th>Delivery Status</th>
                          <th>Order Date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {slicedOrder.map((display, ind) => (
                      <tbody>

                        <tr>
                          <td>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </td>
                          <td><a href="dashboard-invoices.html">#22120101</a></td>
                          <td>Shaikh Abu Dardah</td>
                          <td><span className="text-danger">Pending</span></td>
                          <td>12</td>
                          <td>$256</td>
                          <td>Cash on</td>
                          <td><span className="badge bg-success">Delivered</span></td>
                          <td>12/24/2023 - 01:05 PM</td>
                          <td>
                            <div className="btn-box">
                              <button><i className="fa-light fa-eye"></i></button>
                              <button><i className="fa-light fa-pen"></i></button>
                              <button><i className="fa-light fa-trash"></i></button>
                            </div>
                          </td>
                        </tr>
                        {/* <tr>
                          <td>
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </td>
                          <td><a href="dashboard-invoices.html">#22120102</a></td>
                          <td>Shaikh Abu Dardah</td>
                          <td><span className="text-warning">Hold</span></td>
                          <td>15</td>
                          <td>$625</td>
                          <td>Paypal</td>
                          <td><span className="badge bg-danger">Canceled</span></td>
                          <td>12/24/2023 - 01:05 PM</td>
                          <td>
                            <div className="btn-box">
                              <button><i className="fa-light fa-eye"></i></button>
                              <button><i className="fa-light fa-pen"></i></button>
                              <button><i className="fa-light fa-trash"></i></button>
                            </div>
                          </td>
                        </tr>
                 */}
                      </tbody>
                      ))}
                    </table>
                    <div className='row'>
                                                    <div className='col-xl-9'></div>
                                                    <div className='col-xl-1'>
                                                        <button onClick={() => handlePageChange(currentPage - 1)}
                                                            disabled={currentPage === 1} className='btn btn-sm btn-primary w-100 '>-</button>
                                                    </div>
                                                    <div className='col-xl-1'>
                                                        {currentPage} of {totalPages}
                                                    </div>
                                                    <div className='col-xl-1'>
                                                        <button onClick={() => handlePageChange(currentPage + 1)}
                                                            disabled={currentPage === totalPages} className='btn btn-sm btn-primary w-100'>+</button>

                                                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- footer start --> */}
            <AdminFooter/>
            {/* <!-- footer end --> */}
          </div>
          {/* <!-- main content end --> */}

        </body>
      </div>
    </div>
  )
}

export default AdminOrder
