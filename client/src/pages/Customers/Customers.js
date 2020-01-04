import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import CustomerList from "../../components/CustomerList/CustomerList"
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";
import NewCustomerModal from "../../components/NewCustomerModal/NewCustomerModal";
import API from "../../utils/API"
import "./style.css";

class Customers extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        this.getCustomers();
    }

    getCustomers = () => {
        API.getCustomers().then(res => this.setState({ customers: res.data }))

    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleNewCustomerSubmit = event => {
        event.preventDefault();
        var newCustomerInfo;

        if (
            (this.state.addCustomerFirstName && this.state.addCustomerLastName && this.state.addCustomerPhone && this.state.addCustomerEmail && this.state.addCustomerAddress1
                && this.state.addCustomerCity && this.state.addCustomerState && this.state.addCustomerPostcode)
            && this.state.addCustomerState !== "Choose state..."
        ) {
            newCustomerInfo = {
                contextID: localStorage.getItem("crafterClient"),
                firstName: this.state.addCustomerFirstName,
                lastName: this.state.addCustomerLastName,
                phone: this.state.addCustomerPhone,
                email: this.state.addCustomerEmail,
                address: this.state.addCustomerAddress1,
                address2: this.state.addCustomerAddress2,
                city: this.state.addCustomerCity,
                state: this.state.addCustomerState,
                postcode: this.state.addCustomerPostcode

            }
            API.createCustomer(newCustomerInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            window.location.href = "/customers";

        } else if (this.state.addCustomerState === "Choose state...") {
            console.log("Please choose a valid state...");
            alert("Please choose a valid state...");
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
                                <h2><strong>Customers</strong></h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 p-2 d-flex justify-content-center">
                                <td><button className="btn btn-success addInventoryBtn" data-toggle="modal" data-target="#newCustomerModal"><span><img src={require("../../images/new-icon.jpg")} alt="Add a Customer" /> Add a Customer</span></button></td>
                            </div>
                        </div>
                        {this.state.customers.map(customer => (
                            <CustomerList
                                customerID={customer._id}
                                firstName={customer.firstName}
                                lastName={customer.lastName}
                                phone={customer.phone}
                                email={customer.email}
                                address={customer.address}
                                address2={customer.address2}
                                city={customer.city}
                                state={customer.state}
                                postcode={customer.postcode}
                            />
                        ))
                        }
                    </div>
                </div>
                <NewCustomerModal
                    handleFormUpdate={this.handleFormUpdate}
                    handleNewCustomerSubmit={this.handleNewCustomerSubmit}
                />
                <NewProjectModal />
            </div>
        )
    }
}


export default Customers;