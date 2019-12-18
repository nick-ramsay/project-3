import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./style.css";

class Home extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 bg-white rounded">
                            <h2>Dashboard content will eventually go here!</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;