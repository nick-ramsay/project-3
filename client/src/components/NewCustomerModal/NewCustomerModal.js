import React from "react";
import "./style.css";

function NewCustomerModal(props) {
    return (
        <div className="modal fade" id="newCustomerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><strong>Add a New Customer</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row h-70 justify-content-center align-items-center">
                            <div className="col-md-12">
                                <form>
                                    <h5 className="text-left">Customer Details</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="addCustomerFirstName">First Name</label>
                                            <input type="text" className="form-control" id="addCustomerFirstName" placeholder="First Name" name="addCustomerFirstName" onChange={props.handleFormUpdate}/>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="addCustomerLastName">Last Name</label>
                                            <input type="text" className="form-control" id="addCustomerLastName" placeholder="Last Name" name="addCustomerLastName" onChange={props.handleFormUpdate}/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="addCustomerPhone">Phone</label>
                                            <input type="phone" className="form-control" id="addCustomerPhone" placeholder="Phone" name="addCustomerPhone" onChange={props.handleFormUpdate}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="addCustomerEmail">Email</label>
                                            <input type="email" className="form-control" id="addCustomerEmail" placeholder="Email" name="addCustomerEmail" onChange={props.handleFormUpdate}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="addCustomerAddress1">Address</label>
                                        <input type="text" className="form-control" id="addCustomerAddress1" placeholder="1234 Main St" name="addCustomerAddress1" onChange={props.handleFormUpdate}/>
                                    </div>
                                    <div className="form-group">
                                        <label for="addCustomerAddress2">Address 2</label>
                                        <input type="text" className="form-control" id="addCustomerAddress2" placeholder="Apartment, studio, or floor" name="addCustomerAddress2" onChange={props.handleFormUpdate}/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="addCustomerCity">City</label>
                                            <input type="text" className="form-control" id="addCustomerCity" name="addCustomerCity" onChange={props.handleFormUpdate}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="addCustomerState">State</label>
                                            <select id="addCustomerState" className="form-control" name="addCustomerState" onChange={props.handleFormUpdate}>
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
                                            <input type="number" placeholder="2000" min="0001" max="9999" className="form-control" id="addCustomerPostcode" name="addCustomerPostcode" onChange={props.handleFormUpdate}/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm" id="addCustomerBtn" name="addCustomerBtn" onClick={props.handleNewCustomerSubmit}>Add Customer</button>
                        <button type="button" className="btn btn-sm red-btn" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCustomerModal;