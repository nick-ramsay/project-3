import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./style.css";
import UnbilledProjectQueue from "../../components/UnbilledProjectQueue/UnbilledProjectQueue";
import BillList from "../../components/BillList/BillList";

class Billing extends Component {
    state = {
        dummyData: ["Dummy Data 1","Dummy Data 2"]
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
                                <UnbilledProjectQueue />
                                <h3><strong>Existing Bills</strong></h3>
                                <BillList
                                    dummyData={this.state.dummyData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Billing;