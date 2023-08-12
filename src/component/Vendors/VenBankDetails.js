import React from 'react'
import VenFooter from './VenFooter'
import VenHeader from './VenHeader'
import { useState } from 'react'
import axios from 'axios'
const VenBankDetails = () => {

 
    const [Bank, setBank] = useState({
        bankName: '',
        accountNumber: '',
        createddate: '',
        updatedate: '',
        branch: '',
        ifscCode:'',
      });
    
      // Your other state and useEffect code...
      const {  bankName, accountNumber,branch,ifscCode} = Bank;
    
      const onInputChange = (e) => {
        const { name, value } = e.target;
        setBank({ ...Bank, [name]: value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
      
        // Validate input before submitting
        if (!bankName || !accountNumber || !branch || !ifscCode) {
          window.alert('Please fill in all required fields');
          return;
        }
      
        // Set the current date for update_date when updating
        if (Bank.id) {
          setBank({ ...Bank, updatedate: new Date().toISOString() });
        }
      
        if (Bank.id) {
          // Editing an existing Bank
          console.log('Bank updated');
          const apiUrl = `http://localhost:9898/bank/update`;
          try {
            const response = await axios.put(apiUrl, Bank);
            console.log('Bank updated successfully:', response.data);
            window.alert('Bank updated successfully');
          } catch (error) {
            console.error('API error:', error);
          }
        } else {
          // Adding a new Bank
          const apiUrl = 'http://localhost:9898/bank/add';
          try {
            const response = await axios.post(apiUrl, Bank);
            console.log('Bank added successfully:', response.data);
            window.alert('Bank added successfully');
            // Clear the form fields after successful addition
            setBank({
              bankName: '',
              accountNumber: '',
              branch: '',
              ifscCode: '',
            });
          } catch (error) {
            console.error('API error:', error);
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
               
                <div className="row g-4">
                <div className="col-xxl-3 col-md-3"></div>
                    <div className="col-xxl-6 col-md-6">
                    <div className="dashboard-breadcrumb mb-30">
                    <h2>Bank Details</h2>
                </div>
                        <div className="panel">
                            <div className="panel-header">
                                <h5>Add Bank Details</h5>
                            </div>
                            <div className="panel-body">
                                <div className="row " >
                                    <form onSubmit={onSubmit} >
                                        <div className="col-12">
                                            <label className="form-label mt-3">Bank Name</label>
                                            <input type="text"
                                                name='bankName'
                                                className="form-control form-control-sm"
                                                id="bankname"
                                                required
                                                onChange={onInputChange}
                                                value={bankName} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label mt-3">Account Number</label>
                                            <input type="text"
                                                name='accountNumber'
                                                className="form-control form-control-sm"
                                                id="accountNumber"
                                                required
                                                onChange={onInputChange}
                                                value={accountNumber} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label mt-3">branch</label>
                                            <input type="text"
                                                name='branch'
                                                className="form-control form-control-sm"
                                                id="branch"
                                                required
                                                onChange={onInputChange}
                                                value={branch} />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label mt-3">ifsc Code</label>
                                            <input type="text"
                                                name='ifscCode'
                                                className="form-control form-control-sm"
                                                id="ifscCode"
                                                required
                                                onChange={onInputChange}
                                                value={ifscCode} />
                                        </div>
                                      
                                       
                                        <div className="col-12 d-flex justify-content-end">
                                            <div className="btn-box mt-4">
                                                <button type='submit' className="btn btn-sm btn-primary">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="col-xxl-3 col-md-3"></div>
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

export default VenBankDetails