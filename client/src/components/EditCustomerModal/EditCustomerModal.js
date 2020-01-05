import React from "react";
import moment from "moment";
import "./style.css";

function EditCustomerModal(props) {

    return (
        <div className="modal fade" id="editCustomerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><strong>{props.editCustomerFirstName && props.editCustomerFirstName} {props.editCustomerLastName && props.editCustomerLastName}</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row h-70 justify-content-center align-items-center">
                            <div className="col-md-12">
                                <form>
                                    <div className="form-row d-flex justify-content-center mb-1">
                                        {props.editCustomerCancelled && <button type="button" className="btn btn-success" id="reactivateCustomerBtn" data-reactivate-customer-id={props.editCustomerID} name="reactivateCustomerBtn" onClick={props.reactivateCustomer}>Reactivate Customer</button>}
                                    </div>
                                    <h5 className="text-left">Customer Details</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="editCustomerFirstName">First Name</label>
                                            <input type="text" className="form-control" id="editCustomerFirstName" defaultValue={props.editCustomerFirstName} name="editCustomerFirstName" onChange={props.handleFormUpdate} />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="editCustomerLastName">Last Name</label>
                                            <input type="text" className="form-control" id="editCustomerLastName" defaultValue={props.editCustomerLastName} name="editCustomerLastName" onChange={props.handleFormUpdate} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="editCustomerPhone">Phone</label>
                                            <input type="phone" className="form-control" id="editCustomerPhone" defaultValue={props.editCustomerPhone} name="editCustomerPhone" onChange={props.handleFormUpdate} />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="editCustomerEmail">Email</label>
                                            <input type="email" className="form-control" id="editCustomerEmail" defaultValue={props.editCustomerEmail} name="editCustomerEmail" onChange={props.handleFormUpdate} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="editCustomerAddress1">Address</label>
                                        <input type="text" className="form-control" id="editCustomerAddress1" defaultValue={props.editCustomerAddress1} name="editCustomerAddress1" onChange={props.handleFormUpdate} />
                                    </div>
                                    <div className="form-group">
                                        <label for="editCustomerAddress2">Address 2</label>
                                        <input type="text" className="form-control" id="editCustomerAddress2" defaultValue={props.editCustomerAddress2 && props.editCustomerAddress2} name="editCustomerAddress2" onChange={props.handleFormUpdate} />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="editCustomerCity">City</label>
                                            <input type="text" className="form-control" id="editCustomerCity" defaultValue={props.editCustomerCity} name="editCustomerCity" onChange={props.handleFormUpdate}  />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="editCustomerState">State</label>
                                            <select id="editCustomerState" className="form-control" defaultValue={props.editCustomerState} name="editCustomerState" onChange={props.handleFormUpdate} >
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
                                            <label for="editCustomerPostcode">Postcode</label>
                                            <input type="number" min="0001" max="9999" defaultValue={props.editCustomerPostcode} className="form-control" id="editCustomerPostcode" name="editCustomerPostcode" onChange={props.handleFormUpdate}  />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" id="editCustomerSubmitBtn" name="editCustomerSubmitBtn" onClick={props.handleEditCustomerSubmit}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCustomerModal;