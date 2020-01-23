import React, { Component } from "react";
import moment from "moment";
import Navbar from "../Navbar/Navbar";
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";
import EditProjectModal from "../../components/EditProjectModal/EditProjectModal";
import ProjectList from "../../components/ProjectList/ProjectList";
import API from "../../utils/API";
import "./style.css";


var client = {
    contextID: localStorage.getItem("crafterClient")
};

class Projects extends Component {

    state = {
        addProjectStatus: "New",
        customers: [],
        inventory: [],
        selectedProjectItem: {},
        projectItems: [],
        projectComments: [],
        projects: [],
        editProjectData: [],
        editProjectCustomer: {},
        addProjectCompleteDate: "",
        editProjectCompleteDate: "",
        addProjectCustomer: {},
        editInventoryTransactions: []
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
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
        this.setState({ selectedProjectItem: selectedProjectItemInfo });

        // Each time item is selected for project, info is saved to state.
    }

    setProjectCompleteDate = event => {
        event.preventDefault();
        var currentProjectStatus = this.state.addProjectStatus;

        if (currentProjectStatus === "Complete") {
            this.setState({ addProjectCompleteDate: new Date() });
        } else {
            this.setState({ addProjectCompleteDate: "" });
        }
    }

    setProjectCompleteDateEdit = event => {
        event.preventDefault();
        var currentProjectStatus = this.state.editProjectStatus;

        if (currentProjectStatus === "Complete") {
            this.setState({ editProjectCompleteDate: new Date() });
        } else {
            this.setState({ editProjectCompleteDate: "" });
        }
    }

    setAddProjectCustomer = event => {
        event.preventDefault();

        var selectedCustomerIndex = event.target.value;
        var selectedCustomerInfo = this.state.customers[selectedCustomerIndex];

        this.setState({ addProjectCustomer: selectedCustomerInfo });
    }

    handleAddNewItem = event => {
        event.preventDefault();

        var newProjectItemInfo = {};

        var currentProjectItems = this.state.projectItems;

        if (this.state.selectedProjectItem !== undefined && this.state.addProjectItemQuantity && this.state.addProjectItemQuantity > 0 && Object.keys(this.state.selectedProjectItem).length !== 0) {

            newProjectItemInfo = {
                newItemID: this.state.selectedProjectItem._id,
                newItemName: this.state.selectedProjectItem.itemName,
                newItemQuantity: this.state.addProjectItemQuantity,
                newItemPrice: this.state.selectedProjectItem.price,
                newItemTotal: (this.state.addProjectItemQuantity * this.state.selectedProjectItem.price),
            }

            currentProjectItems.push(newProjectItemInfo);
            this.setState({ projectItems: currentProjectItems });
            console.log(this.state.projectItems);
        } else {
            alert("Please complete project item info. Quantity must be greater than zero.");
        }
    }

    handleRemoveNewItem = event => {
        event.preventDefault();
        var currentNewItems = this.state.projectItems;
        var removeNewItemIndex = event.currentTarget.dataset.projectItemIndex;
        currentNewItems.splice(removeNewItemIndex);
        this.setState({ projectItems: currentNewItems });
    }

    handleAddComment = event => {
        event.preventDefault();
        console.log("Add commment clicked!");
        console.log(this.state.projectComments);

        event.preventDefault();

        var newProjectComment = {};

        var currentProjectComments = this.state.projectComments;

        if (this.state.addProjectComment && this.state.addProjectComment !== undefined) {

            newProjectComment = {
                comment: this.state.addProjectComment,
                created: moment().format("DD/MM/YYYY hh:mm A")
            }

            currentProjectComments.push(newProjectComment);
            this.setState({ projectComments: currentProjectComments });
            console.log(this.state.projectComments);
        } else {
            alert("Please complete project item info. Quantity must be greater than zero.");
        }
    }

    handleRemoveComment = event => {
        event.preventDefault();
        var currentComments = this.state.projectComments;
        var removeCommentIndex = event.currentTarget.dataset.projectCommentIndex;
        currentComments.splice(removeCommentIndex, 1);
        this.setState({ projectComments: currentComments });
    }

    editProject = event => {
        event.preventDefault();
        console.log("Clicked edit project!");

        var projectIndex = event.currentTarget.dataset.projectStateIndex;
        console.log(projectIndex);
        var editProjectData = this.state.projects[projectIndex];

        this.setState({
            originalEditProjectItems: editProjectData.items,
            editProjectID: editProjectData._id,
            editProjectName: editProjectData.name,
            editProjectCustomer: editProjectData.customer,
            editProjectStatus: editProjectData.status,
            editProjectHours: editProjectData.hours,
            editProjectItems: editProjectData.items,
            editProjectComments: editProjectData.comments
        })

        console.log(editProjectData);
    }

    handleEditAddNewItem = event => {
        event.preventDefault();

        var newProjectItemInfo = {};

        var currentProjectItems = this.state.editProjectItems;

        if (this.state.selectedProjectItem !== undefined && this.state.editProjectItemQuantity && this.state.editProjectItemQuantity > 0 && Object.keys(this.state.selectedProjectItem).length !== 0) {

            newProjectItemInfo = {
                newItemID: this.state.selectedProjectItem._id,
                newItemName: this.state.selectedProjectItem.itemName,
                newItemQuantity: this.state.editProjectItemQuantity,
                newItemPrice: this.state.selectedProjectItem.price,
                newItemTotal: (this.state.editProjectItemQuantity * this.state.selectedProjectItem.price),
            }

            currentProjectItems.push(newProjectItemInfo);
            this.setState({ editProjectItems: currentProjectItems });
            console.log(this.state.editProjectItems);
        } else {
            alert("Please complete project item info. Quantity must be greater than zero.");
        }
    }

    handleEditRemoveNewItem = event => {
        event.preventDefault();
        var currentNewItems = this.state.editProjectItems;
        var removeNewItemIndex = event.currentTarget.dataset.projectItemIndex;
        currentNewItems.splice(removeNewItemIndex);
        this.setState({ editProjectItems: currentNewItems });
        console.log(this.state.editProjectItems);
    }

    calculateInventoryTotal = (itemsArray) => {
        var inventoryTotal = 0;
        return inventoryTotal;
    }

    hourlyTotal = (hours, hourlyRate) => {
        var hourlyTotalFees = 0;
        hourlyTotalFees = hours * hourlyRate;
        return hourlyTotalFees;
    }

    handleSubmitProject = event => {
        event.preventDefault();
        console.log("Called create project!");

        var projectInfo = {
            contextID: localStorage.getItem("crafterClient"),
            name: "",
            status: "",
            createdDate: "",
            completedDate: "",
            hours: 0,
            customer: [],
            items: [],
            comments: [],
            billed: false
        }

        if (this.state.addProjectName && this.state.addProjectStatus) {
            var totalInventoryBillableAmount = 0

            for (var i = 0; i < this.state.projectItems.length; i++) {
                totalInventoryBillableAmount += this.state.projectItems[i].newItemTotal
            }

            projectInfo = {
                contextID: localStorage.getItem("crafterClient"),
                name: this.state.addProjectName,
                status: this.state.addProjectStatus,
                customer: this.state.addProjectCustomer,
                createdDate: new Date(),
                completedDate: this.state.addProjectCompleteDate,
                hours: this.state.addProjectHours,
                hourlyRate: this.state.accountData.hourlyRate,
                items: this.state.projectItems,
                comments: this.state.projectComments,
                totalInventoryFees: totalInventoryBillableAmount,
                totalHourlyFees: (this.state.addProjectHours * this.state.accountData.hourlyRate),
                billed: false
            }

            for (var i = 0; i < projectInfo.items.length; i++) {
                var inventoryTransactionData = {
                    inventoryID: projectInfo.items[i].newItemID,
                    quantity: (projectInfo.items[i].newItemQuantity * -1)
                }
                console.log(inventoryTransactionData);
                API.inventoryTransaction(inventoryTransactionData).then(res => console.log(res));
            }

            API.createProject(projectInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            document.location.reload(true);

        }
        else {
            console.log("Sorry... form not complete.");
            alert("Sorry... form not complete.");
        }
    }

    handleEditProject = event => {
        event.preventDefault();
        console.log("Called edit project!");

        var editProjectInfo = {
            contextID: localStorage.getItem("crafterClient"),
            projectID: "",
            name: "",
            status: "",
            createdDate: "",
            completedDate: "",
            hours: 0,
            customer: [],
            items: [],
            comments: [],
            totalInventoryFees: 0,
            totalHourlyFees: 0,
            billed: false
        }

        if (this.state.editProjectName && this.state.editProjectStatus) {
            var totalInventoryBillableAmount = 0

            for (var i = 0; i < this.state.editProjectItems.length; i++) {
                totalInventoryBillableAmount += this.state.editProjectItems[i].newItemTotal
            }

            editProjectInfo = {
                contextID: localStorage.getItem("crafterClient"),
                projectID: this.state.editProjectID,
                name: this.state.editProjectName,
                status: this.state.editProjectStatus,
                customer: this.state.editProjectCustomer,
                completedDate: this.state.editProjectCompleteDate,
                hours: this.state.editProjectHours,
                hourlyRate: this.state.accountData.hourlyRate,
                items: this.state.editProjectItems,
                comments: this.state.editProjectComments,
                totalInventoryFees: totalInventoryBillableAmount,
                totalHourlyFees: (this.state.editProjectHours * this.state.accountData.hourlyRate),
                billed: false
            }

            /*for (var i = 0; i < editProjectInfo.items.length; i++) {
                var inventoryTransactionData = {
                    inventoryID: projectInfo.items[i].newItemID,
                    quantity: (projectInfo.items[i].newItemQuantity * -1)
                }
                console.log(inventoryTransactionData);
                API.inventoryTransaction(inventoryTransactionData).then(res => console.log(res));
            }*/
            //^^^ To be used to update inventoryTotals depending upon what is changed

            API.editProject(editProjectInfo).then(res => console.log(res));
            document.location.reload(true);

        }
        else {
            console.log("Sorry... form not complete.");
            alert("Sorry... form not complete.");
        }
    }

    handleEditAddComment = event => {
        event.preventDefault();
        console.log("Add comment clicked via edit page!");

        var newProjectComment = {};

        var currentProjectComments = this.state.editProjectComments;

        if (this.state.editProjectComment && this.state.editProjectComment !== undefined) {

            newProjectComment = {
                comment: this.state.editProjectComment,
                created: moment().format("DD/MM/YYYY hh:mm A")
            }

            currentProjectComments.push(newProjectComment);
            this.setState({ editProjectComments: currentProjectComments });
            console.log(this.state.editProjectComments);
        } else {
            alert("Please add text for your comment.");
        }
    }

    handleEditRemoveComment = event => {
        event.preventDefault();
        var currentComments = this.state.editProjectComments;
        var removeCommentIndex = event.currentTarget.dataset.projectCommentIndex;
        currentComments.splice(removeCommentIndex, 1);
        this.setState({ editProjectComments: currentComments });

        console.log(currentComments);
        console.log(removeCommentIndex);
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

                        {this.state.projects.map((project, index) => (
                            <ProjectList
                                projectStateIndex={index}
                                projectID={project._id}
                                projectName={project.name}
                                projectStatus={project.status}
                                projectCustomer={project.customer}
                                projectCreated={project.createdDate}
                                projectHours={project.hours}
                                projectRate={project.hourlyRate}
                                projectItems={project.items}
                                projectComments={project.comments}
                                editProject={this.editProject}
                            />
                        ))
                        }

                    </div>
                </div>
                <NewProjectModal
                    handleFormUpdate={this.handleFormUpdate}
                    handleSubmitProject={this.handleSubmitProject}
                    selectedProjectItem={this.selectedProjectItem}
                    projectItems={this.state.projectItems}
                    projectComments={this.state.projectComments}
                    handleAddNewItem={this.handleAddNewItem}
                    handleAddComment={this.handleAddComment}
                    customers={this.state.customers}
                    inventory={this.state.inventory}
                    itemOptions={itemOptions}
                    handleRemoveNewItem={this.handleRemoveNewItem}
                    handleRemoveComment={this.handleRemoveComment}
                    setProjectCompleteDate={this.setProjectCompleteDate}
                    setAddProjectCustomer={this.setAddProjectCustomer}
                />
                <EditProjectModal
                    handleFormUpdate={this.handleFormUpdate}
                    editProjectName={this.state.editProjectName}
                    editProjectStatus={this.state.editProjectStatus}
                    editProjectItems={this.state.editProjectItems}
                    editProjectComments={this.state.editProjectComments}
                    editProjectCustomer={this.state.editProjectCustomer}
                    editProjectHours={this.state.editProjectHours}
                    setProjectCompleteDateEdit={this.setProjectCompleteDateEdit}
                    handleRemoveNewItem={this.handleRemoveNewItem}
                    handleRemoveComment={this.handleRemoveComment}
                    handleEditAddNewItem={this.handleEditAddNewItem}
                    handleEditRemoveNewItem={this.handleEditRemoveNewItem}
                    handleEditAddComment={this.handleEditAddComment}
                    handleEditRemoveComment={this.handleEditRemoveComment}
                    handleAddComment={this.handleAddComment}
                    editProject={this.editProject}
                    handleEditProject={this.handleEditProject}
                    selectedProjectItem={this.selectedProjectItem}
                    customers={this.state.customers}
                    inventory={this.state.inventory}
                    itemOptions={itemOptions}
                />
            </div>
        )
    }

}

export default Projects;