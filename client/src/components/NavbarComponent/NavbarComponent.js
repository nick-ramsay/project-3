import React from "react";
import "./style.css";

function NavbarComponent(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="/home"><span><img src={require("../../images/home.png")} alt="Home" /><strong>  CRAFTER</strong></span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="/projects"><img src={require("../../images/projects.jpg")} alt="Projects" /> Projects</a>
                    <a className="nav-item nav-link" href="/customers"><img src={require("../../images/customers.jpg")} alt="Customers" /> Customers</a>
                    <a className="nav-item nav-link" href="/billing"><img src={require("../../images/billing.jpg")} alt="Billing" /> Billing</a>
                    <a className="nav-item nav-link" href="/inventory"><img src={require("../../images/inventory.jpg")} alt="Inventory" /> Inventory</a>
                    <a className="nav-item nav-link" href="/account"><img src={require("../../images/profile.jpg")} alt="Account" /> Account</a>
                    <a className="nav-item nav-link" href="/settings"><img src={require("../../images/settings.jpg")} alt="Settings" /> Settings</a>
                    <span className="nav-item nav-link" id="logout" name="logout" onClick={props.handleLogout}><img src={require("../../images/logout_icon.jpg")} alt="Logout" /> Log Out</span>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;