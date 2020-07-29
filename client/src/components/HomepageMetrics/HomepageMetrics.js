import React from "react";
import "./style.css";
import { RenderLoop } from "brace";

function HomepageMetrics(props) {
    return (
        <div>
            <div className="row text-center">
                <div className="col-md-12">
                    <h2><strong>{props.accountName}</strong></h2>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-5 bg-danger text-white rounded mb-1 mt-2">
                    <h3>Expenses</h3>
                    <h4>${(props.totalExpenses * -1).toFixed(2)}</h4>
                </div>
                <div className="col-md-5 offset-md-2 bg-success text-white rounded mb-1 mt-2">
                    <h3>Revenue</h3>
                    <h4>${props.totalRevenue.toFixed(2)}</h4>
                </div>
            </div>
            <div className="row text-center bg-crafter text-white rounded">
                <div className="col-md-12">
                    <h3>{props.totalMargin < 0 ? "Loss":"Profit"}</h3>
                    <h3>${props.totalMargin.toFixed(2)}</h3>
                </div>
            </div>
        </div>
    )
}

export default HomepageMetrics;