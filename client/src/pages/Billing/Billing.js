import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";

class Billing extends Component {
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
                                <h2><strong>Billing</strong></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Billing;