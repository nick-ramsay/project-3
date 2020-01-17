import React from "react";
import moment from "moment";
import "./style.css";

function NewProjectModal(props) {
    return (
        <div className="modal fade" id="addProjectModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for="addProjectName">Project Name</label>
                                    <input type="text" className="form-control" id="addProjectName" placeholder="Project Name" name="addProjectName" onChange={props.handleFormUpdate} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label for="addProjectStatus">Status</label>
                                    <select id="addProjectStatus" className="form-control" name="addProjectStatus" onClick={props.setProjectCompleteDate} onChange={props.handleFormUpdate}>
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
                                    <label for="addProjectHours">Hours Logged</label>
                                    <input type="number" step="0.1" min="0" className="form-control" id="addProjectHours" defaultValue="0.0" placeholder="0.0" name="addProjectHours" onChange={props.handleFormUpdate} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="addProjectCustomer">Choose a Customer</label>
                                    <select id="addProjectCustomer" className="form-control" name="addProjectCustomer" onChange={props.handleFormUpdate}>
                                        <option selected>Choose a customer...</option>
                                        {props.customers.map((customer, index) => (
                                            <option key={customer._id} data-customer-id={customer._id}>{customer.firstName} {customer.lastName}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-8">
                                    <label for="addProjectItem">Log Supplies Used</label>
                                    <select id="addProjectItem" className="form-control" name="addProjectItem" defaultValue="-1" onChange={props.selectedProjectItem}>
                                        <option key="-1" data-inventory-id="0" selected>Choose an Item...</option>
                                        {props.itemOptions}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="addProjectItemQuantity">Log Supplies Used</label>
                                    <input type="number" step="1" min="0" className="form-control" id="addProjectItemQuantity" defaultValue="0" placeholder="0" name="addProjectItemQuantity" onChange={props.handleFormUpdate} />
                                </div>
                                <div className="form-group col-md-12 text-center">
                                    <button type="button" className="btn btn-success mt-1" onClick={props.handleAddNewItem}>Add Item</button>
                                </div>
                                <table class="table text-center">
                                    <thead>
                                        <tr>

                                            <th scope="col">Item</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.projectItems.map((projectItem, index) => (
                                            <tr id={projectItem._id} data-project-item-index={index}>
                                                <td>
                                                    {projectItem.newItemName}
                                                </td>
                                                <td>
                                                    {projectItem.newItemQuantity}
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-danger btn-sm" id={projectItem._id} data-project-item-index={index} onClick={props.handleRemoveNewItem}><strong>X</strong></button>
                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="addProjectComment">Add a Comment</label>
                                    <input type="text" className="form-control" id="addProjectComment" placeholder="Comment" name="addProjectComment" onChange={props.handleFormUpdate} />
                                </div>
                            </div>
                            <div className="form-group col-md-12 text-center">
                                <button type="button" className="btn btn-dark mt-1" onClick={props.handleAddComment}>Add Comment</button>
                            </div>
                            <div className="col-md-12">
                                <ul class="list-group">
                                    {props.projectComments.map((projectComment, index) => (
                                        <li key={index} className="list-group-item list-group-item-light">
                                            <p className="m-0 p-0 text-right" data-project-comment-index={index} onClick={props.handleRemoveComment}><small id="removeCommentBtn">x</small></p>
                                            <p className="m-0 p-0"><strong>{projectComment.comment}</strong></p>
                                            <p className="m-0 p-0"><small>{projectComment.created}</small></p>
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" id="submitProjectBtn" name="submitProjectBtn" onClick={props.handleSubmitProject}>Save Project</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewProjectModal;