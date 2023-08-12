/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom';
import VenHeader from './VenHeader'
import VenFooter from './VenFooter'

const VenAllProduct = () => {

    const [AllProduct, SetTableAllProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9898/product/getall")
            .then(response => response.data)
            .then(res => {
                console.log(res)
                SetTableAllProduct(res)
            })
    }, [])

    const navigate = useNavigate();

    const handleUpdateProduct = (product) => {
        console.log("handle Update Product")
        // Navigate to the AddProduct component with the selected product as state
        navigate('/venaddproduct', { state: { productToUpdate: product } });
      };

      const handleDeleteProduct = async (productId) => {
        // Show a confirm dialog to the user
        const userConfirmed = window.confirm('Are you sure you want to delete this product?');
        
        if (!userConfirmed) {
          // If the user cancels the deletion, return without doing anything
          return;
        }
      
        const apiUrl = `http://localhost:9898/product/delete/${productId}`;
        try {
          await axios.delete(apiUrl);
          // Remove the deleted product from the state
          SetTableAllProduct((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
          );
          console.log('Product deleted successfully');
        } catch (error) {
          console.error('API error:', error.message);
        }
      };
    const [rowsToShow, setRowsToShow] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
  
    const handleRowsToShowChange = (e) => {
      setRowsToShow(parseInt(e.target.value, 10));
      setCurrentPage(1); // Reset to the first page when changing the number of rows
    };
  
    const totalPages = Math.ceil(AllProduct.length / rowsToShow);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const startIndex = (currentPage - 1) * rowsToShow;
    const endIndex = startIndex + rowsToShow;
    const slicedAllProduct = AllProduct.slice(startIndex, endIndex);
  
  
    return (
        <div>
            <div id='dashboad'>

                <body className="body-padding body-p-top light-theme">

                    <VenHeader />

                    {/* <!-- main content start --> */}
                    <div className="main-content">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="panel">
                                    <div className="panel-header">
                                        <h5>All Products</h5>
                                        <div className="btn-box d-flex flex-wrap gap-2">
                                            <div id="tableSearch"></div>
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <div className="digi-dropdown dropdown">
                                                <button className="btn btn-sm btn-icon btn-outline-primary" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                                <ul className="digi-dropdown-menu dropdown-menu">
                                                    <li className="dropdown-title">Show Table Title</li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showProduct" checked />
                                                            <label className="form-check-label" for="showProduct">
                                                                Products
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showPublished" checked />
                                                            <label className="form-check-label" for="showPublished">
                                                                Published
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showStock" checked />
                                                            <label className="form-check-label" for="showStock">
                                                                Stock
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
                                                            <input className="form-check-input" type="checkbox" id="showSales" checked />
                                                            <label className="form-check-label" for="showSales">
                                                                Sales
                                                            </label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="showRating" checked />
                                                            <label className="form-check-label" for="showRating">
                                                                Rating
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
                                            <div className="btn-box">
                                                <a href="/venaddproduct" className="btn btn-sm btn-primary"><i className="fa-light fa-plus"></i> Add New</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="product-table-quantity">
                                            <ul>
                                                <li className="text-white">All (23)</li>
                                                <li>Published (19)</li>
                                                <li>Draft (05)</li>
                                                <li>Trush (05)</li>
                                            </ul>
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
                                                                        <option value="0">Edit</option>
                                                                        <option value="1">Move To Trash</option>
                                                                    </select>
                                                                </div>
                                                                <div className="col">
                                                                    <button className="btn btn-sm btn-primary w-100">Apply</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <div className="col">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">All Category</option>
                                                                <option value="1">Cloth</option>
                                                                <option value="2">Fashion</option>
                                                                <option value="3">Bag</option>
                                                                <option value="4">Food</option>
                                                                <option value="5">Medicine</option>
                                                                <option value="6">Watch</option>
                                                                <option value="7">Smart Phone</option>
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">All Product Type</option>
                                                                <option value="1">Downloadable</option>
                                                                <option value="2">Virtual</option>
                                                            </select>
                                                        </div>
                                                        <div className="col">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">All Product Stock</option>
                                                                <option value="1">In stock</option>
                                                                <option value="2">Out of stock</option>
                                                                <option value="3">On backorder</option>
                                                            </select>
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
                                                                            <input className="form-check-input" type="checkbox" id="filterCategory" checked />
                                                                            <label className="form-check-label" for="filterCategory">
                                                                                Category
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" id="filterProductType" checked />
                                                                            <label className="form-check-label" for="filterProductType">
                                                                                Product Type
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="checkbox" id="filterStock" checked />
                                                                            <label className="form-check-label" for="filterStock">
                                                                                Stock
                                                                            </label>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-2 col-3 col-xs-12 d-flex justify-content-end ">
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
                                                    <th>photo</th>
                                                    <th>name</th>
                                                    <th>description</th>
                                                    <th>price</th>
                                                    <th>quntity_avlaible</th>
                                                    <th>shop_details_id</th>
                                                    <th>discount</th>
                                                    <th>category_id</th>
                                                    <th>created_date</th>
                                                    <th>update_date</th>
                                                    <th>order_items_id</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            {slicedAllProduct.map((display, ind) => (
                                            <tbody>
                                                <tr key={display.id}>
                                                    <td>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-product-card">
                                                            <div className="part-img">
                                                                <img src={display.image} alt="Image" />
                                                            </div>
                                                            {/* <div className="part-txt">
                                                                <span className="product-name">{display.name}</span>
                                                                <span className="product-category">{display.name}</span>
                                                            </div> */}
                                                        </div>
                                                    </td>
                                                    <td>{display.name}</td>
                                                    <td>{display.description}</td>
                                                    <td>{display.price}</td>
                                                    <td>{display.quntity_avlaible}</td>
                                                    <td>{display.shop_details_id}</td>
                                                    <td>{display.discount}</td>
                                                    <td>{display.category_id}</td>
                                                    <td>{display.created_date}</td>
                                                    <td>{display.update_date}</td>
                                                    <td>{display.order_items_id}</td>
                                                    {/* <td>
                                                        <div className="rating">
                                                            <div className="star">
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star starred"></i>
                                                                <i className="fa-sharp fa-solid fa-star"></i>
                                                            </div>
                                                            <div className="rating-amount">(42)</div>
                                                        </div>
                                                    </td> */}
                                                   
                                                    <td>
                                                        <div className="btn-box">
                                                        <button onClick={() => handleUpdateProduct(display)}>
                                                            <i className="fa-light fa-pen"></i>
                                                        </button>
                                                        <button onClick={() => handleDeleteProduct(display.id)}>
                                                            <i className="fa-light fa-trash"></i>
                                                        </button>
                                                            {/* <button><i className="fa-light fa-pen"></i></button> */}
                                                            {/* <button><i className="fa-light fa-trash"></i></button> */}
                                                        </div>
                                                    </td>
                                                  
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
                        <VenFooter/>
                        {/* <!-- footer end --> */}
                    </div>
                    {/* <!-- main content end --> */}


                </body>
            </div>
        </div>
    )
}

export default VenAllProduct
