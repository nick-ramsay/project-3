import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import UpdateAccountForm from "../../components/UpdateAccountForm/UpdateAccountForm";
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";
import "./style.css";

class Account extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container pt-4">
                    <div className="col-md-12 my-5 mb-4 px-5 bg-white rounded">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Account</strong></h2>
                                <UpdateAccountForm />
                            </div>
                        </div>
                    </div>
                </div>
                <NewProjectModal />
            </div>
        )
    }

}

export default Account;