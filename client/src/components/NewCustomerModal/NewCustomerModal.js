import React from "react";
import "./style.css";
import NewCustomerForm from "../NewCustomerForm/NewCustomerForm"

function NewCustomerModal(props) {
    return (
        <div className="modal fade" id="newCustomerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><strong>Add a New Customer</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <NewCustomerForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary addCustomerBtn">Add Customer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCustomerModal;