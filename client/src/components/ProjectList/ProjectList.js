import React from "react";
import moment from "moment";
import "./style.css";

function ProjectList(props) {
    return (
        <div className="col-md-12">
            <div class="card mb-2">
                <h5 className="card-header" id="projectHeader1">
                    <strong><span className="projectStatus">{props.projectName}: </span><span className="projectHeaderName">{props.projectStatus}</span><span className="projectHeaderName"> for {props.projectCustomer}</span><span className="projectHeaderName"> - {moment(props.projectCreated).format("DD/MM/YYYY hh:mm a")}</span></strong>
                </h5>
                <div className="card-body">
                    <button className="btn btn-dark m-1 projectDetails btn-sm" type="button" data-toggle="collapse" id={props.projectID && "project" + props.projectID} data-target={props.projectID && "#projectDetails" + props.projectID}>Details</button>
                    <button className="btn btn-primary btn-sm m-1 float-right" id="editInventoryBtn" data-toggle="modal" data-target="#editProjectModal" data-project-state-index={props.projectStateIndex} onClick={props.editProject}><img src={require("../../images/edit-icon.png")} alt="Edit Project" /></button>
                    <button className="btn btn-danger btn-sm m-1 float-right" id="deleteInventoryBtn"><img src={require("../../images/delete-icon.png")} alt="Delete Project" /></button>
                    <div id={props.projectID && "projectDetails" + props.projectID} class="collapse" aria-labelledby="headingOne" data-parent={props.projectID && "#project" + props.projectID}>
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