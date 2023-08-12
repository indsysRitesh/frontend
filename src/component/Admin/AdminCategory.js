/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from 'react'
import axios from 'axios'


import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'

const AdminCategory = () => {


    const [Category, setCategory] = useState({
        title: '',
        description: '',
        created_date: '',
        update_date: '',
      });
    
      // Your other state and useEffect code...
    
      const { title, description} = Category;
    
      const onInputChange = (e) => {
        const { name, value } = e.target;
        setCategory({ ...Category, [name]: value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
    
        // Set the current date for update_date when updating
        if (Category.id) {
          setCategory({ ...Category, update_date: new Date().toISOString() });
        }
    
        if (Category.id) {
          // Editing an existing category
          console.log('Category updated');
          const apiUrl = `http://localhost:9898/category/update`;
          try {
            const response = await axios.put(apiUrl, Category);
            console.log('Category updated successfully:', response.data);
            window.alert('Category updated successfully')
          } catch (error) {
            console.error('API error:', error);
          }
        } else {
          // Adding a new category
          const apiUrl = 'http://localhost:9898/category/add';
          try {
            const response = await axios.post(apiUrl, Category);
            window.alert('Category added successfully')
            console.log('Category added successfully:', response.data);
            // Clear the form fields after successful addition
            setCategory({ title: '', description: '' });
          } catch (error) {
            console.error('API error:', error);
          }
        }
      };
    
      const [TableCategory, setTableCategory] = useState([]);
    
      useEffect(() => {
        axios.get('http://localhost:9898/category/getall')
          .then((response) => response.data)
          .then((res) => {
            console.log(res);
            setTableCategory(res);
          });
      }, []);
    
      const deleteCategory = async (categoryId) => {
        const confirmed = window.confirm('Are you sure you want to delete this category?');
        if (!confirmed) {
          return; // If the user cancels the deletion, exit the function
        }
        const apiUrl = `http://localhost:9898/category/delete/${categoryId}`;
        try {
          const response = await axios.delete(apiUrl);
          console.log('Category deleted successfully:', response.data);
          // After successful deletion, update the TableCategory state by removing the deleted category
          setTableCategory((prevState) => prevState.filter((category) => category.id !== categoryId));
        } catch (error) {
          console.error('API error:', error);
        }
      };
    
      // Define the updateCategory function to handle the edit button click
      const updateCategory = async (categoryId) => {
        // Fetch the category data by ID from the TableCategory state
        const selectedCategory = TableCategory.find((category) => category.id === categoryId);
        if (selectedCategory) {
          // Set the selected category data in the Category state for editing
          setCategory(selectedCategory);
        }
      };


    const [rowsToShow, setRowsToShow] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const handleRowsToShowChange = (e) => {
        setRowsToShow(parseInt(e.target.value, 10));
        setCurrentPage(1); // Reset to the first page when changing the number of rows
    };

    const totalPages = Math.ceil(TableCategory.length / rowsToShow);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * rowsToShow;
    const endIndex = startIndex + rowsToShow;
    const slicedTableCategory = TableCategory.slice(startIndex, endIndex);



    return (
        <div>
            <div>
                <div id='dashboad'>

                    <body className="body-padding body-p-top light-theme">

                        <AdminHeader />


                        {/* <!-- main content start --> */}
                        <div className="main-content">
                            <div className="dashboard-breadcrumb mb-30">
                                <h2>Categories</h2>
                            </div>
                            <div className="row g-4">
                                <div className="col-xxl-4 col-md-5">
                                    <div className="panel">
                                        <div className="panel-header">
                                            <h5>Add New Category</h5>
                                        </div>
                                        <div className="panel-body">
                                            <div className="row " >
                                            <form onSubmit={onSubmit} >
                                                    <div className="col-12">
                                                        <label className="form-label mt-3">Category Name</label>
                                                        <input type="text"
                                                            name='title'
                                                            className="form-control form-control-sm"
                                                            id="categoryTitle"
                                                            required
                                                            onChange={onInputChange}
                                                            value={title} />
                                                    </div>
                                                 
                                                    {/* <div className="col-sm-6">
                                                    <label className="form-label mt-3">Main Category</label>
                                                    <select className="form-control form-control-sm " data-placeholder="Select">
                                                        <option value="">Select</option>
                                                        <option value="Cloth">Cloth</option>
                                                        <option value="Fashion">-Fashion</option>
                                                        <option value="Jewellery">--Jewellery</option>
                                                        <option value="Bag">---Bag</option>
                                                        <option value="Smart Phone">----Smart Phone</option>
                                                        <option value="Watch">Watch</option>
                                                        <option value="Sunglass">Sunglass</option>
                                                    </select>
                                                </div> */}
                                                {/* <div className="col-sm-6">
                                                    <label className="form-label">Custom Category Icon</label>
                                                    <input type="text" className="form-control form-control-sm" placeholder="Fontawesome 6 pro icon name" />
                                                </div> */}
                                                    <div className="col-12">
                                                        <label className="form-label mt-3">Description</label>
                                                        <textarea
                                                            rows="5"
                                                            className="form-control form-control-sm"
                                                            name="description"
                                                            value={description}
                                                            required
                                                            onChange={onInputChange}></textarea>
                                                    </div>
                                                    {/* <div className="col-12">
                                                    <label className="form-label">Display Type</label>
                                                    <select className="form-control form-control-sm bg-dark">
                                                        <option value="0">Default</option>
                                                        <option value="1">Products</option>
                                                        <option value="2">Subcategories</option>
                                                        <option value="3">Both</option>
                                                    </select>
                                                </div> */}
                                                    {/* <div className="col-12">
                                                    <div className="upload-category-thumbnail">
                                                        <label className="form-label mb-0" id="addCatThumb">Add Category Thumbnail</label>
                                                        <input type="text" id="thumbUpload" />
                                                    </div>
                                                </div> */}
                                                    <div className="col-12 d-flex justify-content-end">
                                                        <div className="btn-box mt-4">
                                                            <button type='submit' className="btn btn-sm btn-primary">Save Category</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-8 col-md-7">
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
                                                {slicedTableCategory.map((display, ind) => (
                                                    <tbody>
                                                        <tr key={display.id}> 
                                                            <td>
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="table-category-card">
                                                                    {/* <div className="part-icon">
                                                                    <span><i className="fa-light fa-vest"></i></span>
                                                                </div> */}
                                                                    <div className="part-txt">
                                                                        <span className="category-name">{display.title}</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span className="table-dscr">{display.description}</span></td>
                                                            <td>23/12/99</td>
                                                            <td>23/12/99</td>
                                                            <td>
                                                                <div className="btn-box">
                                                                <button onClick={() => updateCategory(display.id)}>
                                                                    <i className="fa-light fa-pen-to-square"></i>
                                                                </button>
                                                                <button onClick={() => deleteCategory(display.id)}>
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
                                </div>
                            </div>

                            {/* <!-- footer start --> */}
                            <AdminFooter />
                            {/* <!-- footer end --> */}
                        </div>
                        {/* <!-- main content end --> */}

                    </body>
                </div>
            </div>
        </div>
    )
}

export default AdminCategory
