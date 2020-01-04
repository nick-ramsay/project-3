import React from "react";
import "./style.css";

function CustomerList(props) {
    return (
        <div className="col-md-12">
            <div class="card mb-2">
                <h5 className="card-header" id="customerHeader1">
                    <span><strong>{props.firstName && props.firstName} {props.lastName && props.lastName}<span id="cancelledDate">{props.cancelled && " [Cancelled: " + props.cancelled +"]"}</span></strong></span>
                </h5>
                <div className="card-body">
                    <p><strong>Phone: </strong>{props.phone && props.phone}</p>
                    <p><strong>Suburb: </strong>{props.city && props.city}</p>
                    <button className="btn btn-dark m-1 customerDetails" type="button" data-toggle="collapse" id={props.customerID && "customer" + props.customerID} data-target={props.customerID && "#customerDetails" + props.customerID}>Details</button>
                    <button className="btn btn-primary m-1 float-right" id="editCustomerBtn" data-customer-state-index={props.customerStateIndex} onClick={props.editCustomer}><img src={require("../../images/edit-icon.png")} alt="Edit Customer" /></button>
                    {!props.cancelled && <button className="btn btn-danger m-1 float-right" id="deleteCustomerBtn" data-cancel-customer-id={props.customerID} name="deleteCustomerBtn" onClick={props.cancelCustomer}><img src={require("../../images/delete-icon.png")} alt="End Date Customer" /></button>}
                    <div id={props.customerID && "customerDetails" + props.customerID} class="collapse" aria-labelledby="headingOne" data-parent={props.customerID && "#customer" + props.customerID}>
                        <div class="card-body">
                            <h6>Customer Since: {props.created}</h6>
                            <p>Street Address: {props.address && props.address}{props.address2 && ", "}{props.address2 && props.address2}</p>
                            <p>Suburb: {props.city && props.city}</p>
                            <p>Postcode: {props.postcode && props.postcode}</p>
                            <p>Phone Number: {props.phone && props.phone}</p>
                            <p>Email: {props.email && props.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerList;