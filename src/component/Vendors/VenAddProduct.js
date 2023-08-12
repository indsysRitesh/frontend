import { useState,useEffect } from 'react'
import axios from 'axios'

import { useLocation } from 'react-router-dom';
import VenHeader from './VenHeader'

import VenFooter from './VenFooter'

const VenAddProduct = () => {
   
    const location = useLocation();
    const { productToUpdate } = location.state || {};
    

    // State for AddProduct form
    const [AddProduct, setAddProduct] = useState({
      name: '',
      description: '',
      photo: '',
      price: '',
      quntity_avlaible: '',
      shop_details_id: '',
      discount: '',
      category_id: '',
      created_date: '',
      update_date: '',
      order_items_id: '',
    });
  
    useEffect(() => {
      // If productToUpdate is provided, set it in the state for editing
      if (productToUpdate) {
        setAddProduct(productToUpdate);
      }
    }, [productToUpdate]);
  
    const { name, description,  price, quntity_avlaible, shop_details_id, discount, category_id,   order_items_id } = AddProduct;
  
    const onInputChange = (e) => {
      const { name, value } = e.target;
      setAddProduct({ ...AddProduct, [name]: value });

      
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
    //   date
      if (!AddProduct.id) {
        setAddProduct({ ...AddProduct, created_date: new Date().toISOString() });
      }
   
      if (AddProduct.id) {
        // Editing an existing product
        console.log('Product updated ');
        const apiUrl = `http://localhost:9898/product/update`;
        try {
          const response = await axios.put(apiUrl, AddProduct);
          console.log('Product updated successfully:', response.data);
          window.alert('Product updated successfully')
        } catch (error) {
          console.error('API error:', error.message);
        }
      } else {
        // Adding a new product
        const apiUrl = 'http://localhost:9898/product/add';
        try {
          const response = await axios.post(apiUrl, AddProduct);
          console.log('New product added:', response.data);
          window.alert('Product added successfully')
        } catch (error) {
          console.error('API error:', error.message);
        }
      }
    };

    return (
        <div>
            <div id='dashboad'>

                <body className="body-padding body-p-top light-theme">

                    <VenHeader />

                    {/* <!-- main content start --> */}
                    <div className="main-content">
                        <div className="dashboard-breadcrumb mb-30">
                            <h2>Add New Product</h2>
                            <div className="btn-box">
                                <a href="/venallproduct" className="btn btn-sm btn-primary">View All</a>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-xxl-9 col-lg-8">
                                <div className="panel mb-30">
                                      <div className="panel-body">
                                            <div className="row " >
                                            <form onSubmit={onSubmit} >
                                                <div className="col-12">
                                                    <label className="form-label mt-3">Name</label>
                                                    <input type="text"
                                                      name='name'
                                                      className="form-control form-control-sm"
                                                      required
                                                      onChange={onInputChange}
                                                      value={name} />
                                                </div>
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
                                                    <label className="form-label mt-3">Photo</label>
                                                    <input type="file"
                                                      name='photo'
                                                      className="form-control form-control-sm"
                                                      required
                                                       onChange={(e) => setSelectedFile(e.target.files[0])
                                                      value={photo} />
                                                </div> */}
                                              
                                                <div className="col-12">
                                                    <label className="form-label mt-3">price </label>
                                                    <input type="number"
                                                      name='price'
                                                      className="form-control form-control-sm"
                                                      required
                                                      onChange={onInputChange}
                                                      value={price} />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label mt-3">Quntity Avlaible</label>
                                                    <input type="number"
                                                      name='quntity_avlaible'
                                                      className="form-control form-control-sm"
                                                      required
                                                      onChange={onInputChange}
                                                      value={quntity_avlaible} />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label mt-3">Category Id</label>
                                                    <input type="number"
                                                      name='category_id'
                                                      className="form-control form-control-sm"
                                                      required
                                                      onChange={onInputChange}
                                                      value={category_id} />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label mt-3">Shop Details Id</label>
                                                    <input type="number"
                                                      name='shop_details_id'
                                                      className="form-control form-control-sm"
                                                      required
                                                      onChange={onInputChange}
                                                      value={shop_details_id} />
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label mt-3">Discount </label>
                                                    <input type="number"
                                                      name='discount'
                                                      className="form-control form-control-sm"
                                                      required
                                                      onChange={onInputChange}
                                                      value={discount} />
                                                </div>
                                          
{/*                                             
                                                <div className="col-12">
                                                    <label className="form-label mt-3 ">Create Date</label>
                                                    <input type="datetime-local" 
                                                    name="created_date"
                                                    value={created_date}
                                                    required
                                                    onChange={onInputChange}
                                                    className="form-control form-control-sm"/>
                                                </div> */}
                                                {/* <div className="col-12">
                                                    <label className="form-label mt-3">Update Date</label>
                                                    <input type="datetime-local"
                                                     className="form-control form-control-sm"
                                                      name="update_date"
                                                      required
                                                      value={update_date}
                                                      onChange={onInputChange}/>
                                                </div> */}
                                                <div className="col-12">
                                                    <label className="form-label mt-3">Order Items Id</label>
                                                    <input type="number"
                                                      name='order_items_id'
                                                      className="form-control form-control-sm"
                                                      required
                                                      onChange={onInputChange}
                                                      value={order_items_id} />
                                                </div>
                                                <div className="col-12 d-flex justify-content-end">
                                                    <div className="btn-box mt-4">
                                                        <button type='submit' className="btn btn-sm btn-primary">Save Product</button>
                                                    </div>
                                                </div>
                                                </form>
                                            </div>
                                        </div>
                                </div>
                              
                            </div>
                            <div className="col-xxl-3 col-lg-4 add-product-sidebar">
                                <div className="mb-30 w-100">
                                    <a href="/#" className="btn btn-primary d-block">Preview Changed</a>
                                </div>
                                <div className="panel mb-30">
                                    <div className="panel-header">
                                        <h5>Published</h5>
                                        <div className="btn-box d-flex gap-2">
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <button className="btn btn-sm btn-icon btn-outline-primary panel-close"><i className="fa-light fa-angle-up"></i></button>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <label className="form-label">Status</label>
                                                <select className="form-control form-control-sm">
                                                    <option value="0">Published</option>
                                                    <option value="1">Draft</option>
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label className="form-label">Visibility</label>
                                                <select className="form-control form-control-sm">
                                                    <option value="0">Public</option>
                                                    <option value="1">Pass. Protected</option>
                                                    <option value="2">Private</option>
                                                </select>
                                            </div>
                                            <div className="col-12">
                                                <div className="publish-date">
                                                    <label>Published on: </label>
                                                    <input className="input-flush" type="text" id="publishDate" />
                                                    <label for="publishDate" className="cursor-pointer text-primary"><i className="fa-light fa-pen-to-square"></i></label>
                                                </div>
                                                <div className="btn-box d-flex justify-content-end gap-2">
                                                    <button className="btn btn-sm btn-outline-primary">Save</button>
                                                    <button className="btn btn-sm btn-primary">Publish</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel mb-30">
                                    <div className="panel-header">
                                        <h5>Category</h5>
                                        <div className="btn-box d-flex gap-2">
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <button className="btn btn-sm btn-icon btn-outline-primary panel-close"><i className="fa-light fa-angle-up"></i></button>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <form className="input-group-with-icon mb-20">
                                            <span className="input-icon"><i className="fa-light fa-magnifying-glass"></i></span>
                                            <input type="search" placeholder="Search category" />
                                        </form>
                                        <div className="product-categories">
                                            <div className="cat-group">
                                                <div className="form-check">
                                                    <input className="form-check-input has-sub" type="checkbox" id="catFinance" />
                                                    <label className="form-check-label" for="catFinance">
                                                        Finance <span><i className="fa-light fa-plus"></i></span>
                                                    </label>
                                                </div>
                                                <div className="sub-cat-group">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="catBanking" />
                                                        <label className="form-check-label" for="catBanking">
                                                            Banking
                                                        </label>
                                                    </div>
                                                    <div className="cat-group">
                                                        <div className="form-check">
                                                            <input className="form-check-input has-sub" type="checkbox" id="catAccounting" />
                                                            <label className="form-check-label" for="catAccounting">
                                                                Accounting <span><i className="fa-light fa-plus"></i></span>
                                                            </label>
                                                        </div>
                                                        <div className="sub-cat-group">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="catBangladeshBank" />
                                                                <label className="form-check-label" for="catBangladeshBank">
                                                                    BangladeshBank
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cat-group">
                                                <div className="form-check">
                                                    <input className="form-check-input has-sub" type="checkbox" id="catFashion" />
                                                    <label className="form-check-label" for="catFashion">
                                                        Fashion & Clothing <span><i className="fa-light fa-plus"></i></span>
                                                    </label>
                                                </div>
                                                <div className="sub-cat-group">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="catTShirt" />
                                                        <label className="form-check-label" for="catTShirt">
                                                            t-Shirt
                                                        </label>
                                                    </div>
                                                    <div className="cat-group">
                                                        <div className="form-check">
                                                            <input className="form-check-input has-sub" type="checkbox" id="catShirt" />
                                                            <label className="form-check-label" for="catShirt">
                                                                Shirt <span><i className="fa-light fa-plus"></i></span>
                                                            </label>
                                                        </div>
                                                        <div className="sub-cat-group">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="catCasualShirt" />
                                                                <label className="form-check-label" for="catCasualShirt">
                                                                    Casual Shirt
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="catBag" />
                                                <label className="form-check-label" for="catBag">
                                                    Bag
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="catMonitor" />
                                                <label className="form-check-label" for="catMonitor">
                                                    Monitor
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="catKeyboard" />
                                                <label className="form-check-label" for="catKeyboard">
                                                    Keyboard
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="catMouse" />
                                                <label className="form-check-label" for="catMouse">
                                                    Mouse
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-top"></div>
                                    <div className="panel-body">
                                        <div className="d-flex justify-content-end">
                                            <button className="btn-flush add-category-btn"><i className="fa-light fa-plus"></i> Add new category</button>
                                        </div>
                                        <div className="add-new-category-panel">
                                            <form>
                                                <input type="text" className="form-control form-control-sm mb-3" placeholder="Category Name" />
                                                <select className="form-control form-control-sm mb-3" data-placeholder="Select Parent">
                                                    <option value="">Select Parent</option>
                                                    <option value="0">Finance</option>
                                                    <option value="1">Banking</option>
                                                    <option value="2">Accounting</option>
                                                    <option value="3">Bangladesh Bank</option>
                                                    <option value="4">Fashion & Clothing</option>
                                                    <option value="5">t-Shirt</option>
                                                    <option value="6">Shirt</option>
                                                    <option value="7">Casual Shirt</option>
                                                    <option value="8">Bag</option>
                                                    <option value="9">Monitor</option>
                                                    <option value="10">Keyboard</option>
                                                    <option value="11">Mouse</option>
                                                </select>
                                                <div className="d-flex justify-content-end">
                                                    <button className="btn btn-sm btn-primary">Update</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header">
                                        <h5>Products Tags</h5>
                                        <div className="btn-box d-flex gap-2">
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <button className="btn btn-sm btn-icon btn-outline-primary panel-close"><i className="fa-light fa-angle-up"></i></button>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="product-tag-area">
                                            <div className="row g-3">
                                                <div className="col-9">
                                                    <input type="text" className="input-flush" id="productTags" />
                                                </div>
                                                <div className="col-3">
                                                    <button className="btn btn-sm btn-primary w-100" id="addTags">Add</button>
                                                </div>
                                            </div>
                                            <span className="input-txt">Use commas to separate tags</span>
                                            <div className="all-tags" id="allTags"></div>
                                            <div className="tag-history">
                                                <span className="choose-used-tag input-txt">Choose from most use tags</span>
                                                <div className="all-tags used-tags active">
                                                    <div className="item d-inline-block" data-value="mobile">mobile<span className="close-tag"><i className="fa-regular fa-xmark"></i></span></div>
                                                    <div className="item d-inline-block" data-value="tab">tab<span className="close-tag"><i className="fa-regular fa-xmark"></i></span></div>
                                                    <div className="item d-inline-block" data-value="watch">watch<span className="close-tag"><i className="fa-regular fa-xmark"></i></span></div>
                                                    <div className="item d-inline-block" data-value="t-shirt">t-shirt<span className="close-tag"><i className="fa-regular fa-xmark"></i></span></div>
                                                    <div className="item d-inline-block" data-value="shirt">shirt<span className="close-tag"><i className="fa-regular fa-xmark"></i></span></div>
                                                    <div className="item d-inline-block" data-value="book">book<span className="close-tag"><i className="fa-regular fa-xmark"></i></span></div>
                                                    <div className="item d-inline-block" data-value="monitor">monitor<span className="close-tag"><i className="fa-regular fa-xmark"></i></span></div>
                                                    <div className="item d-inline-block" data-value="cloth">cloth<span className="close-tag"><i className="fa-regular fa-xmark"></i></span></div>
                                                </div>
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

export default VenAddProduct
