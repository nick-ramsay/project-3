import React from "react";
import "./style.css";

function NewAccountForm(props) {
    return (
        <div className="container">
            <div className="row h-70 justify-content-center align-items-center">
                <div className="col-md-12 mt-4">
                    <form className="my-5 mb-4 py-5 px-5 bg-white rounded  content-container">
                        <h2 className="text-center"><strong>Create an Account</strong></h2>
                        <h5 className="text-left">Contact Details</h5>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="createBusinessName">Business Name</label>
                                <input type="text" className="form-control" id="createBusinessName" placeholder="Business Name" name="businessName" onChange={props.handleFormUpdate} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="createOwnerName">Owner Name</label>
                                <input type="text" className="form-control" id="createOwnerName" placeholder="Owner Name" name="ownerName" onChange={props.handleFormUpdate} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="createBusinessPhone">Phone</label>
                                <input type="phone" className="form-control" id="createBusinessPhone" placeholder="Phone" name="phone" onChange={props.handleFormUpdate} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="createBusinessEmail">Email</label>
                                <input type="email" className="form-control" id="createBusinessEmail" placeholder="Email" name="email" onChange={props.handleFormUpdate} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="createPassword">Password</label>
                                <input type="password" className="form-control" id="createPassword" placeholder="Password" name="password" onChange={props.handleFormUpdate} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="createPasswordConfirm">Confirm Password</label>
                                <input type="password" className="form-control" id="createPasswordConfirm" placeholder="Confirm" name="confirmedPassword" onChange={props.handleFormUpdate} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="createBusinessAddress1">Address</label>
                            <input type="text" className="form-control" id="createBusinessAddress1" placeholder="1234 Main St" name="address" onChange={props.handleFormUpdate} />
                        </div>
                        <div className="form-group">
                            <label for="createBusinessAddress2">Address 2</label>
                            <input type="text" className="form-control" id="createBusinessAddress2" placeholder="Apartment, studio, or floor" name="address2" onChange={props.handleFormUpdate} />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="createBusinessCity">City</label>
                                <input type="text" className="form-control" id="createBusinessCity" name="city" onChange={props.handleFormUpdate} />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="addCustomerState">State</label>
                                <select id="addCustomerState" className="form-control" name="state" onChange={props.handleFormUpdate}>
                                    <option selected>Choose state...</option>
                                    <option>New South Wales</option>
                                    <option>Victoria</option>
                                    <option>Queensland</option>
                                    <option>Tasmania</option>
                                    <option>Australian Capital Territory</option>
                                    <option>Northern Territory</option>
                                    <option>South Australia</option>
                                    <option>Western Australia</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label for="createBusinessPostcode">Postcode</label>
                                <input type="text" className="form-control" id="createBusinessPostcode" placeholder="Postcode" name="postcode" onChange={props.handleFormUpdate} />
                            </div>
                        </div>
                        <h5 className="text-left">Service Details</h5>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="createBusinessRate">Standard Hourly Rate</label>
                                <input type="number" placeholder="10.00" step="0.01" min="0" className="form-control" id="createBusinessRate" name="hourlyRate" onChange={props.handleFormUpdate} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="createBusinessSpecialty">Specialty</label>
                                <select id="createBusinessSpecialty" className="form-control" name="specialty" onChange={props.handleFormUpdate}>
                                    <option selected>Choose specialty...</option>
                                    <option>Arts and Crafts</option>
                                    <option>Auto Repair</option>
                                    <option>Carpentry</option>
                                    <option>House Painting</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" className="btn btn-sm mb-1 float-right" id="createAccountBtn" name="createAccountBtn" onClick={props.handleNewAccountSubmit}>Create Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewAccountForm;