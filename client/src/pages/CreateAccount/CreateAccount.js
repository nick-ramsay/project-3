import React, { Component } from "react";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import NewAccountForm from "../../components/NewAccountForm/NewAccountForm"
import "./style.css";

class NewAccount extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <LoginNavbar />
                <NewAccountForm />
            </div>
        )
    }

}

export default NewAccount;