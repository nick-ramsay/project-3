import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";

class Settings extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container pt-4">
                    <div className="col-md-12 my-5 mb-4 px-5 bg-white rounded content-container">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Settings</strong></h2>
                                <p>NOTE: May not be needed, account can likely suffice...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Settings;