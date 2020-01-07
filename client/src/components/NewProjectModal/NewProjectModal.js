import React from "react";
import "./style.css";

function NewProjectModal(props) {
    return (
        <div className="modal fade" id="newProjectModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create a New Project</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="newProjectName">Project Name</label>
                                    <input type="text" className="form-control" id="newProjectName" placeholder="Project Name" name="newProjectName" onChange={props.handleFormUpdate} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label for="newProjectStatus">Status</label>
                                    <select id="newProjectStatus" className="form-control" name="newProjectStatus" onChange={props.handleFormUpdate}>
                                        <option selected>New</option>
                                        <option>In Progress</option>
                                        <option>Hold</option>
                                        <option>Awaiting Client Feedback</option>
                                        <option>Complete</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="newProjectHours">Hours Logged</label>
                                    <input type="number" step="0.1" min="0" className="form-control" id="newProjectHours" defaultValue="0.0" placeholder="0.0" name="newProjectHours" onChange={props.handleFormUpdate} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="newProjectAddItem">Log Supplies Used</label>
                                    <select id="newProjectStatus" className="form-control" name="newProjectStatus" onChange={props.handleFormUpdate}>
                                        <option selected>To be populated w/ active inventory</option>
                                        <option>Placeholder 2</option>
                                    </select>
                                    <button type="button" className="btn btn-success mt-1">Add Item</button>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="addProjectComment">Add a Comment</label>
                                    <input type="text" className="form-control" id="addProjectComment" placeholder="Comment" name="addProjectComment" onChange={props.handleFormUpdate} />
                                    <button type="button" className="btn btn-dark mt-1">Add Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save Project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProjectModal;