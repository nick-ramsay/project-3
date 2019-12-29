import React from "react";
import "./style.css";

function NewInventoryForm(props) {
    return (
        <div className="container">
            <div className="row h-70 justify-content-center align-items-center">
                <div className="col-md-12">
                    <form>
                        <h5 className="text-left">Inventory Details</h5>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label for="addItemName">Add Inventory Item Name</label>
                                <input type="text" className="form-control" id="addItemName" placeholder="Item Name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-12">
                                <label for="addInventoryPostcode">Add Item Quantity</label>
                                <input type="number" placeholder="0" min="0" className="form-control" id="addInventoryPostcode" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewInventoryForm;