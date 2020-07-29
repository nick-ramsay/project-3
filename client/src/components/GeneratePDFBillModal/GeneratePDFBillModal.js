import React from "react";
import "./style.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFBill from "../PDFBill/PDFBill";

function GeneratePDFBillModal(props) {

    return (
        <div className="modal fade" id="generatePDFBillModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><strong>{props.editInventoryItemName && props.editInventoryItemName}</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row h-70 justify-content-center align-items-center">
                            <div className="col-md-12">
                                <PDFDownloadLink
                                    document={<PDFBill data={props.PDFBillData} />}
                                    fileName={"bill.pdf"}
                                >
                                    <strong>PDF</strong>
                                </PDFDownloadLink>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm" id="generatePDFBillBtn" name="generatePDFBillBtn" onClick={props.handleEditInventorySubmit}>Save Changes</button>
                        <button type="button" className="btn btn-sm red-btn" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneratePDFBillModal;