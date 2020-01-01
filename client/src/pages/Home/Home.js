import React, { Component } from "react";
import Chart from 'chart.js';
import Navbar from "../Navbar/Navbar"
import "./style.css";
import NewProjectModal from "../../components/NewProjectModal/NewProjectModal";

class Home extends Component {
    state = {

    }

    renderChart = () => {
        var ctx = document.getElementById('myChart');
        ctx.height = 150;
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Revenue', 'Expenses', 'Profit'],
                datasets: [{
                    label: 'Dollar Amounts ($)',
                    data: [10000, 8000, 2000],
                    backgroundColor: [
                        'Green',
                        'Red',
                        'Blue'
                    ],
                    borderColor: [
                        'Green',
                        'Red',
                        'Blue'
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

    componentDidMount() {
        this.renderChart();
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container pt-4">
                    <div className="col-md-12 my-5 mb-4 px-5 bg-white rounded">
                        <div className="row text-center">
                            <div className="col-md-12">
                                <h2><strong>Nick's Carpentry Shop</strong></h2>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-5 bg-danger text-white rounded mb-1 mt-2">
                                <h3>Expenses</h3>
                                <p>-$8,000.00</p>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5 bg-success text-white rounded mb-1 mt-2">
                                <h3>Revenue</h3>
                                <p className="">$10,000.00</p>
                            </div>
                        </div>
                        <div className="row text-center bg-primary text-white rounded">
                            <div className="col-md-12">
                                <h3>Margin</h3>
                                <h4>$2,000</h4>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-12">
                                <canvas id="myChart" width="400" height="400"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <NewProjectModal />
            </div>
        )
    }

}

export default Home;