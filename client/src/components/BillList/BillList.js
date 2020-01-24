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
                    <p><strong>Bill Amount:  </strong>${props.billInfo.billedAmount && (Math.round(props.billInfo.billedAmount * 100) / 100)}</p>
                    <p><strong>Revenue Collected:  </strong>${props.billInfo.revenueCollected && (Math.round(props.billInfo.revenueCollected * 100) / 100)}</p>
                    <p><strong>{props.billInfo.billedAmount - props.billInfo.revenueCollected < 0 ? "Refundable Amount: " : "Outstanding Amount: "}</strong>${Math.round((props.billInfo.billedAmount - props.billInfo.revenueCollected) * 100) / 100}</p>
                    <button className="btn btn-dark m-1 float-left btn-sm" id="issueBillRefund" data-toggle="modal" data-target="#issueRefundModal" data-bill-state-index={props.billStateIndex} data-refund-bill-id={props.billID} name="issueRefundModal" onClick={props.handleIssueRefund}><strong>-</strong></button>
                    <button className="btn btn-success m-1 float-left btn-sm" id="paymentReceivedBtn" data-toggle="modal" data-target="#paymentReceivedModal" data-bill-state-index={props.billStateIndex} data-payment-bill-id={props.billID} name="purchasbillBtn" onClick={props.handlePaymentReceived}><strong>+</strong></button>
                    <button className="btn btn-dark m-1 float-left btn-sm" id="generatePDFBill" data-toggle="modal" data-target="#generatePDFBillModal" data-bill-state-index={props.billStateIndex} data-pdf-bill-id={props.billID} name="generatePDFBill" onClick={props.generatePDFBill}><strong>PDF Modal</strong></button>
                    <button className="btn btn-light m-1 float-right btn-sm" id="billPDFBtn" data-bill-state-index={props.billStateIndex}>
                        PDF
                    </button>
                </div>
            </div>
        </div>
    )
}

/*

<PDFDownloadLink
                            document={<PDFBill data={props} />}
                            fileName={"bill" + props.projectInfo._id + ".pdf"}
                        >
                            <strong>PDF</strong>
                        </PDFDownloadLink>

*/ 
export default BillList;
