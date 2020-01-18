import React from "react";
import moment from "moment";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFBill from "../PDFBill/PDFBill";
import "./style.css";

function BillList(props) {
    return (
        <div className="col-md-12">
            <div class="card mb-2">
                <h5 className="card-header" id="billHeader1">
                    <span><strong>"{props.projectInfo && props.projectInfo.name}" for {props.projectInfo && props.projectInfo.customer.firstName + " " + props.projectInfo.customer.lastName}</strong></span>
                </h5>
                <div className="card-body">
                    <p><strong>Completion Date: </strong>{props.projectInfo && moment(props.projectInfo.completedDate).format("DD/MM/YYYY hh:mm A")}</p>
                    <p><strong>Hours Logged: </strong>${props.projectInfo && props.projectInfo.hours}</p>
                    <p><strong>Hourly Rate: </strong>${props.projectInfo && props.projectInfo.hourlyRate}</p>
                    <p><strong>Inventory Fees: </strong>${props.price && props.price}</p>
                    {(props.quantity > 0 && !props.cancelled) && <button className="btn btn-dark m-1 float-left btn-sm" id="returnBillBtn" data-toggle="modal" data-target="#returnBillModal" data-bill-state-index={props.billStateIndex} data-return-bill-id={props.billID} name="returnbillBtn" onClick={props.refundBill}><strong>-</strong></button>}
                    {!props.cancelled && <button className="btn btn-success m-1 float-left btn-sm" id="purchasebillBtn" data-toggle="modal" data-target="#purchasebillModal" data-bill-state-index={props.billStateIndex} data-purchase-bill-id={props.billID} name="purchasbillBtn" onClick={props.billPayment}><strong>+</strong></button>}
                    <button className="btn btn-primary m-1 float-right btn-sm" id="editBillBtn" data-toggle="modal" data-target="#editbillModal" data-bill-state-index={props.billStateIndex} onClick={props.editBill}><img src={require("../../images/edit-icon.png")} alt="Edit Bill" /></button>
                    {!props.cancelled && <button className="btn btn-danger m-1 float-right btn-sm" id="deleteBillBtn" data-cancel-bill-id={props.billID}  onClick={props.showState} name="deleteBillBtn"><img src={require("../../images/delete-icon.png")} alt="End Date Bill" /></button>}
                    <button className="btn btn-light m-1 float-right btn-sm" id="billPDFBtn" data-bill-state-index={props.billStateIndex}>
                    <PDFDownloadLink
                        document={<PDFBill data={props} />}
                        fileName="bill.pdf"
                        style={{
                            textDecoration: "none",
                            textColor: "black"
                        }}
                    ><strong>PDF</strong></PDFDownloadLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BillList;