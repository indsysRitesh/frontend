import { useState,useEffect } from 'react'
import axios from 'axios'

import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'

const AdminContacts = () => {

    const [AllContacts, SetTableContacts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => response.data)
            .then(res => {
                console.log(res)
                SetTableContacts(res)
            })
    }, [])




    const [rowsToShow, setRowsToShow] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleRowsToShowChange = (e) => {
      setRowsToShow(parseInt(e.target.value, 10));
      setCurrentPage(1); // Reset to the first page when changing the number of rows
    };
  
    const totalPages = Math.ceil(AllContacts.length / rowsToShow);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const startIndex = (currentPage - 1) * rowsToShow;
    const endIndex = startIndex + rowsToShow;
    const slicedAllContacts = AllContacts.slice(startIndex, endIndex);
  
    return (
        <div>
            <div>
                <div id='dashboad'>

                    <body className="body-padding body-p-top light-theme">

                        <AdminHeader />
   {/* <!-- main content start --> */}
   <div className="main-content">
                        <div className="row">
                            <div className="col-12">
                                <div className="panel">
                                    <div className="panel-header">
                                        <h5>All Contacts</h5>
                                        <div className="btn-box d-flex gap-2">
                                            <div id="tableSearch"></div>
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <div className="digi-dropdown dropdown">
                                                <button className="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                                <ul className="digi-dropdown-menu dropdown-menu">
                                                    <li className="dropdown-title">Show Table Title</li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showName" checked />
                                                            <label className="form-check-label" for="showName">
                                                                Name
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showUsername" checked />
                                                            <label className="form-check-label" for="showUsername">
                                                                Username
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showLastActive" checked />
                                                            <label className="form-check-label" for="showLastActive">
                                                                Last Active
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showDateRegistered" checked />
                                                            <label className="form-check-label" for="showDateRegistered">
                                                                Date Registered
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showEmail" checked />
                                                            <label className="form-check-label" for="showEmail">
                                                                Email
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showOrders" checked />
                                                            <label className="form-check-label" for="showOrders">
                                                                Orders
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showTotalSpend" checked />
                                                            <label className="form-check-label" for="showTotalSpend">
                                                                Total Spend
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showAOV" checked />
                                                            <label className="form-check-label" for="showAOV">
                                                                AOV
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showCountryRegion" checked />
                                                            <label className="form-check-label" for="showCountryRegion">
                                                                Country/Region
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showCity" checked />
                                                            <label className="form-check-label" for="showCity">
                                                                City
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showRegion" checked />
                                                            <label className="form-check-label" for="showRegion">
                                                                Region
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showPostalCode" checked />
                                                            <label className="form-check-label" for="showPostalCode">
                                                                Postal Code
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
                                            <div className="btn-box d-md-flex d-none gap-2">
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
                                                                    <select className="form-control form-control-sm" data-placeholder="Bulk action">
                                                                        <option value="">Bulk action</option>
                                                                        <option value="0">Move to trash</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col">
                                                                    <button className="btn btn-sm btn-primary">Apply</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="col">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">Active</option>
                                                                <option value="1">Pending</option>
                                                                <option value="2">Inactive</option>
                                                                <option value="3">Hold</option>
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
                                                                            <input className="form-check-input" type="checkbox" id="filterStatus" checked />
                                                                            <label className="form-check-label" for="filterStatus">
                                                                                Status
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" id="filterDate" checked />
                                                                            <label className="form-check-label" for="filterDate">
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
                                        <table className="table table-dashed table-hover digi-dataTable all-product-table table-striped" id="allProductTable">
                                            <thead>
                                                <tr>
                                                    <th className="no-sort">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="markAllProduct" />
                                                        </div>
                                                    </th>
                                                    <th>Name</th>
                                                    <th>Username</th>
                                                    <th>Last Active</th>
                                                    <th>Date Registered</th>
                                                    <th>Email</th>
                                                    <th>Orders</th>
                                                    <th>Total Spend</th>
                                                    <th>AOV</th>
                                                    <th>Country / Region</th>
                                                    <th>City</th>
                                                    <th>Region</th>
                                                    <th>Postal Code</th>
                                                </tr>
                                            </thead>
                                            {slicedAllContacts.map((display, ind) => (
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td><a href="/#">Shaikh Abu Dardah</a></td>
                                                    <td>admin</td>
                                                    <td>December 27, 2022</td>
                                                    <td>November 23, 2021</td>
                                                    <td><a href="/#">example@info.com</a></td>
                                                    <td>2</td>
                                                    <td>$74.00</td>
                                                    <td>$74.00</td>
                                                    <td>BD</td>
                                                    <td>Dhaka</td>
                                                    <td>CA</td>
                                                    <td>12563</td>
                                                </tr>
                                         
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
                        </div>

                        {/* <!-- footer start --> */}
                        <AdminFooter/>
                        {/* <!-- footer end --> */}
                    </div>
                    {/* <!-- main content end --> */}
                       

                    </body>
                </div>
            </div>
        </div>
    )
}

export default AdminContacts
