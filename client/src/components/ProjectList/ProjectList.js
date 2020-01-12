import React from "react";
import moment from "moment";
import "./style.css";

function ProjectList(props) {
    return (
        <div className="col-md-12">
            <div class="card mb-2">
                <h5 className="card-header" id="customerHeader1">
                    <strong><span className="projectStatus">{props.projectName}: </span><span className="projectHeaderName">{props.projectStatus}</span><span className="projectHeaderName"> for {props.projectCustomer}</span><span className="projectHeaderName"> - {moment(props.projectCreated).format("DD/MM/YYYY hh:mm a")}</span></strong>
                </h5>
                <div className="card-body">
                    <button className="btn btn-dark m-1 customerDetails" type="button" data-toggle="collapse" id="customer1" data-target="#customerDetails1">Details</button>
                    {props.projectStatus === "Complete" && <button className="btn btn-warning m-1 float-right" id="generateProjectInvoice" data-project-index={props.projectStateIndex} name="generateProjectInvoice" onClick={props.generateProjectInvoice}>$</button>}
                    <button className="btn btn-primary m-1 float-right editInventoryBtn"><img src={require("../../images/edit-icon.png")} alt="Edit Item" /></button>
                    <button className="btn btn-danger m-1 float-right deleteInventoryBtn"><img src={require("../../images/delete-icon.png")} alt="Delete Item" /></button>
                    <div id="customerDetails1" class="collapse" aria-labelledby="headingOne" data-parent="#customer1">
                        <div class="card-body">
                            <p>Project: {props.projectName}</p>
                            <p>Customer: {props.projectCustomer}</p>
                            <p>Project Status: {props.projectStatus}</p>
                            <p>Project Start Date: {moment(props.projectCreated).format("DD/MM/YYYY hh:mm a")}</p>
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