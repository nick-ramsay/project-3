import React from "react";
import moment from "moment";
import "./style.css";

function UnbilledProjectQueue(props) {
    return (
        <div class="accordion" id="billingProjectQueueAccordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-dark" type="button" data-toggle="collapse" data-target="#billingCompleteProjectQueue" aria-expanded="true" aria-controls="billingCompleteProjectQueue">
                            Unbilled Projects
                                                </button>
                    </h2>
                </div>
                <div id="billingCompleteProjectQueue" class="collapse" aria-labelledby="headingOne" data-parent="#billingProjectQueueAccordion">
                    <div class="card-body">
                        {props.projectData && props.projectData.map((projectInfo, index) => (
                            <div className="row">
                                <div className="col-md-10 offset-md-1 p-1 border rounded">
                                    <h6><strong>{projectInfo.name} (Completed: [COMPLETION DATE])</strong></h6>
                                    <p>Customer: {projectInfo.customer}</p>
                                    <button className="btn btn-success" id="generateProjectBill">Generate Bill</button>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnbilledProjectQueue;