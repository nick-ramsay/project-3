import React, { Component } from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
import Navbar from "../Navbar/Navbar";
import UpdateAccountForm from "../../components/UpdateAccountForm/UpdateAccountForm";
import API from "../../utils/API";
import "./style.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: indigo;
`;

var client = {
    contextID: localStorage.getItem("crafterClient")
};

class Account extends Component {
    state = {
        loading: true
    }

    componentWillMount() {
        this.getAccountData();
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    getAccountData = () => {
        var accountData;
        API.getAccountData(client)
            .then(res => this.setState({
                businessID: res.data._id,
                businessName: res.data.businessName,
                ownerName: res.data.ownerName,
                phone: res.data.phone,
                email: res.data.email,
                address: res.data.address,
                address2: res.data.address2,
                city: res.data.city,
                state: res.data.state,
                postcode: res.data.postcode,
                hourlyRate: res.data.hourlyRate,
                specialty: res.data.specialty,
                loading: false
            }))
    }

    handleUpdateAccount = event => {
        event.preventDefault();

        var editAccountInfo;

        if (this.state.businessID && this.state.businessName && this.state.ownerName && this.state.phone && this.state.email
            && this.state.address && this.state.city && this.state.postcode && this.state.hourlyRate && this.state.specialty) {
            editAccountInfo = {
                businessID: this.state.businessID,
                businessName: this.state.businessName,
                ownerName: this.state.ownerName,
                phone: this.state.phone,
                email: this.state.email,
                address: this.state.address,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                postcode: this.state.postcode,
                hourlyRate: this.state.hourlyRate,
                specialty: this.state.specialty
            }
            API.editAccount(editAccountInfo).then(res => console.log(res));
            window.location.href = "/account";
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
                    <div className="col-md-12 pb-2 my-5 mb-4 px-5 bg-white rounded content-container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Account</strong></h2>
                                <ClipLoader
                                    css={override}
                                    size={150}
                                    //size={"150px"} this also works
                                    color={"#123abc"}
                                    loading={this.state.loading}
                                />
                                {this.state.businessName &&
                                    <UpdateAccountForm
                                        handleUpdateAccount={this.handleUpdateAccount}
                                        handleFormUpdate={this.handleFormUpdate}
                                        businessID={this.state.businessID}
                                        businessName={this.state.businessName}
                                        ownerName={this.state.ownerName}
                                        phone={this.state.phone}
                                        email={this.state.email}
                                        address={this.state.address}
                                        address2={this.state.address2}
                                        city={this.state.city}
                                        state={this.state.state}
                                        postcode={this.state.postcode}
                                        hourlyRate={this.state.hourlyRate}
                                        specialty={this.state.specialty}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Account;