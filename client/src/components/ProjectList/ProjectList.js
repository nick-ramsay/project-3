import React from "react";
import moment from "moment";
import "./style.css";

function ProjectList(props) {
    return (
        <div className="col-md-12">
            <div class="card mb-2">
                <h5 className="card-header" id="projectHeader1">
                    <strong><span className="projectStatus">"{props.projectName}" - </span><span className="projectHeaderName">{props.projectStatus}</span><span className="projectHeaderName"> for {props.projectCustomer.firstName} {props.projectCustomer.lastName}</span></strong>
                </h5>
                <div className="card-body">
                    <button className="btn btn-dark m-1 projectDetails btn-sm" type="button" data-toggle="collapse" id={props.projectID && "project" + props.projectID} data-target={props.projectID && "#projectDetails" + props.projectID}>Details</button>
                    <button className="btn btn-primary btn-sm m-1 float-right" id="editInventoryBtn" data-toggle="modal" data-target="#editProjectModal" data-project-state-index={props.projectStateIndex} onClick={props.editProject}><img src={require("../../images/edit-icon.png")} alt="Edit Project" /></button>
                    <div id={props.projectID && "projectDetails" + props.projectID} class="collapse" aria-labelledby="headingOne" data-parent={props.projectID && "#project" + props.projectID}>
                        <div class="card-body">
                            <p>Project: {props.projectName}</p>
                            <p>Customer: {props.projectCustomer.firstName} {props.projectCustomer.lastName}</p>
                            <p>Project Status: {props.projectStatus}</p>
                            <p>Project Start Date: {moment(props.projectCreated).format("DD/MM/YYYY hh:mm a")}</p>
                            <p>{props.projectCompleted && "Project Complete Date: " + moment(props.projectCompleted).format("DD/MM/YYYY hh:mm a")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectList;
