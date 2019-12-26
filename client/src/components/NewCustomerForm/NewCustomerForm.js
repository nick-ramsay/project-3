import React from "react";
import "./style.css";

function NewCustomerForm(props) {
    return (
        <div className="container">
            <div className="row h-70 justify-content-center align-items-center">
                <div className="col-md-12">
                    <form className="my-5 mb-4 py-5 px-5 bg-white rounded">
                        <h2 className="text-center"><strong>Create an Account</strong></h2>
                        <h5 className="text-left">Contact Details</h5>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="createBusinessName">Business Name</label>
                                <input type="text" className="form-control" id="createBusinessName" placeholder="Business Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="createOwnerName">Owner Name</label>
                                <input type="text" className="form-control" id="createOwnerName" placeholder="Owner Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="createBusinessPhone">Phone</label>
                                <input type="phone" className="form-control" id="createBusinessPhone" placeholder="Phone" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="createBusinessEmail">Email</label>
                                <input type="email" className="form-control" id="createBusinessEmail" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="createPassword">Password</label>
                                <input type="password" className="form-control" id="createPassword" placeholder="Password" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="createPasswordConfirm">Confirm Password</label>
                                <input type="password" className="form-control" id="createPasswordConfirm" placeholder="Confirm" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="createBusinessAddress1">Address</label>
                            <input type="text" className="form-control" id="createBusinessAddress1" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label for="createBusinessAddress2">Address 2</label>
                            <input type="text" className="form-control" id="createBusinessAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="createBusinessCity">City</label>
                                <input type="text" className="form-control" id="createBusinessCity" />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="createBusinessState">State</label>
                                <select id="createBusinessState" className="form-control">
                                    <option selected>Choose state...</option>
                                    <option>New South Wales</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="createBusinessPostcode">Postcode</label>
                                <input type="text" className="form-control" id="createBusinessPostcode" placeholder="Postcode" />
                            </div>
                        </div>
                        <h5 className="text-left">Service Details</h5>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="createBusinessRate">Standard Hourly Rate</label>
                                <input type="number" placeholder="10.00" step="0.01" min="0" className="form-control" id="createBusinessRate" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="createBusinessSpecialty">Specialties</label>
                                <select id="createBusinessSpecialty" className="custom-select" multiple>
                                    <option>Carpentry</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mb-1 float-right" id="createAccountBtn">Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewCustomerForm;