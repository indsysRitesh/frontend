import { useState,useEffect } from 'react'
import axios from 'axios'

import { useLocation } from 'react-router-dom';
import AdminFooter from './AdminFooter'
import AdminHeader from './AdminHeader'

const AdminAddProduct = () => {
  
  
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
  
    const { name, description,  price, quntity_avlaible, shop_details_id, discount, category_id,  order_items_id } = AddProduct;
  
    const onInputChange = (e) => {
      const { name, value } = e.target;
      setAddProduct({ ...AddProduct, [name]: value });
    };
  
    const onSubmit = async (e) => {
        e.preventDefault();
      
        // Set the current date for created_date if it's a new product
        if (!AddProduct.id) {
          setAddProduct({ ...AddProduct, created_date: new Date().toISOString() });
        }
      
        if (AddProduct.id) {
          // Editing an existing product
          console.log('Product updated');
          const apiUrl = `http://localhost:9898/product/update`;
          try {
            const response = await axios.put(apiUrl, AddProduct);
            console.log('Product updated successfully:', response.data);
            window.alert('Product updated successfully');
          } catch (error) {
            console.error('API error:', error.message);
          }
        } else {
          // Adding a new product
          const apiUrl = 'http://localhost:9898/product/add';
          try {
            const response = await axios.post(apiUrl, AddProduct);
            console.log('New product added:', response.data);
            window.alert('Product added successfully');
            // Do not reset the form here, let it stay with the entered data
          } catch (error) {
            console.error('API error:', error.message);
          }
        }
      };
      
    return (
        <div>
            <div id='dashboad'>

                <body className="body-padding body-p-top light-theme">

                    <AdminHeader />

                    {/* <!-- main content start --> */}
                    <div className="main-content">
                        <div className="dashboard-breadcrumb mb-30">
                            <h2>Add New Product</h2>
                            <div className="btn-box">
                                <a href="/adminallproduct" className="btn btn-sm btn-primary">View All</a>
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
                                          
                                            
                                                {/* <div className="col-12">
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
                                {/* <div className="panel mb-30">
                                    <div className="panel-header">
                                        <h5>Product Description</h5>
                                        <div className="btn-box d-flex gap-2">
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <button className="btn btn-sm btn-icon btn-outline-primary panel-close"><i className="fa-light fa-angle-up"></i></button>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <div className="editor"></div>
                                    </div>
                                </div>
                                <div className="panel mb-30">
                                    <div className="panel-header">
                                        <h5>Product Data</h5>
                                        <div className="panel-header-right">
                                            <div className="form-check d-flex gap-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="generalProductData" />
                                                    <label className="form-check-label" for="generalProductData">
                                                        General
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="DownloadableProductData" />
                                                    <label className="form-check-label" for="DownloadableProductData">
                                                        Downloadable
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-box d-flex gap-2">
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <button className="btn btn-sm btn-icon btn-outline-primary panel-close"><i className="fa-light fa-angle-up"></i></button>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <nav>
                                            <div className="btn-box d-flex flex-wrap gap-1 mb-30" id="nav-tab" role="tablist">
                                                <button className="btn btn-sm btn-outline-primary active" id="nav-media-tab" data-bs-toggle="tab" data-bs-target="#nav-media" type="button" role="tab" aria-controls="nav-media" aria-selected="true">Media</button>
                                                <button className="btn btn-sm btn-outline-primary" id="nav-inventory-tab" data-bs-toggle="tab" data-bs-target="#nav-inventory" type="button" role="tab" aria-controls="nav-inventory" aria-selected="false">Inventory</button>
                                                <button className="btn btn-sm btn-outline-primary" id="nav-price-tab" data-bs-toggle="tab" data-bs-target="#nav-price" type="button" role="tab" aria-controls="nav-price" aria-selected="false">Price</button>
                                                <button className="btn btn-sm btn-outline-primary" id="nav-attribute-tab" data-bs-toggle="tab" data-bs-target="#nav-attribute" type="button" role="tab" aria-controls="nav-attribute" aria-selected="false">Attribute</button>
                                                <button className="btn btn-sm btn-outline-primary" id="nav-shipping-info-tab" data-bs-toggle="tab" data-bs-target="#nav-shipping-info" type="button" role="tab" aria-controls="nav-shipping-info" aria-selected="false">Shipping info</button>
                                                <button className="btn btn-sm btn-outline-primary" id="nav-video-tab" data-bs-toggle="tab" data-bs-target="#nav-video" type="button" role="tab" aria-controls="nav-video" aria-selected="false">Video</button>
                                                <button className="btn btn-sm btn-outline-primary" id="nav-shipping-configuration-tab" data-bs-toggle="tab" data-bs-target="#nav-shipping-configuration" type="button" role="tab" aria-controls="nav-shipping-configuration" aria-selected="false">Shipping Configuration</button>
                                                <button className="btn btn-sm btn-outline-primary" id="nav-offer-tab" data-bs-toggle="tab" data-bs-target="#nav-offer" type="button" role="tab" aria-controls="nav-offer" aria-selected="false">Offer</button>
                                            </div>
                                        </nav>
                                        <div className="tab-content product-data-tab" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-media" role="tabpanel" aria-labelledby="nav-media-tab" tabindex="0">
                                                <div className="row">
                                                    <div className="col-xxl-3 col-md-4 col-5 col-xs-12">
                                                        <div className="add-thumbnail product-image-upload">
                                                            <div className="part-txt">
                                                                <h5>Add thumbnail <span>(jpeg/png)</span></h5>
                                                            </div>
                                                            <input type="text" className="image-input" id="thumbUpload" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-9 col-md-8 col-7 col-xs-12">
                                                        <div className="add-gallery-img product-image-upload">
                                                            <div className="part-txt">
                                                                <h5>Add gallery <span>(jpeg/png)</span></h5>
                                                            </div>
                                                            <input type="text" className="image-input" id="galleryUpload" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-inventory" role="tabpanel" aria-labelledby="nav-inventory-tab" tabindex="0">
                                                <form>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">SKU <span className="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-className="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-question"></i></span></label>
                                                        <div className="col-md-10">
                                                            <input type="text" className="form-control form-control-sm" id="SKU" />
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Manage Stock?</label>
                                                        <div className="col-md-10">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="manageStock" />
                                                                <label className="form-check-label" for="manageStock">
                                                                    Manage stock level (quantity)
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Stock Status <span className="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-className="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-question"></i></span></label>
                                                        <div className="col-md-10">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">In stock</option>
                                                                <option value="1">Out of stock</option>
                                                                <option value="2">On backorder</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Sold individually <span className="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-className="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-question"></i></span></label>
                                                        <div className="col-md-10">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" value="" id="soldIndividually" />
                                                                <label className="form-check-label" for="soldIndividually">
                                                                    Limit purchases to 1 item per order
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Product Code <span className="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-className="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-question"></i></span></label>
                                                        <div className="col-md-10">
                                                            <input type="text" className="form-control form-control-sm" id="productCode" />
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="lowStockWarning" className="col-md-2 col-form-label col-form-label-sm">Low Stock Warning</label>
                                                        <div className="col-md-10">
                                                            <input type="number" className="form-control form-control-sm" id="lowStockWarning" />
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="showStockQuantity" className="col-md-2 col-8 col-form-label col-form-label-sm">Show Stock Quantity</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="showStockQuantity" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="showStockWithText" className="col-md-2 col-8 col-form-label col-form-label-sm">Show Stock With Text</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="showStockWithText" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3">
                                                        <label for="hideStock" className="col-md-2 col-8 col-form-label col-form-label-sm">Hide Stock</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="hideStock" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="nav-price" role="tabpanel" aria-labelledby="nav-price-tab" tabindex="0">
                                                <form>
                                                    <div className="row g-3 mb-3">
                                                        <label for="regularPrice" className="col-md-2 col-form-label col-form-label-sm">Regular Price ($)</label>
                                                        <div className="col-md-10">
                                                            <input type="number" className="form-control form-control-sm" id="regularPrice" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-3 mb-3">
                                                        <label for="salePrice" className="col-md-2 col-form-label col-form-label-sm">Discount ($)</label>
                                                        <div className="col-md-8">
                                                            <input type="number" className="form-control form-control-sm" id="salePrice" />
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="form-control-sm p-0">
                                                                <select className="form-control form-control-sm">
                                                                    <option value="1">Flat</option>
                                                                    <option value="2">Discount</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <label for="PriceDateStart" className="col-md-2 col-form-label col-form-label-sm">Sale price dates</label>
                                                        <div className="col-md-5">
                                                            <input type="text" className="form-control form-control-sm dateRangePicker" id="PriceDateStart" placeholder="DD MMMM YYYY - HH:MM" />
                                                        </div>
                                                        <div className="col-md-5">
                                                            <input type="text" className="form-control form-control-sm dateRangePicker" id="PriceDateEnd" placeholder="DD MMMM YYYY - HH:MM" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="nav-attribute" role="tabpanel" aria-labelledby="nav-attribute-tab" tabindex="0">
                                                <div className="add-product-attribute">
                                                    <div className="form-group">
                                                        <select className="form-control form-control-sm">
                                                            <option value="">Custom Product Attribute</option>
                                                            <option value="">Brand</option>
                                                            <option value="">Color</option>
                                                            <option value="">Size</option>
                                                        </select>
                                                        <button className="btn btn-sm btn-icon btn-primary" id="addAttr"><i className="fa-light fa-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav-shipping-info" role="tabpanel" aria-labelledby="nav-shipping-info-tab" tabindex="0">
                                                <form>
                                                    <div className="row g-3 mb-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Weight (kg) <span className="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-className="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-question"></i></span></label>
                                                        <div className="col-md-10">
                                                            <input type="number" className="form-control form-control-sm" id="weight" placeholder="0" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-3 mb-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Dimensions (cm) <span className="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-className="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-question"></i></span></label>
                                                        <div className="col-md-10">
                                                            <div className="row g-3">
                                                                <div className="col-md-4">
                                                                    <input type="number" className="form-control form-control-sm" id="Dimensions" placeholder="Length" />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <input type="number" className="form-control form-control-sm" placeholder="Width" />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <input type="number" className="form-control form-control-sm" placeholder="Height" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Shipping Class <span className="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-className="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-question"></i></span></label>
                                                        <div className="col-md-10">
                                                            <select className="form-control form-control-sm">
                                                                <option value="0">No Shipping Class</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="nav-video" role="tabpanel" aria-labelledby="nav-video-tab" tabindex="0">
                                                <form>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Video Provider</label>
                                                        <div className="col-md-10">
                                                            <select className="form-control form-control-sm" data-placeholder="Select Provider">
                                                                <option value="">Select Provider</option>
                                                                <option value="0">Youtube</option>
                                                                <option value="1">Vimeo</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="row g-3">
                                                        <label className="col-md-2 col-form-label col-form-label-sm">Video Link</label>
                                                        <div className="col-md-10">
                                                            <input type="url" className="form-control form-control-sm" name="video_link" placeholder="Video Link" />
                                                            <span className="input-additional-txt">Use proper link without extra parameter. Don't use short share link/embeded iframe code.</span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="nav-shipping-configuration" role="tabpanel" aria-labelledby="nav-shipping-configuration-tab" tabindex="0">
                                                <form>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="estimateShippingTime" className="col-md-2 col-form-label col-form-label-sm">Estimate Shipping Time</label>
                                                        <div className="col-md-10">
                                                            <div className="input-group">
                                                                <input type="number" className="form-control form-control-sm" id="estimateShippingTime" />
                                                                <span className="input-group-text">Days</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="freeShipping" className="col-md-2 col-8 col-form-label col-form-label-sm">Free Shipping</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="freeShipping" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="flatRate" className="col-md-2 col-8 col-form-label col-form-label-sm">Flat Rate</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="flatRate" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="QuantityMulitiply" className="col-md-2 col-8 col-form-label col-form-label-sm">Quantity Mulitiply</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="QuantityMulitiply" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3">
                                                        <label for="cashOnDelivery" className="col-md-2 col-8 col-form-label col-form-label-sm">Cash On Delivery</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="cashOnDelivery" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="tab-pane fade" id="nav-offer" role="tabpanel" aria-labelledby="nav-offer-tab" tabindex="0">
                                                <form>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="flashDeal" className="col-md-2 col-8 col-form-label col-form-label-sm">Flash Deal</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="flashDeal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3 mb-3">
                                                        <label for="todaysDeal" className="col-md-2 col-8 col-form-label col-form-label-sm">Today's Deal</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="todaysDeal" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center g-3">
                                                        <label for="featured" className="col-md-2 col-8 col-form-label col-form-label-sm">Featured</label>
                                                        <div className="col-md-10 col-4">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="featured" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel">
                                    <div className="panel-header">
                                        <h5>SEO Data</h5>
                                        <div className="btn-box d-flex gap-2">
                                            <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                                            <button className="btn btn-sm btn-icon btn-outline-primary panel-close"><i className="fa-light fa-angle-up"></i></button>
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <form>
                                            <div className="row g-3 mb-3">
                                                <label className="col-xxl-2 col-md-3 col-form-label col-form-label-sm pe-0">Focus keyphrase <span className="btn-flush fs-14" data-bs-toggle="tooltip" data-bs-custom-className="custom-tooltip" data-bs-title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."><i className="fa-solid fa-circle-question"></i></span></label>
                                                <div className="col-xxl-10 col-md-9">
                                                    <input type="text" className="form-control form-control-sm" id="focusKeyphrase" />
                                                </div>
                                            </div>
                                            <div className="row g-3 mb-3">
                                                <label for="metaTitle" className="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Meta Title</label>
                                                <div className="col-xxl-10 col-md-9">
                                                    <input type="text" className="form-control form-control-sm" id="metaTitle" />
                                                </div>
                                            </div>
                                            <div className="row g-3 mb-3">
                                                <label for="slugText" className="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Slug</label>
                                                <div className="col-xxl-10 col-md-9">
                                                    <input type="text" className="form-control form-control-sm" id="slugText" />
                                                </div>
                                            </div>
                                            <div className="row g-3">
                                                <label for="metaDscr" className="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Meta Description</label>
                                                <div className="col-xxl-10 col-md-9">
                                                    <textarea className="form-control" rows="5" id="metaDscr"></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
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
                        <AdminFooter/>
                        {/* <!-- footer end --> */}
                    </div>
                    {/* <!-- main content end --> */}


                </body>
            </div>
        </div>
    )
}

export default AdminAddProduct
