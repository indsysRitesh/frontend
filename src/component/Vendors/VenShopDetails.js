


/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react'
import axios from 'axios'



import VenFooter from './VenFooter'
import VenHeader from './VenHeader'

const VenShopDetails = () => {

    const [ShopDetails, setShopDetails] = useState({
        shopName: '',
        shopEmail: '',
        mobileNumber: '',
        gstNumber: '',
        shopAddress: '',
        // photo: '',
       
    });

    const {
        shopName,
        shopEmail,
        mobileNumber,
        gstNumber,
        shopAddress,
        // photo,

    } = ShopDetails;
    
      const onInputChange = (e) => {
        const { name, value } = e.target;
        setShopDetails({ ...ShopDetails, [name]: value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
    
        // Set the current date for update_date when updating
        if (ShopDetails.id) {
          setShopDetails({ ...ShopDetails, update_date: new Date().toISOString() });
        }
    
        if (ShopDetails.id) {
          // Editing an existing ShopDetails
          console.log('ShopDetails updated');
          const apiUrl = `http://localhost:9898/shop/update`;
          try {
            const response = await axios.put(apiUrl, ShopDetails);
            console.log('ShopDetails updated successfully:', response.data);
            window.alert('ShopDetails updated successfully')
          } catch (error) {
            console.error('API error:', error);
          }
        } else {
          // Adding a new ShopDetails
          const apiUrl = 'http://localhost:9898/shop/add';
          try {
            const response = await axios.post(apiUrl, ShopDetails);
            window.alert('ShopDetails added successfully')
            console.log('ShopDetails added successfully:', response.data);
            // Clear the form fields after successful addition
            setShopDetails({   shopName: '',
            shopEmail: '',
            mobileNumber: '',
            gstNumber: '',
            shopAddress: '', });
          } catch (error) {
            console.error('API error:', error);
          }
        }
      };
    
    //   const [TableShopDetails, setTableShopDetails] = useState([]);
    
    //   useEffect(() => {
    //     axios.get('http://localhost:9898/shop/getall')
    //       .then((response) => response.data)
    //       .then((res) => {
    //         console.log(res);
    //         setTableShopDetails(res);
    //       });
    //   }, []);
    
    //   const deleteShopDetails = async (ShopDetailsId) => {
    //     const confirmed = window.confirm('Are you sure you want to delete this ShopDetails?');
    //     if (!confirmed) {
    //       return; // If the user cancels the deletion, exit the function
    //     }
    //     const apiUrl = `http://localhost:9898/shop/delete/${ShopDetailsId}`;
    //     try {
    //       const response = await axios.delete(apiUrl);
    //       console.log('ShopDetails deleted successfully:', response.data);
    //       // After successful deletion, update the TableShopDetails state by removing the deleted ShopDetails
    //       setTableShopDetails((prevState) => prevState.filter((ShopDetails) => ShopDetails.id !== ShopDetailsId));
    //     } catch (error) {
    //       console.error('API error:', error);
    //     }
    //   };
    
    //   // Define the updateShopDetails function to handle the edit button click
    //   const updateShopDetails = async (ShopDetailsId) => {
    //     // Fetch the ShopDetails data by ID from the TableShopDetails state
    //     const selectedShopDetails = TableShopDetails.find((ShopDetails) => ShopDetails.id === ShopDetailsId);
    //     if (selectedShopDetails) {
    //       // Set the selected ShopDetails data in the ShopDetails state for editing
    //       setShopDetails(selectedShopDetails);
    //     }
    //   };


    // const [rowsToShow, setRowsToShow] = useState(10);
    // const [currentPage, setCurrentPage] = useState(1);

    // const handleRowsToShowChange = (e) => {
    //     setRowsToShow(parseInt(e.target.value, 10));
    //     setCurrentPage(1); // Reset to the first page when changing the number of rows
    // };

    // const totalPages = Math.ceil(TableShopDetails.length / rowsToShow);

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // };

    // const startIndex = (currentPage - 1) * rowsToShow;
    // const endIndex = startIndex + rowsToShow;
    // const slicedTableShopDetails = TableShopDetails.slice(startIndex, endIndex);


    return (
        <div>
            <div>
                <div id='dashboad'>

                    <body className="body-padding body-p-top light-theme">

                        <VenHeader />


                        {/* <!-- main content start --> */}
                        <div className="main-content">
                            
                            <div className="row ">
                            <div className="col-xxl-3 col-md-3"></div>
                                <div className="col-xxl-6 col-md-6">
                                <div className="dashboard-breadcrumb mb-30">
                                <h2>Shop Details</h2>
                            </div>
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>Add New Shop Details</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row " > 
                                                <form onSubmit={onSubmit} >
                                                    <div className="col-12">
                                                        <label className="form-label mt-3">ShopDetails Name</label>
                                                        <input type="text"
                                                            name='shopName'
                                                            className="form-control form-control-sm"
                                                          
                                                            required
                                                            onChange={onInputChange}
                                                            value={shopName} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label mt-3">shop Email</label>
                                                        <input type="email"
                                                            name='shopEmail'
                                                            className="form-control form-control-sm"
                                                        
                                                            required
                                                            onChange={onInputChange}
                                                            value={shopEmail} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label mt-3">Gst Number</label>
                                                        <input type="text"
                                                            name='gstNumber'
                                                            className="form-control form-control-sm"
                                                            // pattern=' ^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$'
                                                            required
                                                            onChange={onInputChange}
                                                            value={gstNumber} />
                                                    </div>
                                                    <div className="col-12">
                                                        <label className="form-label mt-3">Mobile Number</label>
                                                        <input type="text"
                                                            name='mobileNumber'
                                                            className="form-control form-control-sm"
                                                            pattern="[0-9]{5}[0-9]{5}"
                                                            required
                                                            onChange={onInputChange}
                                                            value={mobileNumber} />
                                                    </div>
                                                    {/* <div className="col-12">
                                                        <label className="form-label mt-3">photo</label>
                                                        <input type="file"
                                                            name='photo'
                                                            className="form-control form-control-sm"
                                                           
                                                            required
                                                            onChange={onInputChange}
                                                            value={photo} />
                                                    </div> */}
                                                    <div className="col-12">
                                                        <label className="form-label mt-3">Shop Address</label>
                                                        <textarea
                                                            rows="5"
                                                            className="form-control form-control-sm"
                                                            name="shopAddress"
                                                            value={shopAddress}
                                                            required
                                                            onChange={onInputChange}></textarea>
                                                    </div>
                                                    
                                                    <div className="col-12 d-flex justify-content-end">
                                                        <div className="btn-box mt-4">
                                                            <button type='submit' className="btn btn-sm btn-primary">Save ShopDetails</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-3 col-md-3"></div>
                                {/* <div className="col-xxl-8 col-md-7">
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>All Categories</h5>
                                            <div className="btn-box d-flex gap-2">
                                                <div id="tableSearch"></div>
                                                <button className="btn btn-sm btn-icon btn-outline-primary">
                                                    <i className="fa-light fa-arrows-rotate"></i></button>
                                                <div className="digi-dropdown dropdown ">
                                                    <button className="btn btn-sm btn-icon btn-outline-primary"
                                                        data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                                        <i className="fa-regular fa-ellipsis-vertical"></i></button>
                                                    <ul className="digi-dropdown-menu dropdown-menu ">
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
                                                                <input className="form-check-input" type="checkbox" id="showDescription" checked />
                                                                <label className="form-check-label" for="showDescription">
                                                                    Description
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="showCreateDate" checked />
                                                                <label className="form-check-label" for="showCreateDate">
                                                                    Create Date
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="showUpdateDate" checked />
                                                                <label className="form-check-label" for="showUpdateDate">
                                                                    Update Date
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
                                            <div className="table-filter-option">
                                                <div className="row justify-content-between g-3">
                                                    <div className="col-xxl-4 col-6 col-xs-12">
                                                        <form className="row g-2">
                                                            <div className="col-8">
                                                                <select className="form-control form-control-sm " data-placeholder="Bulk action">
                                                                    <option value="">Bulk action</option>
                                                                    <option value="0">Edit</option>
                                                                    <option value="1">Move To Trash</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-4">
                                                                <button className="btn btn-sm btn-primary w-100">Apply</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="col-xl-2 col-3 col-xs-12 d-flex justify-content-end">
                                                        <div >
                                                            <div >
                                                                <label >Show :</label>
                                                                <select value={rowsToShow} onChange={handleRowsToShowChange} className="orm-control form-control-sm ">
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
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                        <th>Create Date</th>
                                                        <th>Update Date</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                {slicedTableShopDetails.map((display, ind) => (
                                                    <tbody>
                                                        <tr key={display.id}> 
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="table-ShopDetails-card">
                                                                    <div className="part-icon">
                                                                    <span><i className="fa-light fa-vest"></i></span>
                                                                </div>
                                                                    <div className="part-txt">
                                                                        <span className="ShopDetails-name">{display.shopName}</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="table-dscr">{display.shopAddress}</span></td>
                                                            <td>23/12/99</td>
                                                            <td>23/12/99</td>
                                                            <td>
                                                                <div className="btn-box">
                                                                <button onClick={() => updateShopDetails(display.id)}>
                                                                    <i className="fa-light fa-pen-to-square"></i>
                                                                </button>
                                                                <button onClick={() => deleteShopDetails(display.id)}>
                                                                    <i className="fa-light fa-trash"></i>
                                                                </button>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                ))}
                                            </table>

                                            <div>
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
                                </div> */}
                            </div>

                            {/* <!-- footer start --> */}
                            <VenFooter />
                            {/* <!-- footer end --> */}
                        </div>
                        {/* <!-- main content end --> */}

                    </body>
                </div>
            </div>
        </div>
    )
}

export default VenShopDetails

