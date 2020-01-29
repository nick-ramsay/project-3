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
                        <input type="text" className="form-control" id="businessName" name="businessName" defaultValue={props.businessName} onChange={props.handleFormUpdate} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label for="ownerName">Owner Name</label>
                        <input type="text" className="form-control" id="ownerName" name="ownerName" defaultValue={props.ownerName} onChange={props.handleFormUpdate} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="businessPhone">Phone</label>
                        <input type="phone" className="form-control" id="businessPhone" name="phone" defaultValue={props.phone} onChange={props.handleFormUpdate} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="businessEmail">Email</label>
                        <input type="email" className="form-control" id="businessEmail" name="email" defaultValue={props.email} onChange={props.handleFormUpdate} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="businessAddress1">Address</label>
                    <input type="text" className="form-control" id="businessAddress1" name="address" defaultValue={props.address} onChange={props.handleFormUpdate} />
                </div>
                <div className="form-group">
                    <label for="businessAddress2">Address 2</label>
                    <input type="text" className="form-control" id="businessAddress2" placeholder="Apartment, studio, or floor" name="address2" defaultValue={props.address2} onChange={props.handleFormUpdate} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="businessCity">City</label>
                        <input type="text" className="form-control" id="businessCity" name="city" defaultValue={props.city} onChange={props.city} />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="businessState">State</label>
                        <select id="businessState" className="form-control" name="state" value={props.state} onChange={props.handleFormUpdate}>
                            <option value="New South Wales">New South Wales</option>
                            <option value="Victoria">Victoria</option>
                            <option value="Queensland">Queensland</option>
                            <option value="Tasmania">Tasmania</option>
                            <option value="Australian Capital Territory">Australian Capital Territory</option>
                            <option value="Northern Territory">Northern Territory</option>
                            <option value="South Australia">South Australia</option>
                            <option value="Western Australia">Western Australia</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="businessPostcode">Postcode</label>
                        <input type="text" className="form-control" id="businessPostcode" name="postcode" defaultValue={props.postcode} onChange={props.handleFormUpdate} />
                    </div>
                </div>
                <h5 className="text-left">Service Details</h5>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="businessRate">Standard Hourly Rate</label>
                        <input type="number" placeholder="10.00" step="0.01" min="0" className="form-control" id="businessRate" name="hourlyRate" defaultValue={props.hourlyRate && parseFloat(props.hourlyRate).toFixed(2)} onChange={props.handleFormUpdate} />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="editBusinessSpecialty">Specialty</label>
                        <select id="editBusinessSpecialty" className="form-control" name="specialty" value={props.specialty} onChange={props.handleFormUpdate}>
                            <option value="Arts and Crafts">Arts and Crafts</option>
                            <option value="Auto Repair">Auto Repair</option>
                            <option value="Carpentry">Carpentry</option>
                            <option value="House Painting">House Painting</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <button type="button" className="btn btn-primary mb-1 float-right" id="updateAccountBtn" onClick={props.handleUpdateAccount}>Update Account</button>
            </form>
        </div>
    )
}

export default UpdateAccountForm;