import React, { Component } from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
import moment from "moment";
import Navbar from "../Navbar/Navbar";
import CustomerList from "../../components/CustomerList/CustomerList";
import NewCustomerModal from "../../components/NewCustomerModal/NewCustomerModal";
import EditCustomerModal from "../../components/EditCustomerModal/EditCustomerModal";
import API from "../../utils/API"
import "./style.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: indigo;
`;

var client = {
    contextID: localStorage.getItem("crafterClient")
};

class Customers extends Component {
    state = {
        customers: [],
        editedCustomer: {},
        loading: true
    }

    componentDidMount() {
        this.getCustomers();
    }

    
    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    getCustomers = () => {
        API.getCustomers(client).then(res => this.setState({ customers: res.data, loading: false }))
    }

    editCustomer = event => {
        var editedCustomer = event.currentTarget.dataset.customerStateIndex;
        var editedCustomerInfo = this.state.customers[editedCustomer]

        this.setState({
            editCustomerID: editedCustomerInfo._id,
            editCustomerFirstName: editedCustomerInfo.firstName,
            editCustomerLastName: editedCustomerInfo.lastName,
            editCustomerPhone: editedCustomerInfo.phone,
            editCustomerEmail: editedCustomerInfo.email,
            editCustomerAddress1: editedCustomerInfo.address,
            editCustomerAddress2: editedCustomerInfo.address2,
            editCustomerCity: editedCustomerInfo.city,
            editCustomerState: editedCustomerInfo.state,
            editCustomerPostcode: editedCustomerInfo.postcode,
            editCustomerCancelled: editedCustomerInfo.cancelled
        })
    }

    handleEditCustomerSubmit = event => {
        event.preventDefault();

        var editCustomerInfo;

        if (
            (this.state.editCustomerFirstName && this.state.editCustomerLastName && this.state.editCustomerPhone && this.state.editCustomerEmail && this.state.editCustomerAddress1
            && this.state.editCustomerCity && this.state.editCustomerState && this.state.editCustomerPostcode)
        ) {
            editCustomerInfo = {
                customerID: this.state.editCustomerID,
                firstName: this.state.editCustomerFirstName,
                lastName: this.state.editCustomerLastName,
                phone: this.state.editCustomerPhone,
                email: this.state.editCustomerEmail,
                address: this.state.editCustomerAddress1,
                address2: this.state.editCustomerAddress2,
                city: this.state.editCustomerCity,
                state: this.state.editCustomerState,
                postcode: this.state.editCustomerPostcode
            }
            API.editCustomer(editCustomerInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/;
            document.location.reload(true);
        }
        else {
            alert("Sorry... form not complete.");
        }
    }

    cancelCustomer = event => {
        event.preventDefault();
        var cancelledCustomerInfo = {
            customerID: event.currentTarget.dataset.cancelCustomerId,
            cancelledDate: new Date()
        }
        API.cancelCustomer(cancelledCustomerInfo).then(res => console.log(res));
        document.location.reload(true);
    }

    reactivateCustomer = event => {
        event.preventDefault();
        var reactivateCustomerInfo = {
            customerID: event.currentTarget.dataset.reactivateCustomerId
        }

        API.reactivateCustomer(reactivateCustomerInfo).then(res => console.log(res));
        document.location.reload(true);
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
                created: new Date(),
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
            document.location.reload(true);

        } else if (this.state.addCustomerState === "Choose state...") {
            alert("Please choose a valid state...");
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
                    <div className="col-md-12 my-5 mb-4 px-5 bg-white rounded content-container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Customers</strong></h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12 p-2 d-flex justify-content-center">
                                <td><button className="btn btn-sm" id="addCustomerBtn" data-toggle="modal" data-target="#newCustomerModal"><span>Add a Customer</span></button></td>
                            </div>
                        </div>
                        <ClipLoader
                            css={override}
                            size={150}
                            //size={"150px"} this also works
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                        {this.state.customers.map((customer,index) => (
                            <CustomerList
                                customerID={customer._id}
                                customerStateIndex={index}
                                created={moment(customer.created).format('DD/MM/YYYY hh:mm A')}
                                cancelled={customer.cancelled && moment(customer.cancelled).format('DD/MM/YYYY hh:mm A')}
                                firstName={customer.firstName}
                                lastName={customer.lastName}
                                phone={customer.phone}
                                email={customer.email}
                                address={customer.address}
                                address2={customer.address2}
                                city={customer.city}
                                state={customer.state}
                                postcode={customer.postcode}
                                cancelCustomer={this.cancelCustomer}
                                editCustomer={this.editCustomer}
                            />
                        ))
                        }
                    </div>
                </div>
                <NewCustomerModal
                    handleFormUpdate={this.handleFormUpdate}
                    handleNewCustomerSubmit={this.handleNewCustomerSubmit}
                />
                <EditCustomerModal
                    handleFormUpdate={this.handleFormUpdate}
                    handleEditCustomerSubmit={this.handleEditCustomerSubmit}
                    reactivateCustomer={this.reactivateCustomer}
                    editCustomerID={this.state.editCustomerID}
                    editCustomerFirstName={this.state.editCustomerFirstName}
                    editCustomerLastName={this.state.editCustomerLastName}
                    editCustomerPhone={this.state.editCustomerPhone}
                    editCustomerEmail={this.state.editCustomerEmail}
                    editCustomerAddress1={this.state.editCustomerAddress1}
                    editCustomerAddress2={this.state.editCustomerAddress2}
                    editCustomerCity={this.state.editCustomerCity}
                    editCustomerState={this.state.editCustomerState}
                    editCustomerPostcode={this.state.editCustomerPostcode}
                    editCustomerCancelled={this.state.editCustomerCancelled}
                />
            </div>
        )
    }
}


export default Customers;