import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";
import ProjectList from "../../components/ProjectList/ProjectList";
import API from "../../utils/API";
import "./style.css";

var client = {
    contextID: localStorage.getItem("crafterClient")
};

class Projects extends Component {
    
    state = {
        customers:[],
        inventory: [],
        selectedProjectItem: {}
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.getAccountData();
        this.getProjects();
        this.getInventory();
        this.getCustomers();
    }

    getAccountData = () => {
        API.getAccountData(client).then(res => this.setState({ accountData: res.data }))
    }

    getProjects = () => {
        API.getProjects(client).then(res => this.setState({ projects: res.data }))
    }

    getInventory = () => {
        API.getInventory(client).then(res => this.setState({ inventory: res.data }))
    }

    getCustomers = () => {
        API.getCustomers(client).then(res => this.setState({ customers: res.data }))
    }

    selectedProjectItem = event => {
        event.preventDefault();

        var selectedProjectItemIndex = event.target.value;
        var selectedProjectItemInfo = this.state.inventory[selectedProjectItemIndex];
        this.setState({selectedProjectItem: selectedProjectItemInfo});

        // Each time item is selected for project, info is saved to state.
    }

    handleAddItem = event => {
        event.preventDefault();

        var newProjectItemInfo = {
            newItemID: event.currentTarget.dataset.inventoryid,
            newItemName: this.state.addProjectItem,
            newItemQuantity: this.state.addProjectItemQuantity
        }

        console.log(newProjectItemInfo);
    }

    handleAddComment = event => {
        event.preventDefault();
        console.log("Add commment clicked!");
        console.log(this.state.addProjectComment);
    }

    handleSubmitProject = event => {
        event.preventDefault();
        console.log("Called create project!");

        var projectInfo = {
            contextID: localStorage.getItem("crafterClient"),
            name: "",
            status: "",
            createdDate: "",
            hours: 0,
            customer: "",
            items: [],
            comments: []
        }

        if (this.state.addProjectName && this.state.addProjectStatus && this.state.addProjectHours) {
            projectInfo = {
                contextID: localStorage.getItem("crafterClient"),
                name: this.state.addProjectName,
                status: this.state.addProjectStatus,
                customer: this.state.addProjectCustomer,
                createdDate: new Date(),
                hours: this.state.addProjectHours,
                items: [],
                comments: []
            }
            
            API.createProject(projectInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            window.location.href = "/projects";

        }
        else {
            console.log("Sorry... form not complete.");
            alert("Sorry... form not complete.");
        }
    }

    render() {
        var itemOptions = [];      
        itemOptions = this.state.inventory.map((inventory, index) => (
            <option key={inventory._id} value={index} data-inventory-id={inventory._id} defaultValue={inventory.itemName}>
                {inventory.itemName}
            </option>
        ))

        return (
            <div>
                <Navbar />
                <div className="container pt-4">
                    <div className="col-md-12 my-5 mb-4 px-5 bg-white rounded">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Projects</strong></h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 p-2 d-flex justify-content-center">
                                <td><button data-toggle="modal" data-target="#addProjectModal" className="btn btn-success" id="addProjectBtn"><span><img src={require("../../images/new-icon.jpg")} alt="New Project" /> New Project</span></button></td>
                            </div>
                        </div>
                        <div class="row">
                            <ProjectList />
                        </div>
                    </div>
                </div>
                <NewProjectModal
                    handleFormUpdate={this.handleFormUpdate}
                    handleSubmitProject={this.handleSubmitProject}
                    selectedProjectItem={this.selectedProjectItem}
                    handleAddItem={this.handleAddItem}
                    handleAddComment={this.handleAddComment}
                    customers={this.state.customers}
                    inventory={this.state.inventory}
                    itemOptions={itemOptions}
                />
            </div>
        )
    }

}

export default Projects;