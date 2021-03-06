import React from "react";
import "./style.css";

function NavbarComponent(props) {

    return (
        <nav className="navbar navbar-custom navbar-expand-lg fixed-top">
            <a className="navbar-brand" href="/home"><span><strong>CRAFTER</strong></span></a>
            <button className="navbar-toggler navbar-toggler-light custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-item nav-link" href="/customers"><img src={require("../../images/customers_white.jpg")} alt="Customers" /> Customers</a>
                    <a className="nav-item nav-link" href="/inventory"><img src={require("../../images/inventory_white.jpg")} alt="Inventory" /> Inventory</a>
                    <a className="nav-item nav-link" href="/projects"><img src={require("../../images/projects_white.jpg")} alt="Projects" /> Projects</a>
                    <a className="nav-item nav-link" href="/billing"><img src={require("../../images/billing_white.jpg")} alt="Billing" /> Billing</a>
                    <a className="nav-item nav-link" href="/account"><img src={require("../../images/profile_white.jpg")} alt="Account" /> Account</a>
                    <span className="nav-item nav-link" id="logout" name="logout" onClick={props.handleLogout}><img src={require("../../images/logout_icon_white.jpg")} alt="Logout" /> Log Out</span>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;