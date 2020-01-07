import React from "react";
import moment from "moment";
import "./style.css";

function PurchaseInventoryModal(props) {

    return (
        <div className="modal fade" id="purchaseInventoryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><strong>{props.purchaseInventoryItemName && "Purchase " + props.purchaseInventoryItemName}</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row h-70 justify-content-center align-items-center">
                            <div className="col-md-12">
                                <form>
                                    <h5 className="text-left">Purchase Details</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="purchaseInventoryCost">Cost Per Unit ($)</label>
                                            <input type="number" min="0" step="0.01" className="form-control" id="purchaseInventoryCost" defaultValue="0.00" name="purchaseInventoryCost" onChange={props.handleFormUpdate} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="purchaseInventoryQuantity">Quantity Purchased</label>
                                            <input type="number" min="0" step="0" className="form-control" id="purchaseInventoryQuantity" defaultValue="0" name="purchaseInventoryQuantity" onChange={props.handleFormUpdate} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" id="purchaseInventorySubmitBtn" name="purchaseInventorySubmitBtn" onClick={props.handlePurchaseInventorySubmit}>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseInventoryModal;