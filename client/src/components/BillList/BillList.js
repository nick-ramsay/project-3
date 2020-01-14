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
                    <span><strong>{props.projectName && props.projectName}<span id="cancelledDate">{props.cancelled && " [Cancelled: " + moment(props.cancelled).format("DD/MM/YYYY hh:mm a") + "]"}</span></strong></span>
                </h5>
                <div className="card-body">
                    <p><strong>Hours: </strong>{props.hours && props.hours}</p>
                    <p><strong>Hourly Rate: $</strong>{props.hourlyRate && props.hourlyRate}</p>
                    <p><strong>Inventory Fees: $ </strong>${props.price && props.price}</p>
                    {(props.quantity > 0 && !props.cancelled) && <button className="btn btn-dark m-1 float-left" id="returnBillBtn" data-toggle="modal" data-target="#returnBillModal" data-bill-state-index={props.billStateIndex} data-return-bill-id={props.billID} name="returnbillBtn" onClick={props.refundBill}><strong>-</strong></button>}
                    {!props.cancelled && <button className="btn btn-success m-1 float-left" id="purchasebillBtn" data-toggle="modal" data-target="#purchasebillModal" data-bill-state-index={props.billStateIndex} data-purchase-bill-id={props.billID} name="purchasbillBtn" onClick={props.billPayment}><strong>+</strong></button>}
                    <button className="btn btn-primary m-1 float-right" id="editBillBtn" data-toggle="modal" data-target="#editbillModal" data-bill-state-index={props.billStateIndex} onClick={props.editBill}><img src={require("../../images/edit-icon.png")} alt="Edit Bill" /></button>
                    {!props.cancelled && <button className="btn btn-danger m-1 float-right" id="deleteBillBtn" data-cancel-bill-id={props.billID} name="deleteBillBtn" onClick={props.cancelBill}><img src={require("../../images/delete-icon.png")} alt="End Date Bill" /></button>}
                    <button className="btn btn-light m-1 float-right" id="billPDFBtn" data-bill-state-index={props.billStateIndex}>
                    <PDFDownloadLink
                        document={<PDFBill data={props.dummyData[1]} />}
                        fileName="bill.pdf"
                        data-bill-state-index={props.billStateIndex}
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