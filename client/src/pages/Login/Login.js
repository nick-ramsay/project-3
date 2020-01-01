import React, { Component } from "react";
import { sha256, sha224 } from 'js-sha256';
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import LoginForm from "../../components/LoginForm/LoginForm";
import API from "../../utils/API"
import "./style.css";

class Login extends Component {
    state = {
    }

    handleFormUpdate = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    loginSuccess = (crafterClient,crafterToken) => {
        localStorage.setItem("crafterClient",crafterClient);
        localStorage.setItem("crafterToken", crafterToken);
        window.location = "/home";
    }

    handleLoginAttempt = event => {
        event.preventDefault();

        var credentials;
        console.log("Clicked login!");
        if (this.state.loginEmail && this.state.loginPassword) {
            credentials = {
                loginEmail: this.state.loginEmail,
                loginPassword: sha256(this.state.loginPassword)
            }
            alert("You completed the form...");
            API.login(credentials).then(res => (res.data[0] !== undefined) ? this.loginSuccess(res.data[0]._id, res.data[0].password) : alert("Sorry... not a valid account, password combination"))
        } else {
            alert("Please enter both a username and a password.");
        }

    }

    render() {
        return (
            <div>
                <LoginNavbar />
                <LoginForm 
                 handleFormUpdate={this.handleFormUpdate}
                 handleLoginAttempt={this.handleLoginAttempt}
                />
            </div>
        )
    }

}

export default Login;