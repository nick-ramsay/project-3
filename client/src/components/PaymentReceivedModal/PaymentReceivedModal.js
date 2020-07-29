import React from "react";
import "./style.css";

function PaymentReceivedModal(props) {

    return (
        <div className="modal fade" id="paymentReceivedModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><strong>Bill Info Placeholder</strong></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row h-70 justify-content-center align-items-center">
                            <div className="col-md-12">
                                <form>
                                    <h5 className="text-left">Payment Received</h5>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label for="paymentAmountReceived">Amount Received</label>
                                            <input type="number" min="0" step="0.01" className="form-control" id="paymentReceivedAmount" defaultValue="0.00" name="paymentReceivedAmount" onChange={props.handleFormUpdate} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm" data-dismiss="modal" id="paymentReceivedBtn" name="paymentReceivedBtn" onClick={props.handlePaymentReceivedSubmit}>Post Payment</button>
                        <button type="button" className="btn btn-sm red-btn" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentReceivedModal;