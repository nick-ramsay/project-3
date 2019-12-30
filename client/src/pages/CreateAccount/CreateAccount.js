import React, { Component } from "react";
import { sha256, sha224 } from 'js-sha256';
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
        console.log(this.state);
        if (this.state.password) {
            console.log(sha256(this.state.password))
        };
    }

    handleNewAccountSubmit = event => {
        event.preventDefault();

        var newAccountInfo;

        if (
            (this.state.businessName && this.state.ownerName && this.state.phone && this.state.email && this.state.password
                && this.state.confirmedPassword && this.state.address && this.state.city && this.state.state
                && this.state.postcode && this.state.hourlyRate && this.state.specialties) &&
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
                specialties: this.state.specialties
            }
            console.log(newAccountInfo)
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