import React from "react";
import moment from "moment";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFBill from "../PDFBill/PDFBill";
import "./style.css";

function BillList(props) {
    console.log(props);
    return (
        <div className="col-md-12">
            <div class="card mb-2">
                <h5 className="card-header" id="billHeader1">
                    <span><strong>"{props.projectInfo && props.projectInfo.name}" for {props.projectInfo && props.projectInfo.customer.firstName + " " + props.projectInfo.customer.lastName}</strong></span>
                </h5>
                <div className="card-body">
                    <p><strong>Completion Date: </strong>{props.projectInfo && moment(props.projectInfo.completedDate).format("DD/MM/YYYY hh:mm A")}</p>
                    <p><strong>Bill Amount:  </strong>${props.billInfo.billedAmount && props.billInfo.billedAmount.toFixed(2)}</p>
                    <p><strong>Revenue Collected:  </strong>${props.billInfo.revenueCollected && parseFloat(props.billInfo.revenueCollected).toFixed(2)}</p>
                    <p><strong>{props.billInfo.billedAmount - props.billInfo.revenueCollected < 0 ? "Refundable Amount: " : "Outstanding Amount: "}</strong>${(props.billInfo.billedAmount - props.billInfo.revenueCollected).toFixed(2)}</p>
                    <button className="btn btn-dark m-1 float-left btn-sm" id="issueRefundBtn" data-toggle="modal" data-target="#issueRefundModal" data-bill-state-index={props.billStateIndex} data-refund-bill-id={props.billID} name="issueRefundModal" onClick={props.handleIssueRefund}><strong>-</strong></button>
                    <button className="btn btn-success m-1 float-left btn-sm" id="paymentReceivedBtn" data-toggle="modal" data-target="#paymentReceivedModal" data-bill-state-index={props.billStateIndex} data-payment-bill-id={props.billID} name="purchasbillBtn" onClick={props.handlePaymentReceived}><strong>+</strong></button>
                    <button className="btn btn-light m-1 float-right btn-sm" id="billPDFBtn" data-bill-state-index={props.billStateIndex}>
                        <PDFDownloadLink
                            document={<PDFBill data={props} />}
                            fileName={"bill" + props.projectInfo._id + ".pdf"}
                        >
                            <strong>PDF</strong>
                        </PDFDownloadLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BillList;
