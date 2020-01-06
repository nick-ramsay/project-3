import React from "react";
import "./style.css";

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
                        <div className="container">
                            <div className="row h-70 justify-content-center align-items-center">
                                <div className="col-md-12">
                                    <form>
                                        <h5 className="text-left">Inventory Details</h5>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label for="addItemName">Add Inventory Item Name</label>
                                                <input type="text" className="form-control" id="addInventoryName" placeholder="Item Name" name="addInventoryName" onChange={props.handleFormUpdate}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label for="addManufacturerName">Add Manufacturer Item Name</label>
                                                <input type="text" className="form-control" id="addManufacturerName" placeholder="Manufacturer Name" name="addManufacturerName" onChange={props.handleFormUpdate}/>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                <label for="addInventoryPrice">Add Inventory Price</label>
                                                <input type="number" className="form-control" id="addInventoryPrice" step="0.01" min="0" defaultValue={props.addInventoryPrice} name="addInventoryPrice" onChange={props.handleFormUpdate}/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" id="addInventoryItemBtn" name="addInventoryItemBtn" onClick={props.handleNewInventoryItemSubmit}>Add Inventory Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewInventoryModal;