import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";
import NewCustomerModal from "../../components/NewCustomerModal/NewCustomerModal";
import "./style.css";

class Customers extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container pt-4">
                    <div className="col-md-12 my-5 mb-4 px-5 bg-white rounded">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Customers</strong></h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 p-2 d-flex justify-content-center">
                                <td><button className="btn btn-success addInventoryBtn" data-toggle="modal" data-target="#newCustomerModal"><span><img src={require("../../images/new-icon.jpg")} alt="Add a Customer" /> Add a Customer</span></button></td>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-12">
                                <div class="card mb-2">
                                    <h5 className="card-header" id="customerHeader1">
                                        <span><strong>Nick Ramsay</strong></span>
                                    </h5>
                                    <div className="card-body">
                                        <p><strong>Phone: </strong>0404470705</p>
                                        <p><strong>Suburb: </strong>Newtown</p>
                                        <button className="btn btn-dark m-1 customerDetails" type="button" data-toggle="collapse" id="customer1" data-target="#customerDetails1">Details</button>
                                        <button className="btn btn-primary m-1 float-right editCustomerBtn"><img src={require("../../images/edit-icon.png")} alt="Edit Item" /></button>
                                        <button className="btn btn-danger m-1 float-right deleteCustomerBtn"><img src={require("../../images/delete-icon.png")} alt="Delete Item" /></button>
                                        <div id="customerDetails1" class="collapse" aria-labelledby="headingOne" data-parent="#customer1">
                                            <div class="card-body">
                                                <h6>Customer Since: [DATE]</h6>
                                                <p>Street Address</p>
                                                <p>Suburb</p>
                                                <p>Post Code</p>
                                                <p>Phone Number</p>
                                                <p>Email</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <NewProjectModal />
                <NewCustomerModal />
            </div>
        )
    }
}

export default Customers;