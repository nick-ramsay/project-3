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
        dummyData: ["Dummy Data 1", "Dummy Data 2"],
        bills: [],
        accountData: []
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getAccountData();
        this.getBillData();
        this.getCompleteProjects();
        this.getInventory();
        this.getCustomers();
    }


    getAccountData = () => {
        API.getAccountData(client).then(res => this.setState({ accountData: res.data }))
    }

    getBillData = () => {
        API.getBillData(client).then(res => this.setState({ bills: res.data}));
    }

    getCompleteProjects = () => {
        API.getCompleteProjects(client).then(res => this.setState({ projects: res.data }))
    }

    getInventory = () => {
        API.getInventory(client).then(res => this.setState({ inventory: res.data }))
    }

    getCustomers = () => {
        API.getCustomers(client).then(res => this.setState({ customers: res.data }))
    }

    generateBill = event => {
        event.preventDefault();

        var selectedProjectIndex = event.currentTarget.dataset.projectStateIndex;
        console.log(selectedProjectIndex);

        var selectedProjectInfo = this.state.projects[selectedProjectIndex];
        console.log(selectedProjectInfo);

        var billInfo = {
            contextID: client.contextID,
            created: new Date(),
            projectInfo: selectedProjectInfo,
            billedAmount: 0,
            revenueCollected: 0
        }

        var markProjectBilledInfo = {
            projectID: selectedProjectInfo._id
        }

        API.createBill(billInfo)
            .then(res => console.log(res))
            .then(
                API.markProjectBilled(markProjectBilledInfo)
                    .then(res => console.log(res))
                    .then(document.location.reload(true))
            );
    }

    showState = event => {
        event.preventDefault();

        console.log(this.state);

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
                                    generateBill={this.generateBill}
                                />
                                <h3><strong>Existing Bills</strong></h3>
                                {this.state.bills.map((bill, index) => (
                                    <BillList
                                        dummyData={this.state.dummyData}
                                        businessInfo={this.state.accountData}
                                        projectInfo={bill.projectInfo}
                                        billStateIndex={index}
                                    />
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Billing;