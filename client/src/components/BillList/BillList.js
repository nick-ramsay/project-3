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
                    <p><strong>Bill Amount:  </strong>${props.billInfo.billedAmount && (Math.round(props.billInfo.billedAmount * 100)/100)}</p>
                    <p><strong>Revenue Collected:  </strong>${props.billInfo.revenueCollected && (Math.round(props.billInfo.revenueCollected * 100)/100)}</p>
                    <p><strong>{props.billInfo.billedAmount - props.billInfo.revenueCollected < 0 ? "Refundable Amount: " : "Outstanding Amount: "}</strong>${Math.round((props.billInfo.billedAmount - props.billInfo.revenueCollected) * 100) / 100}</p>
                    <button className="btn btn-dark m-1 float-left btn-sm" id="issueRefundBtn" data-toggle="modal" data-target="#issueRefundModal" data-bill-state-index={props.billStateIndex} data-refund-bill-id={props.billID} name="issueRefundModal" onClick={props.handleIssueRefund}><strong>-</strong></button>
                    <button className="btn btn-success m-1 float-left btn-sm" id="paymentReceivedBtn" data-toggle="modal" data-target="#paymentReceivedModal" data-bill-state-index={props.billStateIndex} data-payment-bill-id={props.billID} name="purchasbillBtn" onClick={props.handlePaymentReceived}><strong>+</strong></button>
                    <button className="btn btn-primary m-1 float-right btn-sm" id="editBillBtn" data-toggle="modal" data-target="#editbillModal" data-bill-state-index={props.billStateIndex} onClick={props.editBill}><img src={require("../../images/edit-icon.png")} alt="Edit Bill" /></button>
                    {!props.cancelled && <button className="btn btn-danger m-1 float-right btn-sm" id="closeBillBtn" data-close-bill-id={props.billID} onClick={props.closeBill} name="closeBillBtn"><img src={require("../../images/delete-icon.png")} alt="Close Bill" /></button>}
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