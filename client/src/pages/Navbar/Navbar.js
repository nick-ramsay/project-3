import React, { Component } from "react";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import "./style.css";

class Navbar extends Component {
    state = {
    }

    handleLogout = event => {
        console.log("Handle logout called!");
        event.preventDefault();
        localStorage.removeItem("crafterClient");
        localStorage.removeItem("crafterToken");
        window.location = "/"
    }

    render() {
        return (
            <div>
                <NavbarComponent
                    handleLogout={this.handleLogout}
                />
            </div>
        )
    }
}

export default Navbar; 