import React from "react";
import "./style.css";

function InventoryList(props) {
    return (
        <div className="col-md-12">
            <div class="card mb-2">
                <h5 className="card-header" id="inventoryHeader1">
                    <span><strong>{props.itemName && props.itemName}<span id="cancelledDate">{props.cancelled && " [Cancelled: " + props.cancelled +"]"}</span></strong></span>
                </h5>
                <div className="card-body">
                    <p><strong>Manufacturer: </strong>{props.manufacturer && props.manufacturer}</p>
                    <p><strong>Current Stock: </strong>{props.quantity && props.quantity}</p>
                    <button className="btn btn-primary m-1 float-right" id="editInventoryBtn" data-toggle="modal" data-target="#editinventoryModal" data-inventory-state-index={props.inventoryStateIndex} onClick={props.editInventory}><img src={require("../../images/edit-icon.png")} alt="Edit inventory" /></button>
                    {!props.cancelled && <button className="btn btn-danger m-1 float-right" id="deleteinventoryBtn" data-cancel-inventory-id={props.inventoryID} name="deleteInventoryBtn" onClick={props.cancelInventory}><img src={require("../../images/delete-icon.png")} alt="End Date Inventory" /></button>}
                </div>
            </div>
        </div>
    )
}

export default InventoryList;