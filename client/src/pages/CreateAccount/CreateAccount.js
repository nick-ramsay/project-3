import React, { Component } from "react";
import { sha256, sha224 } from 'js-sha256';
import API from "../../utils/API";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import NewAccountForm from "../../components/NewAccountForm/NewAccountForm"
import "./style.css";

class NewAccount extends Component {
    state = {
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleNewAccountSubmit = event => {
        event.preventDefault();
        var newAccountInfo;

        if (
            (this.state.businessName && this.state.ownerName && this.state.phone && this.state.email && this.state.password
                && this.state.confirmedPassword && this.state.address && this.state.city && this.state.state
                && this.state.postcode && this.state.hourlyRate && this.state.specialty) &&
            (this.state.password === this.state.confirmedPassword)
        ) {
            newAccountInfo = {
                businessName: this.state.businessName,
                ownerName: this.state.ownerName,
                phone: this.state.phone,
                email: this.state.email,
                password: sha256(this.state.password),
                address: this.state.address,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                postcode: this.state.postcode,
                hourlyRate: this.state.hourlyRate,
                specialty: this.state.specialty
            }
            API.createAccount(newAccountInfo).then(res => console.log(res))/*res.data.items !== undefined) ? this.setState({ booksData: res.data.items }) : this.setState({ booksData: [] })*/
        } else if (this.state.password !== this.state.confirmedPassword) {
            console.log("Form complete but password and confirmed password differ")
        } 
        else {
            console.log("Sorry... form not complete.")
        }

    }

    render() {
        return (
            <div>
                <LoginNavbar />
                <NewAccountForm
                    handleFormUpdate={this.handleFormUpdate}
                    handleNewAccountSubmit={this.handleNewAccountSubmit}
                />
            </div>
        )
    }

}

export default NewAccount;