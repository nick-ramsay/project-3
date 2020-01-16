import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import API from "../../utils/API";
import UnbilledProjectQueue from "../../components/UnbilledProjectQueue/UnbilledProjectQueue";
import BillList from "../../components/BillList/BillList";

var client = {
    contextID: localStorage.getItem("crafterClient")
};

class Billing extends Component {
    state = {
        dummyData: ["Dummy Data 1","Dummy Data 2"]
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

    render() {
        return (
            <div>
                <Navbar />
                <div className="container pt-4">
                    <div className="col-md-12 my-5 mb-4 px-5 bg-white rounded">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Billing</strong></h2>
                                <UnbilledProjectQueue 
                                    projectData={this.state.projects}
                                />
                                <h3><strong>Existing Bills</strong></h3>
                                <BillList
                                    dummyData={this.state.dummyData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Billing;