import React from "react";
import "./style.css";

function NewCustomerForm(props) {
    return (
        <div className="container">
            <div className="row h-70 justify-content-center align-items-center">
                <div className="col-md-12">
                    <form>
                        <h5 className="text-left">Customer Details</h5>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="addCustomerFirstName">First Name</label>
                                <input type="text" className="form-control" id="addCustomerFirstName" placeholder="First Name" />
                            </div>
                            <div className="form-group col-md-12">
                                <label for="addCustomerLastName">Last Name</label>
                                <input type="text" className="form-control" id="addCustomerLastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="addCustomerPhone">Phone</label>
                                <input type="phone" className="form-control" id="addCustomerPhone" placeholder="Phone" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="addCustomerEmail">Email</label>
                                <input type="email" className="form-control" id="addCustomerEmail" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="addCustomerAddress1">Address</label>
                            <input type="text" className="form-control" id="addCustomerAddress1" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label for="addCustomerAddress2">Address 2</label>
                            <input type="text" className="form-control" id="addCustomerAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="addCustomerCity">City</label>
                                <input type="text" className="form-control" id="addCustomerCity" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="addCustomerState">State</label>
                                <select id="addCustomerState" className="form-control">
                                    <option selected>Choose state...</option>
                                    <option>New South Wales</option>
                                    <option>Victoria</option>
                                    <option>Queensland</option>
                                    <option>Tasmania</option>
                                    <option>Northern Territory</option>
                                    <option>South Australia</option>
                                    <option>Western Australia</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="addCustomerPostcode">Postcode</label>
                                <input type="number" placeholder="2000" min="0001" max="9999" className="form-control" id="addCustomerPostcode" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewCustomerForm;