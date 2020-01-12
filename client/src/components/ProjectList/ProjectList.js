import React from "react";
import "./style.css";

function ProjectList(props) {
    return (
        <div className="col-md-12">
            <div class="card mb-2">
                <h5 className="card-header" id="customerHeader1">
                    <strong><span className="projectStatus">STATUS: </span><span className="projectHeaderName">"Project Description"</span><span className="projectHeaderName"> for Nick Ramsay</span><span className="projectHeaderName"> - DD/MM/YYYY</span></strong>
                </h5>
                <div className="card-body">
                    <button className="btn btn-dark m-1 customerDetails" type="button" data-toggle="collapse" id="customer1" data-target="#customerDetails1">Details</button>
                    <button className="btn btn-primary m-1 float-right editInventoryBtn"><img src={require("../../images/edit-icon.png")} alt="Edit Item" /></button>
                    <button className="btn btn-danger m-1 float-right deleteInventoryBtn"><img src={require("../../images/delete-icon.png")} alt="Delete Item" /></button>
                    <div id="customerDetails1" class="collapse" aria-labelledby="headingOne" data-parent="#customer1">
                        <div class="card-body">
                            <p>Project: [PROJECT NAME]</p>
                            <p>Customer: [CUSTOMER NAME]</p>
                            <p>Project Status: [STATUS]</p>
                            <p>Project Start Date: [DD/MM/YYYY]</p>
                            <p>Project Completion Date: [DD/MM/YYYY]</p>
                            <p>Project Expenses: [DOLLAR AMOUNT]</p>
                            <p>Project Revenue: [DOLLAR AMOUNT]</p>
                            <p>Project Gain/Loss: [DOLLAR AMOUNT]</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;