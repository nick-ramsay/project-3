import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";
import NewInventoryModal from "../../components/NewInventoryModal/NewInventoryModal";
import API from "../../utils/API";
import "./style.css";

class Inventory extends Component {
    state = {
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleNewInventoryItemSubmit = event => {
        event.preventDefault();
        var newInventoryItemInfo;

        if (
            (this.state.addInventoryName && this.state.addInventoryQuantity) && this.state.addInventoryQuantity >= 0
        ) {
            newInventoryItemInfo = {
                contextID: localStorage.getItem("crafterClient"),
                itemName: this.state.addInventoryName,
                quantity: this.state.addInventoryQuantity
            }
            API.createInventoryItem(newInventoryItemInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            window.location.href = "/inventory";

        } else if (this.state.addInventoryQuantity < 0) {
            console.log("Inventory quantity must be greater than or equal to zero");
            alert("Inventory quantity must be greater than or equal to zero");
        } 
        else {
            console.log("Sorry... form not complete.");
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
                        <table className="table table-striped col-md-12">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Nails</td>
                                    <td>5</td>
                                    <td className = "d-flex justify-content-end"><button className="btn btn-primary m-1 editInventoryBtn"><img src={require("../../images/edit-icon.png")} alt="Edit Item" /></button>
                                    <button className="btn btn-danger m-1 deleteInventoryBtn"><img src={require("../../images/delete-icon.png")} alt="Delete Item" /></button></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Duct Tape</td>
                                    <td>3</td>
                                    <td className = "d-flex justify-content-end"><button className="btn btn-primary m-1 editInventoryBtn"><img src={require("../../images/edit-icon.png")} alt="Edit Item" /></button>
                                    <button className="btn btn-danger m-1 deleteInventoryBtn"><img src={require("../../images/delete-icon.png")} alt="Delete Item" /></button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <NewProjectModal />
                <NewInventoryModal 
                    handleFormUpdate = {this.handleFormUpdate}
                    handleNewInventoryItemSubmit = {this.handleNewInventoryItemSubmit}
                />
            </div>
        )
    }

}

export default Inventory;