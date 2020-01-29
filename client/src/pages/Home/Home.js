import React, { Component } from "react";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
import Chart from 'chart.js';
import Navbar from "../Navbar/Navbar";
import HomepageMetrics from "../../components/HomepageMetrics/HomepageMetrics";
import API from "../../utils/API";
import "./style.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: indigo;
`;

var client = {
    contextID: localStorage.getItem("crafterClient")
};

class Home extends Component {
    state = {
        accountData: [{ businessName: "" }],
        transactionData: [],
        totalRevenue: 0,
        totalExpenses: 0,
        totalMargin: 0,
        loading: true

    }

    componentDidMount() {
        this.getTransactionData();
        this.getAccountInfo();
    }

    calculateMetrics = () => {
        console.log("Calculate some metrics!");
        console.log(this.state.transactionData);

        for (var i = 0; i < this.state.transactionData.length; i++) {
            if (this.state.transactionData[i].transactionType === "bill_refund" || this.state.transactionData[i].transactionType === "bill_payment") {
                this.setState({ totalRevenue: this.state.totalRevenue += this.state.transactionData[i].totalAmount })
                this.setState({ totalMargin: this.state.totalMargin += this.state.transactionData[i].totalAmount })
            } if (this.state.transactionData[i].transactionType === "inventory_purchase" || this.state.transactionData[i].transactionType === "inventory_return") {
                this.setState({ totalExpenses: this.state.totalExpenses += this.state.transactionData[i].totalAmount })
                this.setState({ totalMargin: this.state.totalMargin += this.state.transactionData[i].totalAmount })
            }
        }

        console.log(this.state);
        this.renderChart(this.state.totalRevenue, this.state.totalExpenses, this.state.totalMargin);
    }

    getTransactionData = () => {
        API.getTransactions(client)
            .then(res => this.setState({ transactionData: res.data, loading: false }))
            .then(this.calculateMetrics);
    }

    getAccountInfo = () => {
        API.getAccountData(client).then(res => this.setState({ accountData: res.data }))
    }

    renderChart = (totalRevenue, totalExpenses, totalMargin) => {
        var ctx = document.getElementById('myChart');
        ctx.height = 150;
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Revenue', 'Expenses', 'Margin'],
                datasets: [{
                    label: 'Dollar Amounts ($)',
                    data: [totalRevenue.toFixed(2), (totalExpenses.toFixed(2) * -1), totalMargin.toFixed(2)],
                    backgroundColor: [
                        'Green',
                        'Red',
                        'Indigo'
                    ],
                    borderColor: [
                        'Green',
                        'Red',
                        'Indigo'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container pt-4">
                    <div className="col-md-12 my-5 mb-4 px-5 rounded content-container">
                        <ClipLoader
                            css={override}
                            size={150}
                            //size={"150px"} this also works
                            color={"#123abc"}
                            loading={this.state.loading}
                        />
                        {this.state.loading === false &&
                            <div>
                                <HomepageMetrics
                                    accountName={this.state.accountData.businessName}
                                    totalExpenses={this.state.totalExpenses}
                                    totalRevenue={this.state.totalRevenue}
                                    totalMargin={this.state.totalMargin}
                                />
                                <div className="row text-center">
                                    <div className="col-md-12">
                                        <canvas id="myChart" width="400" height="400"></canvas>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;