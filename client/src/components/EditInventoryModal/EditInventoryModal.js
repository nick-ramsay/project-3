import React from "react";
import moment from "moment";
import "./style.css";

function EditInventoryModal(props) {

    return (
        <div className="modal fade" id="editInventoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><strong>{props.editInventoryItemName && props.editInventoryItemName}</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row h-70 justify-content-center align-items-center">
                            <div className="col-md-12">
                                <form>
                                    <div className="form-row d-flex justify-content-center mb-1">
                                        {props.editInventoryCancelled && <button type="button" className="btn btn-success" id="reactivateInventoryBtn" data-reactivate-inventory-id={props.editInventoryID} name="reactivateInventoryBtn" onClick={props.reactivateInventory}>Reactivate Inventory</button>}
                                    </div>
                                    <h5 className="text-left">Inventory Details</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="editInventoryItemName">Item Name</label>
                                            <input type="text" className="form-control" id="editInventoryItemName" defaultValue={props.editInventoryItemName} name="editInventoryItemName" onChange={props.handleFormUpdate} />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="editInventoryManufacturer">Manufacturer</label>
                                            <input type="text" className="form-control" id="editInventoryManufacturer" defaultValue={props.editInventoryManufacturer} name="editInventoryManufacturer" onChange={props.handleFormUpdate} />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label for="editInventoryPrice">Price</label>
                                            <input type="number" min="0" step="0.01" className="form-control" id="editInventoryPrice" defaultValue={props.editInventoryPrice} name="editInventoryPrice" onChange={props.handleFormUpdate} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" id="editInventorySubmitBtn" name="editInventorySubmitBtn" onClick={props.handleEditInventorySubmit}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditInventoryModal;