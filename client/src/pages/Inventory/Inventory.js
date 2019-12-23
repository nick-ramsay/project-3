import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";
import "./style.css";

class Inventory extends Component {
    state = {

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
                            <td><button className="btn btn-success addInventoryBtn"><span><img src={require("../../images/new-icon.jpg")} alt="Add New Item" /> Add Item</span></button></td>
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
            </div>
        )
    }

}

export default Inventory;