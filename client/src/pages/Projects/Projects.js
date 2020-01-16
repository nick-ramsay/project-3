import React, { Component } from "react";
import moment from "moment";
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
        customers: [],
        inventory: [],
        selectedProjectItem: {},
        projectItems: [],
        projectComments: [],
        projects: []
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
        this.setState({projectItems: currentNewItems});
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
        currentComments.splice(removeCommentIndex,1);
        this.setState({projectComments: currentComments});

        console.log(currentComments);
        console.log(removeCommentIndex);
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

        if (this.state.addProjectName && this.state.addProjectStatus) {
            projectInfo = {
                contextID: localStorage.getItem("crafterClient"),
                name: this.state.addProjectName,
                status: this.state.addProjectStatus,
                customer: this.state.addProjectCustomer,
                createdDate: new Date(),
                hours: this.state.addProjectHours,
                hourlyRate: this.state.accountData.hourlyRate,
                items: this.state.projectItems,
                comments: this.state.projectComments
            }

            API.createProject(projectInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            //window.location.href = "/projects";

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
                />
            </div>
        )
    }

}

export default Projects;