import React from "react";
import "./style.css";

function UpdateAccountForm(props) {
    return (
        <div className="col-md-12">
            <form>
                <h5 className="text-left">Contact Details</h5>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label for="businessName">Business Name</label>
                        <input type="text" className="form-control" id="businessName" placeholder="Business Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label for="ownerName">Owner Name</label>
                        <input type="text" className="form-control" id="ownerName" placeholder="Owner Name" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="businessPhone">Phone</label>
                        <input type="phone" className="form-control" id="businessPhone" placeholder="Phone" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="businessEmail">Email</label>
                        <input type="email" className="form-control" id="businessEmail" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label for="businessAddress1">Address</label>
                    <input type="text" className="form-control" id="businessAddress1" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label for="businessAddress2">Address 2</label>
                    <input type="text" className="form-control" id="businessAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="businessCity">City</label>
                        <input type="text" className="form-control" id="businessCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="businessState">State</label>
                        <select id="businessState" className="form-control">
                            <option selected>Choose state...</option>
                            <option>New South Wales</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="businessPostcode">Postcode</label>
                        <input type="text" className="form-control" id="businessPostcode" placeholder="Postcode" />
                    </div>
                </div>
                <h5 className="text-left">Service Details</h5>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="businessRate">Standard Hourly Rate</label>
                        <input type="number" placeholder="10.00" step="0.01" min="0" className="form-control" id="businessRate" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="businessSpecialty">Specialties</label>
                        <select id="businessSpecialty" className="custom-select" multiple>
                            <option>Carpentry</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-1 float-right" id="updateAccountBtn">Update Account</button>
            </form>
        </div>
    )
}

export default UpdateAccountForm;