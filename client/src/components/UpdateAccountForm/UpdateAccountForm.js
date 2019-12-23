import React from "react";
import "./style.css";

function UpdateAccountForm(props) {
    return (
                <div className="col-md-12">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Phone</label>
                                <input type="phone" class="form-control" id="inputPassword4" placeholder="Phone" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCity">City</label>
                                <input type="text" class="form-control" id="inputCity" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" class="form-control">
                                    <option selected>Choose...</option>
                                    <option>New South Wales</option>
                                </select>
                            </div>
                            <div class="form-group col-md-2">
                                <label for="inputZip">Postcode</label>
                                <input type="text" class="form-control" id="inputZip" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary mb-1">Create Account</button>
                    </form>
                </div>
    )
}

export default UpdateAccountForm;