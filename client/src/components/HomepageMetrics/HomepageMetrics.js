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
                    <h4>${props.totalExpenses}</h4>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5 bg-success text-white rounded mb-1 mt-2">
                    <h3>Revenue</h3>
                    <h4>${props.totalRevenue}</h4>
                </div>
            </div>
            <div className="row text-center bg-primary text-white rounded">
                <div className="col-md-12">
                    <h3>Margin</h3>
                    <h3>${props.totalMargin}</h3>
                </div>
            </div>
        </div>
    )
}

export default HomepageMetrics;