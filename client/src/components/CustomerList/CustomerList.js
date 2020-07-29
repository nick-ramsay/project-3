import React from "react";
import "./style.css";
import moment from "moment";

function CustomerList(props) {
    return (
        <div className="col-md-12 pb-2">
            <div class="card mb-2 justify-content-center text-center">
                <h5 className="card-header" id="customerHeader1">
                    <span><strong>{props.firstName && props.firstName} {props.lastName && props.lastName}<span id="cancelledDate">{props.cancelled && " [Cancelled: " + props.cancelled + "]"}</span></strong></span>
                </h5>
                <div className="card-body">
                    <p><strong>Phone: </strong>{props.phone && props.phone}</p>
                    <p><strong>Location: </strong>{props.city && props.city}, {props.state} </p>
                    <div className="row m-0 p-0 justify-content-center">
                        <button className="btn btn-sm m-1" id="editCustomerBtn" data-toggle="modal" data-target="#editCustomerModal" data-customer-state-index={props.customerStateIndex} onClick={props.editCustomer}>Edit</button>
                        {!props.cancelled && <button className="btn btn-sm m-1" id="deleteCustomerBtn" data-cancel-customer-id={props.customerID} name="deleteCustomerBtn" onClick={props.cancelCustomer}>Cancel</button>}
                    </div>
                    <div className="row m-0 p-0 justify-content-center">
                        <button className="btn btn-sm m-1 customerDetails" type="button" data-toggle="collapse" id={props.customerID && "customer" + props.customerID} data-target={props.customerID && "#customerDetails" + props.customerID}>Details</button>
                    </div>
                    <div id={props.customerID && "customerDetails" + props.customerID} class="collapse" aria-labelledby="headingOne" data-parent={props.customerID && "#customer" + props.customerID}>
                        <div class="card-body">
                            <h6>Customer Since: {props.created}</h6>
                            <p>Street Address: {props.address && props.address}{props.address2 && ", "}{props.address2 && props.address2}</p>
                            <p>Suburb: {props.city && props.city}</p>
                            <p>Suburb: {props.state && props.state}</p>
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