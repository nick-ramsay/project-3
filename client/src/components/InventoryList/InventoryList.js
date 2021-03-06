import React from "react";
import "./style.css";
import moment from "moment";

function InventoryList(props) {
    return (
        <div className="col-md-12 pb-2">
            <div class="card mb-2 text-center">
                <h5 className="card-header" id="inventoryHeader1">
                    <span><strong>{props.itemName && props.itemName}<span id="cancelledDate">{props.cancelled && " [Cancelled: " + moment(props.cancelled).format("DD/MM/YYYY hh:mm a") + "]"}</span></strong></span>
                </h5>
                <div className="card-body">
                    <p><strong>Manufacturer: </strong>{props.manufacturer && props.manufacturer}</p>
                    <p><strong>Current Stock: </strong>{props.quantity && props.quantity}</p>
                    <p><strong>Price: </strong>${props.price && props.price.toFixed(2)}</p>
                    <div className="row justify-content-center">
                        {(props.quantity > 0 && !props.cancelled) && <button className="btn btn-sm m-1" id="returnInventoryBtn" data-toggle="modal" data-target="#returnInventoryModal" data-inventory-state-index={props.inventoryStateIndex} data-return-inventory-id={props.inventoryID} name="returnInventoryBtn" onClick={props.returnInventory}>Log Returned Inventory</button>}
                        {!props.cancelled && <button className="btn btn-sm m-1" id="purchaseInventoryBtn" data-toggle="modal" data-target="#purchaseInventoryModal" data-inventory-state-index={props.inventoryStateIndex} data-purchase-inventory-id={props.inventoryID} name="purchaseInventoryBtn" onClick={props.purchaseInventory}>Log Purchased Inventory</button>}
                    </div>
                    <div className="row justify-content-center">
                        <button className="btn btn-sm m-1" id="editInventoryBtn" data-toggle="modal" data-target="#editInventoryModal" data-inventory-state-index={props.inventoryStateIndex} onClick={props.editInventory}>Edit</button>
                        {!props.cancelled && <button className="btn btn-sm red-btn m-1" id="deleteinventoryBtn" data-cancel-inventory-id={props.inventoryID} name="deleteInventoryBtn" onClick={props.cancelInventory}>Cancel</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryList;