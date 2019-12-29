import React from "react";
import "./style.css";
import NewInventoryForm from "../NewInventoryForm/NewInventoryForm"

function NewInventoryModal(props) {
    return (
        <div className="modal fade" id="newInventoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Inventory Item</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <NewInventoryForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary addInventoryItemBtn">Add Inventory Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewInventoryModal;