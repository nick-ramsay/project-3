import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";
import ProjectList from "../../components/ProjectList/ProjectList";
import API from "../../utils/API";
import "./style.css";

class Projects extends Component {
    state = {

    }

    componentDidMount() {
        this.getProjects();
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    getProjects = () => {
        API.getProjects().then(res => this.setState({ projects: res.data }))
    }

    render() {
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
                                <td><button data-toggle="modal" data-target="#newProjectModal" className="btn btn-success newProjectBtn"><span><img src={require("../../images/new-icon.jpg")} alt="New Project" /> New Project</span></button></td>
                            </div>
                        </div>
                        <div class="row">
                            <ProjectList />
                        </div>
                    </div>
                </div>
                <NewProjectModal />
            </div>
        )
    }

}

export default Projects;