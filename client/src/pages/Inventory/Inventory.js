import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import InventoryList from "../../components/InventoryList/InventoryList";
import EditInventoryModal from "../../components/EditInventoryModal/EditInventoryModal";
import PurchaseInventoryModal from "../../components/PurchaseInventoryModal/PurchaseInventoryModal";
import ReturnInventoryModal from "../../components/ReturnInventoryModal/ReturnInventoryModal";
import NewInventoryModal from "../../components/NewInventoryModal/NewInventoryModal";
import API from "../../utils/API";
import "./style.css";

var client = {
    contextID: localStorage.getItem("crafterClient")
};

class Inventory extends Component {
    state = {
        inventory: []
    }

    componentDidMount() {
        this.getInventory();
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    getInventory = () => {
        API.getInventory(client).then(res => this.setState({ inventory: res.data }))
    }

    handleNewInventoryItemSubmit = event => {
        event.preventDefault();

        var newInventoryItemInfo;

        if (this.state.addInventoryName && this.state.addManufacturerName) {
            newInventoryItemInfo = {
                contextID: localStorage.getItem("crafterClient"),
                itemName: this.state.addInventoryName,
                manufacturer: this.state.addManufacturerName,
                quantity: 0, //Always set initial quantity to zero... clients must add inventory with an inventory purchase,
                price: this.state.addInventoryPrice
            }
            API.createInventoryItem(newInventoryItemInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            window.location.href = "/inventory";

        }
        else {
            console.log("Sorry... form not complete.");
            alert("Sorry... form not complete.");
        }
    }

    cancelInventory = event => {
        event.preventDefault();
        var cancelledInventoryInfo = {
            inventoryID: event.currentTarget.dataset.cancelInventoryId,
            cancelledDate: new Date()
        }
        API.cancelInventory(cancelledInventoryInfo).then(res => console.log(res));
        window.location.href = "/inventory";
    }

    reactivateInventory = event => {
        event.preventDefault();
        var reactivateInventoryInfo = {
            inventoryID: event.currentTarget.dataset.reactivateInventoryId
        }

        API.reactivateInventory(reactivateInventoryInfo).then(res => console.log(res));
        window.location.href = "/inventory";
    }

    editInventory = event => {
        var editedInventoryItem = event.currentTarget.dataset.inventoryStateIndex;
        var editedInventoryInfo = this.state.inventory[editedInventoryItem]

        this.setState({
            editInventoryID: editedInventoryInfo._id,
            editInventoryItemName: editedInventoryInfo.itemName,
            editInventoryManufacturer: editedInventoryInfo.manufacturer,
            editInventoryCancelled: editedInventoryInfo.cancelled,
            editInventoryPrice: editedInventoryInfo.price
        })
    }

    handleEditInventorySubmit = event => {
        event.preventDefault();

        var editInventoryInfo;

        if (this.state.editInventoryItemName && this.state.editInventoryManufacturer && this.state.editInventoryPrice) {
            editInventoryInfo = {
                inventoryID: this.state.editInventoryID,
                itemName: this.state.editInventoryItemName,
                manufacturer: this.state.editInventoryManufacturer,
                price: this.state.editInventoryPrice
            }
            API.editInventory(editInventoryInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            window.location.href = "/inventory";
        }
        else {
            alert("Sorry... form not complete.");
        }
    }

    purchaseInventory = event => {
        var purchasedInventoryItem = event.currentTarget.dataset.inventoryStateIndex;
        var purchasedInventoryInfo = this.state.inventory[purchasedInventoryItem]

        this.setState({
            purchaseInventoryID: purchasedInventoryInfo._id,
            purchaseInventoryItemName: purchasedInventoryInfo.itemName
        })
    }

    handlePurchaseInventorySubmit = event => {
        event.preventDefault();

        var inventoryInfo;
        var transactionInfo;

        if (this.state.purchaseInventoryCost && this.state.purchaseInventoryQuantity) {
            inventoryInfo = {
                inventoryID: this.state.purchaseInventoryID,
                cost: this.state.purchaseInventoryCost,
                quantity: this.state.purchaseInventoryQuantity
            }

            transactionInfo = {
                contextID: localStorage.getItem("crafterClient"),
                inventoryID: this.state.purchaseInventoryID,
                projectID: -1,
                transactionDate: new Date(),
                transactionType: "inventory_purchase", //inventory_purchase or project_revenue
                transactionQuantity: this.state.purchaseInventoryQuantity,
                transactionUnitAmount: this.state.purchaseInventoryCost,
                totalAmount: (this.state.purchaseInventoryQuantity * this.state.purchaseInventoryCost * -1)
            }

            API.inventoryTransaction(inventoryInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            API.postTransaction(transactionInfo).then(res => console.log(res))
            window.location.href = "/inventory";
        }
        else {
            alert("Sorry... form not complete.");
        }
    }

    returnInventory = event => {
        var returnedInventoryItem = event.currentTarget.dataset.inventoryStateIndex;
        var returnedInventoryInfo = this.state.inventory[returnedInventoryItem]

        this.setState({
            returnInventoryID: returnedInventoryInfo._id,
            returnInventoryItemName: returnedInventoryInfo.itemName
        })
    }

    handleReturnInventorySubmit = event => {
        event.preventDefault();

        var inventoryInfo;
        var transactionInfo;

        if (this.state.returnInventoryCost && this.state.returnInventoryQuantity) {
            inventoryInfo = {
                inventoryID: this.state.returnInventoryID,
                cost: this.state.returnInventoryCost,
                quantity: (this.state.returnInventoryQuantity * -1)
            }

            transactionInfo = {
                contextID: localStorage.getItem("crafterClient"),
                inventoryID: this.state.purchaseInventoryID,
                projectID: -1,
                transactionDate: new Date(),
                transactionType: "inventory_return", //inventory_purchase or project_revenue
                transactionQuantity: this.state.returnInventoryQuantity,
                transactionUnitAmount: this.state.returnInventoryCost,
                totalAmount: (this.state.returnInventoryQuantity * this.state.returnInventoryCost)
            }
            API.inventoryTransaction(inventoryInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            API.postTransaction(transactionInfo).then(res => console.log(res))
            window.location.href = "/inventory";
        }
        else {
            alert("Sorry... form not complete.");
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container pt-4">
                    <div className="col-md-12 my-5 mb-4 px-5 bg-white rounded">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Inventory</strong></h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 p-2 d-flex justify-content-center">
                                <td><button className="btn btn-success addInventoryBtn" data-toggle="modal" data-target="#newInventoryModal"><span><img src={require("../../images/new-icon.jpg")} alt="Add New Item" /> Add Item</span></button></td>
                            </div>
                        </div>
                        {this.state.inventory.map((inventory, index) => (
                            <InventoryList
                                editInventory={this.editInventory}
                                purchaseInventory={this.purchaseInventory}
                                returnInventory={this.returnInventory}
                                inventoryStateIndex={index}
                                inventoryID={inventory._id}
                                itemName={inventory.itemName}
                                manufacturer={inventory.manufacturer}
                                quantity={inventory.quantity}
                                cancelled={inventory.cancelled}
                                cancelInventory={this.cancelInventory}
                                price={inventory.price}
                            />
                        ))
                        }
                    </div>
                </div>
                <NewInventoryModal
                    handleFormUpdate={this.handleFormUpdate}
                    handleNewInventoryItemSubmit={this.handleNewInventoryItemSubmit}
                    addInventoryPrice={"5.00"}
                />
                <EditInventoryModal
                    handleFormUpdate={this.handleFormUpdate}
                    reactivateInventory={this.reactivateInventory}
                    handleEditInventorySubmit={this.handleEditInventorySubmit}
                    editInventoryID={this.state.editInventoryID}
                    editInventoryItemName={this.state.editInventoryItemName}
                    editInventoryManufacturer={this.state.editInventoryManufacturer}
                    editInventoryPrice={this.state.editInventoryPrice}
                    editInventoryCancelled={this.state.editInventoryCancelled}
                />
                <PurchaseInventoryModal
                    handleFormUpdate={this.handleFormUpdate}
                    purchaseInventoryItemName={this.state.purchaseInventoryItemName}
                    handlePurchaseInventorySubmit={this.handlePurchaseInventorySubmit}
                />
                <ReturnInventoryModal
                    handleFormUpdate={this.handleFormUpdate}
                    returnInventoryItemName={this.state.returnInventoryItemName}
                    handleReturnInventorySubmit={this.handleReturnInventorySubmit}
                />
            </div>
        )
    }

}

export default Inventory;